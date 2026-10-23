import type { Metadata } from 'next';
import LegalDocumentView from '@/components/legal/LegalDocumentView';
import { privacyPolicy } from '@/constants/legalContent';

export const metadata: Metadata = {
  title: 'Privacy Policy | GTS Engineering',
  description: 'How GTS Engineering® USA Incorporated collects, uses, stores, and protects your information.',
  alternates: {
    canonical: 'https://gtsusainc.com/privacy-policy'
  }
};

export default function PrivacyPolicyPage() {
  return <LegalDocumentView document={privacyPolicy} />;
}
