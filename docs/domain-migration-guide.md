# gtsusainc.com: Old Site Backup & Domain Migration Guide

> Saved record of the planning conversation (2026-10-30), kept in the repo so it is available on any computer.
> Assistant note: when the user asks about the domain, DNS, old-site backup, CloudFront or go-live, reproduce this guide and the suggestions below.

---

## ✅ Current progress (last updated 2026-10-30)

| # | Task | Status |
|---|---|---|
| 1 | CloudFront setup for the new site | ✅ Done (reported by user). Before go-live, confirm: origin = S3 *website* endpoint, ACM cert (us-east-1) attached, alternate domains `gtsusainc.com` + `www.gtsusainc.com` |
| 2 | Old site **SQL database** backup downloaded to local machine (`system_gtsusainc_2026…3541.sql`) | ✅ Done. **Database ONLY** |
| 2b | Old site **files** backup (`htdocs` / `wp-content`, themes, uploads, images; ~92 GB on hosting) | ⏳ **NOT done yet.** Without the files, the old site can't be fully restored |
| 3 | Client approval for go-live | ⏳ Waiting on client |
| 4 | DNS/CNAME change in Network Solutions | ⏳ After approval only (see section 5.4). Keep the MX/SPF email records |
| 5 | Site live on gtsusainc.com + verify (site, deep links, contact form, **email**) | ⏳ After step 4 (see section 5.5) |
| - | Upload `/about` fix build (`trailingSlash: true`) to S3 | ⏳ Confirm it's uploaded |

> Old site must **stay live** until the client approves. Nothing done so far affects the live site.
> ⚠️ Never click "Restore to Snapshot", "Restore Backup", "Delete" or "Disabled" in the Network Solutions hosting panel.

### Where the database backup came from (to repeat it later)
Network Solutions → **Hosting** → **Database Manager** → row `gtsusainc` → **⋮** → **Restore/View Backup** → **Download Backup** → pick the latest date.
The same backups also live on the hosting at `/backup/sql/gtsusainc`.

---

## 1. The request (from the client)

- The new GTS Engineering site (this Next.js repo) is deployed at:
  `http://gts-engineering.s3-website.ap-south-1.amazonaws.com/`
- The live domain `https://gtsusainc.com/` is registered at **Network Solutions** (we have login access).
- Goals:
  1. **Get a backup of the client's OLD website** before replacing it. Only the URL was known (`https://gtsusainc.com/`).
  2. **Make gtsusainc.com show the new site** (the S3 one) by using Network Solutions.

---

## 2. What was found (checked 2026-10-30)

| Item | Finding | Why it matters |
|---|---|---|
| Old site | **WordPress 7.1.4**, hosted by Network Solutions (IP `206.188.193.130`) | Full backup is possible from the Network Solutions hosting panel. No old developer is needed. |
| DNS | Nameservers `ns35.worldnic.com` / `ns36.worldnic.com` (Network Solutions) | DNS is edited in Network Solutions → Domains → Manage DNS / Advanced DNS. |
| **Email** | MX: `mx001.netsol.xion.oxcs.net`, `mx002.netsol.xion.oxcs.net` (priority 10). SPF TXT: `v=spf1 include:spf.registeredsite.com include:spf.cloudus.oxcs.net ~all` | ⚠️ **info@gtsusainc.com depends on these. Never delete or forget them when changing DNS.** |
| Old site bot block | Plain `curl` gets 403. A browser User-Agent gets 200. | Use `-U "Mozilla/5.0"` with wget. |
| New site | S3 static website endpoint, HTTP only | **CloudFront** is needed for HTTPS on the custom domain. |
| `/about` bug | `/about` returned 404 on S3 | **FIXED**, see section 3. |
| Banner in NS account | "cWatch Basic has expired" | Not required for the site. Check that the **hosting** package hasn't also expired before backing up. |

---

## 3. `/about` 404 fix (DONE in code, 2026-10-30)

**Cause:** Next.js static export wrote `about.html`. The S3 website endpoint can't map `/about` → `about.html`, so pages failed on refresh or direct links (they only worked through client-side navigation).

**Fix:** added `trailingSlash: true` in `next.config.ts`. The export now writes `about/index.html` (146 pages as `folder/index.html`), which S3 and CloudFront serve correctly. `/about` redirects to `/about/`.

**Deploying the fix:** build and upload the `out/` folder to the bucket.
```bash
npm run build
aws s3 sync out/ s3://gts-engineering/ --delete   # --delete removes old about.html etc.
```
(If you upload with the AWS console instead: empty the bucket, then upload the *contents* of `out/`.)
Verify: `http://gts-engineering.s3-website.ap-south-1.amazonaws.com/about/` loads.

---

## 4. Part 1: Back up the OLD site (do this FIRST)

Do not change DNS or cancel hosting until the backup is downloaded and checked.

### 4.1 Full backup from the Network Solutions hosting panel (best)
1. Network Solutions → **Hosting** → the gtsusainc.com package. Check the **expiry date**.
2. Open the control panel (cPanel / Manage Hosting):
   - **File Manager** → compress the web root (`public_html` / `htdocs`) → download the .zip.
   - **phpMyAdmin / MySQL** → export the WordPress database as `.sql`.
   - If a **Backup** tool exists, use it (it downloads everything in one step).
3. Files + database = the complete site, which can be restored on any WordPress host.

### 4.2 WordPress admin backup (if you can log in)
- `https://gtsusainc.com/wp-admin`. If the password is unknown, use "Lost your password", reset it in phpMyAdmin (`wp_users`), or create an admin from the hosting panel.
- Install **All-in-One WP Migration** or **UpdraftPlus** → export → download.

### 4.3 Offline browsable copy (extra safety, viewable but not editable)
```bash
wget --mirror --convert-links --adjust-extension --page-requisites --no-parent \
  -U "Mozilla/5.0" https://gtsusainc.com/
```
(HTTrack is a GUI alternative.)

### 4.4 Optional: keep the old site viewable online
- DNS **A record**: `old.gtsusainc.com` → `206.188.193.130`
- In WordPress, set Settings → General (or `siteurl` / `home` in the DB) to `https://old.gtsusainc.com`.
- Keep the Network Solutions hosting plan active for this.

---

## 5. Part 2: Point gtsusainc.com to the new site

### Do I need to connect the S3 bucket to CloudFront? YES.
- The S3 website endpoint is **HTTP only**. It can't serve `https://gtsusainc.com` with an SSL certificate.
- The S3 bucket is named `gts-engineering`, not `gtsusainc.com`, so DNS can't point straight at it.
- The root domain (`gtsusainc.com`, without www) can't be a CNAME.
- CloudFront fixes all three: free SSL (ACM), custom domains, HTTPS, caching/CDN.
- The flow is: **Visitor → gtsusainc.com (DNS) → CloudFront (HTTPS) → S3 website endpoint (origin)**.

### 5.1 Fix routing: DONE (section 3), but it still has to be uploaded.

### 5.2 SSL certificate (AWS Certificate Manager)
1. Switch the region to **us-east-1 (N. Virginia)**. CloudFront requires that region.
2. Request a public certificate for `gtsusainc.com` + `www.gtsusainc.com`, **DNS validation**.
3. Add the 2 CNAME records ACM gives in **Network Solutions → Domains → gtsusainc.com → Manage DNS → Advanced DNS**.
4. Wait for status **Issued** (5–30 minutes).

### 5.3 CloudFront distribution
- **Origin domain:** `gts-engineering.s3-website.ap-south-1.amazonaws.com`. Type it as a **custom origin** with protocol **HTTP only**. Do NOT pick the bucket from the dropdown (that uses the REST endpoint, which breaks `/about/` → `index.html`).
- **Viewer protocol policy:** Redirect HTTP to HTTPS
- **Alternate domain names (CNAMEs):** `gtsusainc.com`, `www.gtsusainc.com`
- **Custom SSL certificate:** the ACM one from 5.2
- **Default root object:** `index.html`
- **Custom error response:** 404 → `/404.html` (response code 404)
- Note the distribution domain, e.g. `d1abc123.cloudfront.net`.
- Test the site on that `*.cloudfront.net` URL before touching DNS.

### 5.4 DNS: choose one option

**Option A (recommended): move DNS to AWS Route 53** (~$0.50/month)
Route 53 **Alias** records let the root domain point to CloudFront. Network Solutions DNS likely does not support that.
1. Route 53 → create hosted zone `gtsusainc.com`.
2. **Copy EVERY existing record from Network Solutions first**: MX, SPF TXT, any mail/autodiscover CNAMEs, ACM validation CNAMEs. Screenshot the Advanced DNS page first.
3. Add `A` (Alias) records: `gtsusainc.com` → CloudFront, `www.gtsusainc.com` → CloudFront.
4. Network Solutions → Domains → **Change Nameservers** → enter the 4 Route 53 nameservers.
5. The domain registration stays at Network Solutions. Only DNS moves.

**Option B: keep DNS at Network Solutions**
- `www` → **CNAME** → `d1abc123.cloudfront.net`
- Root domain: Network Solutions **Domain Forwarding** `gtsusainc.com` → `https://www.gtsusainc.com`. HTTPS on the root through forwarding may not work, so test carefully.
- Email records stay as they are.

### 5.5 After go-live checklist
- [ ] `https://gtsusainc.com`, `https://www.gtsusainc.com`, `/about/`, other deep links load
- [ ] Contact / consultation form works (add the new domain to any CORS allow-list)
- [ ] **Send and receive a test email at info@gtsusainc.com**
- [ ] CloudFront invalidation `/*` after each deploy
- [ ] Submit `https://gtsusainc.com/sitemap.xml` in Google Search Console
- [ ] Consider redirects for important old WordPress URLs (they'll 404 now)
- [ ] Cancel Network Solutions **hosting** only after the backup is checked and the client doesn't want `old.gtsusainc.com`. **Keep the domain registration and email subscriptions.**

---

## 6. What else is needed
1. **Network Solutions login with full rights**: confirm the **Hosting** and **Email** sections are visible, not only Domains.
2. **AWS access** (ACM, CloudFront, S3, and Route 53 for Option A). Run `aws configure` on each new computer. Credentials are NOT stored in this repo.
3. **Client approval of a go-live window** (DNS takes minutes up to 24–48 hours to reach everyone).
4. **Client confirmation of which email addresses/services they use**, so nothing is missed.
5. Optional: the old WordPress admin login (recoverable, see 4.2).

## 7. Order of work
Backup (Part 1) → upload the `/about` fix to S3 → ACM cert → CloudFront → test on the `*.cloudfront.net` URL → DNS switch → verify site + email.

## 8. Status log
- 2026-10-30: Network Solutions hosting found: **Premium (Hosting-Unix)**, IP `206.188.193.130`, **Active, renews Oct 9, 2030** (no deadline risk). Uses **92 GB** web disk, 1 MySQL DB (~300 MB). Panel tools: Website Backups, Database Manager, File Manager, SFTP Account Manager, Softaculous, Cloud Backup (Xcitium, paid). The Mac only has ~9.5 GB free, so check what the 92 GB is before downloading everything, or use an external drive. Client wants the old site to stay live until they approve the DNS switch.
- 2026-10-30: **Website Backups** page has 14 nightly snapshots (Oct 17–30), but only a "Restore to Snapshot" option and **no download**. ⚠️ Never click Restore: it overwrites the live site. Database found: name `gtsusainc`, server `vuxmysql11`, user `gtsusainc`, MySQL 8.0, **3.4 MB**. The DB password is in `wp-config.php` (`DB_PASSWORD`). Don't change the DB password, or the live site breaks. Next: database export via Database Manager → phpMyAdmin, then files via File Manager / SFTP.
- 2026-10-30: ✅ **SQL database downloaded** to the local machine (`system_gtsusainc_2026…3541.sql`) using Database Manager → ⋮ → Restore/View Backup → Download Backup. **Database only. Website files are not backed up yet.**
- 2026-10-30: User reports **CloudFront is set up**. Remaining: client approval → DNS/CNAME change → go live.
- 2026-10-30: Investigation done. `trailingSlash: true` fix applied in `next.config.ts` and build verified locally. **Upload to S3 still pending** (no AWS credentials on that machine).
