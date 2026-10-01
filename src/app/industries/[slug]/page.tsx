import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  ArrowLeft,
  CheckCircle2,
  Mail,
  MessageSquare,
  Droplet,
  Factory,
  FlaskConical,
  Sprout,
  Leaf,
  Zap,
  Server,
  Cpu,
  Atom,
  Cloud,
  Car,
  ShoppingCart,
  Settings,
  Plane,
  Landmark
} from 'lucide-react';
import { industries } from '@/constants/industries';
import { AnimatedSection } from '@/components/ui';

// Pre-render static paths at build time for optimal speed and SEO
export async function generateStaticParams() {
  return industries.map((ind) => ({
    slug: ind.slug,
  }));
}

// Generate dynamic metadata for search optimization
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const ind = industries.find((i) => i.slug === slug);
  if (!ind) return {};

  return {
    title: ind.seoTitle,
    description: ind.seoDescription,
    keywords: ind.seoKeywords,
    alternates: {
      canonical: `https://gtsusainc.com/industries/${slug}`
    }
  };
}

function renderDomainIcon(name: string) {
  const normalized = name.toLowerCase();

  // 1. Data Centers & Digital Infrastructure
  if (normalized.includes('hyperscale')) {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
        <rect width="18" height="5" x="3" y="3" rx="1" />
        <rect width="18" height="5" x="3" y="10" rx="1" />
        <rect width="18" height="5" x="3" y="17" rx="1" />
        <circle cx="7" cy="5.5" r="1" />
        <circle cx="7" cy="12.5" r="1" />
        <circle cx="7" cy="19.5" r="1" />
      </svg>
    );
  }
  if (normalized.includes('ai compute') || normalized.includes('ai facilities')) {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
        <rect width="14" height="14" x="5" y="5" rx="2" />
        <circle cx="12" cy="12" r="2.5" />
        <path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3" />
      </svg>
    );
  }
  if (normalized.includes('colocation')) {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
        <rect width="18" height="6" x="3" y="4" rx="1" />
        <rect width="18" height="6" x="3" y="14" rx="1" />
        <path d="M6 7h.01M6 17h.01M10 7h8M10 17h8" />
      </svg>
    );
  }
  if (normalized.includes('edge computing') || normalized.includes('edge')) {
    return <Cloud className="w-4 h-4" />;
  }
  if (normalized.includes('telecom')) {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
        <path d="M12 2v20" />
        <path d="m8 22 2.5-16h3L16 22" />
        <path d="M6 10h12" />
        <path d="M7 16h10" />
        <circle cx="12" cy="4" r="1.5" />
        <path d="M16 2a4 4 0 0 1 0 4M8 2a4 4 0 0 0 0 4" />
      </svg>
    );
  }
  if (normalized.includes('digital infrastructure')) {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
        <circle cx="5" cy="5" r="2" />
        <circle cx="19" cy="5" r="2" />
        <circle cx="5" cy="19" r="2" />
        <circle cx="19" cy="19" r="2" />
        <circle cx="12" cy="12" r="2.5" />
        <path d="m6.5 6.5 4 4M17.5 6.5l-4 4M6.5 17.5l4-4M17.5 17.5l-4-4" />
      </svg>
    );
  }

  // 2. Semiconductor & Advanced Manufacturing
  if (normalized.includes('semiconductor fab') || normalized.includes('fab')) {
    return <Cpu className="w-4 h-4" />;
  }
  if (normalized.includes('electronics manufacturing') || normalized.includes('electronic')) {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
        <rect width="18" height="18" x="3" y="3" rx="2" />
        <circle cx="8" cy="8" r="1.5" />
        <circle cx="16" cy="8" r="1.5" />
        <circle cx="12" cy="16" r="1.5" />
        <path d="M8 9.5v3.5l4 3" />
        <path d="M16 9.5v3.5l-4 3" />
      </svg>
    );
  }
  if (normalized.includes('cleanroom')) {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
        <path d="M3 21h18" />
        <path d="M5 21V7l7-4 7 4v14" />
        <path d="M9 10h6" />
        <path d="M9 14h6" />
        <path d="M9 18h6" />
      </svg>
    );
  }
  if (normalized.includes('advanced manufacturing')) {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
        <path d="M2 20h20" />
        <path d="M4 20V9l4-3 4 3v11" />
        <path d="M12 20V5l5-3v18" />
        <path d="M17 11h3v9" />
      </svg>
    );
  }
  if (normalized.includes('precision manufacturing') || normalized.includes('precision')) {
    return <Settings className="w-4 h-4" />;
  }

  // 3. Manufacturing & Industrial Systems
  if (normalized.includes('heavy equipment')) {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
        <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
        <path d="M15 18H9" />
        <path d="M19 18h2a1 1 0 0 0 1-1v-5l-4-4h-4v10" />
        <circle cx="7" cy="18" r="2" />
        <circle cx="17" cy="18" r="2" />
      </svg>
    );
  }
  if (normalized.includes('industrial machinery') || normalized.includes('machinery')) {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
        <path d="M6 20h12" />
        <path d="M6 4h4v5l3 3v8H6V4z" />
        <circle cx="15" cy="8" r="3" />
      </svg>
    );
  }
  if (normalized.includes('automotive') || normalized.includes('auto')) {
    return <Car className="w-4 h-4" />;
  }
  if (normalized.includes('consumer product') || normalized.includes('consumer')) {
    return <ShoppingCart className="w-4 h-4" />;
  }
  if (normalized.includes('industrial automation') || normalized.includes('robot')) {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
        <rect width="6" height="4" x="3" y="17" rx="1" />
        <circle cx="10" cy="13" r="2" />
        <path d="m11.5 11.5 5-5" />
        <circle cx="18" cy="5" r="2" />
        <path d="m20 5 2 2" />
        <path d="M18 3v-1" />
        <path d="m5 17 3.5-3" />
      </svg>
    );
  }

  // 4. Infrastructure & Transportation
  if (normalized.includes('highway')) {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
        <path d="m4 21 4-18h8l4 18" />
        <path d="M12 5v3M12 11v3M12 17v3" />
      </svg>
    );
  }
  if (normalized.includes('bridge')) {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
        <path d="M2 18h20" />
        <path d="M6 18V6a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v12" />
        <path d="M15 18V6a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v12" />
        <path d="M2 10c4 3 6 4 7 4s3-1 7-4 3-1 6 0" />
      </svg>
    );
  }
  if (normalized.includes('airport')) {
    return <Plane className="w-4 h-4" />;
  }
  if (normalized.includes('port')) {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
        <path d="M2 20h20" />
        <path d="m4 16 2-7h12l2 7H4z" />
        <path d="M9 9V5h6v4" />
        <path d="M12 5V2" />
      </svg>
    );
  }
  if (normalized.includes('tunnel')) {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
        <path d="M3 21h18" />
        <path d="M5 21V12a7 7 0 0 1 14 0v9" />
        <path d="M9 21v-4a3 3 0 0 1 6 0v4" />
      </svg>
    );
  }
  if (normalized.includes('rail') || normalized.includes('transit')) {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
        <rect width="14" height="14" x="5" y="3" rx="2" />
        <path d="M5 11h14" />
        <path d="m8 17-2 4M16 17l2 4M8 21h8" />
        <circle cx="8" cy="14" r="1" />
        <circle cx="16" cy="14" r="1" />
      </svg>
    );
  }

  // 5. Mining & Metals
  if (normalized === 'mining' || normalized.includes('mining ')) {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
        <path d="M14 18V9l-3-4H4a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h2" />
        <path d="M15 18H9" />
        <path d="M19 18h2a1 1 0 0 0 1-1v-4l-3-4h-4v9" />
        <circle cx="7" cy="18" r="2" />
        <circle cx="17" cy="18" r="2" />
        <path d="M5 5l4-3 3 2" />
      </svg>
    );
  }
  if (normalized.includes('mineral processing')) {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
        <path d="M3 21h18" />
        <path d="M4 21V10l5-3 5 3v11" />
        <path d="M14 21V6l5-3v18" />
        <path d="m3 14 18-4" />
      </svg>
    );
  }
  if (normalized.includes('smelter')) {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
        <path d="M5 7h14l-2 11a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2L5 7z" />
        <path d="M3 7h18" />
        <path d="M12 2v5" />
        <path d="M10 14h4" />
      </svg>
    );
  }
  if (normalized.includes('steel')) {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    );
  }
  if (normalized.includes('aluminum') || normalized.includes('aluminium')) {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
        <path d="m4 12 3-6h10l3 6H4z" />
        <path d="m2 20 3-6h14l3 6H2z" />
      </svg>
    );
  }
  if (normalized.includes('copper')) {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
        <rect width="18" height="14" x="3" y="5" rx="2" />
        <path d="M7 5v14M12 5v14M17 5v14" />
      </svg>
    );
  }

  // 6. Life Sciences & Healthcare
  if (normalized.includes('pharma')) {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
        <path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z" />
        <path d="m8.5 8.5 7 7" />
      </svg>
    );
  }
  if (normalized.includes('biotech')) {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
        <path d="m2 15 2-2a6 6 0 0 1 8.5 0l1 1a6 6 0 0 0 8.5 0l2-2" />
        <path d="m2 9 2 2a6 6 0 0 0 8.5 0l1-1a6 6 0 0 1 8.5 0l2 2" />
        <path d="M6 7.5v9M10 6v12M14 6v12M18 7.5v9" />
      </svg>
    );
  }
  if (normalized.includes('medical device') || normalized.includes('medical')) {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
        <rect width="18" height="12" x="3" y="4" rx="2" />
        <path d="m6 10 2 0 1-3 2 6 2-4 1 1 4 0" />
        <path d="M8 20h8" />
        <path d="M12 16v4" />
      </svg>
    );
  }
  if (normalized.includes('hospital')) {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
        <path d="M3 21h18" />
        <path d="M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16" />
        <path d="M12 7v6M9 10h6" />
        <path d="M10 21v-4h4v4" />
      </svg>
    );
  }
  if (normalized.includes('research')) {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
        <path d="M6 18h8" />
        <path d="M3 22h18" />
        <path d="M14 22a7 7 0 1 0-7-7" />
        <path d="m9 14 5.2-5.2a2 2 0 0 0 0-2.8l-1.4-1.4a2 2 0 0 0-2.8 0L4.8 9.8" />
        <circle cx="17" cy="3" r="1" />
      </svg>
    );
  }
  if (normalized.includes('laborator') || normalized.includes('lab')) {
    return <FlaskConical className="w-4 h-4" />;
  }

  // 7. Power & Energy Transition
  if (normalized.includes('conventional power') || normalized.includes('power plant')) {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
        <path d="M6 20h12" />
        <path d="M7 20c0-6 1.5-12 2-16h6c.5 4 2 10 2 16" />
        <path d="M9 10h6" />
        <path d="M8 15h8" />
      </svg>
    );
  }
  if (normalized.includes('renewable')) {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
        <path d="M12 2v20" />
        <path d="m12 6-4-3" />
        <path d="m12 6 4.5-1" />
        <path d="m12 6-.5 4.5" />
        <circle cx="12" cy="6" r="1.5" />
      </svg>
    );
  }
  if (normalized.includes('nuclear')) {
    return <Atom className="w-4 h-4" />;
  }
  if (normalized.includes('battery') || normalized.includes('bess') || normalized.includes('storage')) {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
        <rect width="14" height="18" x="5" y="4" rx="2" />
        <path d="M10 2v2" />
        <path d="M14 2v2" />
        <path d="M12 9v6" />
        <path d="M9 12h6" />
      </svg>
    );
  }
  if (normalized.includes('transmission') || normalized.includes('distribution')) {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
        <path d="M12 2v20" />
        <path d="m6 22 4-18h4l4 18" />
        <path d="M4 8h16" />
        <path d="M5 13h14" />
        <path d="M7 18h10" />
      </svg>
    );
  }
  if (normalized.includes('grid modernization') || normalized.includes('modernization')) {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
        <rect width="7" height="12" x="3" y="10" rx="1" />
        <rect width="7" height="12" x="14" y="10" rx="1" />
        <path d="M6 10V6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v4" />
        <path d="M6.5 14h.01" />
        <path d="M17.5 14h.01" />
      </svg>
    );
  }
  if (normalized.includes('smart grid')) {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
        <circle cx="12" cy="5" r="2" />
        <circle cx="5" cy="18" r="2" />
        <circle cx="19" cy="18" r="2" />
        <path d="M12 7v5" />
        <path d="m7 16 3.5-3" />
        <path d="m17 16-3.5-3" />
        <circle cx="12" cy="13" r="1.5" />
      </svg>
    );
  }
  if (normalized.includes('utilit')) {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
        <circle cx="12" cy="12" r="9" />
        <path d="M13 7 9 13h4l-1 5 5-7h-4l1-4z" />
      </svg>
    );
  }

  // 8. Energy & Process Industries
  if (normalized.includes('oil & gas') || (normalized.includes('oil') && !normalized.includes('bio'))) {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
        <path d="M12 2v20" />
        <path d="m5 22 4.5-16h5L19 22" />
        <path d="M7 15h10" />
        <path d="M8 9h8" />
      </svg>
    );
  }
  if (normalized.includes('lng')) {
    return <Droplet className="w-4 h-4" />;
  }
  if (normalized.includes('refiner')) {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
        <path d="M4 22V8a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v14" />
        <path d="M13 22V5a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v17" />
        <path d="M2 22h20" />
        <path d="M7 11h2" />
        <path d="M7 16h2" />
        <path d="M16 8h2" />
        <path d="M16 13h2" />
      </svg>
    );
  }
  if (normalized.includes('petrochem')) {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
        <rect width="18" height="18" x="3" y="3" rx="2" />
        <path d="m3 3 18 18" />
        <path d="m21 3-18 18" />
      </svg>
    );
  }
  if (normalized.includes('chem')) {
    return <FlaskConical className="w-4 h-4" />;
  }
  if (normalized.includes('fertiliz')) {
    return <Sprout className="w-4 h-4" />;
  }
  if (normalized.includes('industrial gas') || (normalized.includes('gas') && !normalized.includes('oil'))) {
    return <Factory className="w-4 h-4" />;
  }
  if (normalized.includes('hydrogen')) {
    return (
      <span className="font-bold text-xs text-sky-600 leading-none tracking-tighter">
        H<sub className="text-[9px]">2</sub>
      </span>
    );
  }
  if (normalized.includes('biofuel') || normalized.includes('bio')) {
    return <Leaf className="w-4 h-4" />;
  }

  // Fallbacks
  if (normalized.includes('power') || normalized.includes('grid') || normalized.includes('electric') || normalized.includes('energy')) {
    return <Zap className="w-4 h-4" />;
  }
  if (normalized.includes('data') || normalized.includes('server') || normalized.includes('cloud')) {
    return <Server className="w-4 h-4" />;
  }
  if (normalized.includes('semiconductor') || normalized.includes('chip') || normalized.includes('fab')) {
    return <Cpu className="w-4 h-4" />;
  }

  return <Factory className="w-4 h-4" />;
}

export default async function IndustryDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const ind = industries.find((i) => i.slug === slug);

  if (!ind) {
    notFound();
  }

  const heroImageSrc = ind.heroImage || ind.image || '/image/industries/energy and process industries.jpg';
  const supportingImageSrc = ind.supportingImage || '/image/industries/energy and process industries supporting image.jpg';
  const eyebrowText =
    ind.slug === 'energy-process-industries' || ind.slug === 'power-utilities-energy-transition'
      ? 'ENERGY SECTOR'
      : `${ind.title.toUpperCase()} SECTOR`;

  return (
    <div className="flex w-full flex-col bg-[#f8fafc]">
      {/* Full-width Hero Banner with Main Industry Image */}
      <section className="relative overflow-hidden bg-slate-950 py-20 sm:py-24 lg:py-28">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={heroImageSrc}
            alt={ind.title}
            fill
            priority
            quality={95}
            className="object-cover object-center"
          />
          {/* Subtle dark gradient overlay to ensure high contrast for typography */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/75 via-slate-950/50 to-slate-950/80" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center rounded-full border border-white/20 bg-black/40 px-4 py-1 backdrop-blur-sm shadow-sm">
            <span className="text-[11px] font-mono font-medium tracking-widest text-slate-200 uppercase">
              {eyebrowText}
            </span>
          </div>

          {/* Main Title */}
          <h1 className="mt-4 text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white font-display">
            {ind.title}
          </h1>

          {/* Subtitle */}
          <p className="mt-4 max-w-2xl text-sm sm:text-base md:text-lg leading-relaxed text-slate-200">
            {ind.tagline}
          </p>

          {/* Back to All Industries Button */}
          <div className="mt-6">
            <Link
              href="/industries"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-slate-900/60 backdrop-blur-md px-5 py-2 text-xs font-mono uppercase tracking-wider text-slate-200 hover:text-white hover:bg-slate-900/80 transition-all shadow-sm"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>BACK TO ALL INDUSTRIES</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-10 sm:py-14">
        <AnimatedSection as="div" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            
            {/* Left Column: Sector Overview & Specialized Domain Segments */}
            <div className="lg:col-span-7 space-y-8">
              {/* Sector Overview Description */}
              <div className="space-y-3">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-display">
                  Sector Overview
                </h2>
                <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                  {ind.description}
                </p>
              </div>

              {/* Specialized Domain Segments */}
              <div className="pt-2">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-display mb-4">
                  Specialized Domain Segments
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {ind.subSectors.map((sub, i) => (
                    <div
                      key={i}
                      className="group bg-white border border-slate-200/90 rounded-xl p-3.5 flex items-center justify-between shadow-[0_1px_3px_rgba(0,0,0,0.04)] hover:shadow-md hover:border-sky-400 transition-all"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-lg bg-sky-50 text-sky-600 flex items-center justify-center shrink-0 group-hover:bg-sky-100 transition-colors">
                          {renderDomainIcon(sub)}
                        </div>
                        <span className="text-sm font-semibold text-slate-800 group-hover:text-sky-600 transition-colors">
                          {sub}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Supporting Image, Highlights & Capabilities, Discuss a Project */}
            <div className="lg:col-span-5 space-y-6">
              {/* Supporting Image Box */}
              <div className="relative w-full aspect-[2/1] rounded-2xl overflow-hidden border border-slate-200/90 bg-white shadow-sm">
                <Image
                  src={supportingImageSrc}
                  alt={`${ind.title} simulation and analysis`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                  quality={95}
                  priority
                />
              </div>

              {/* Highlights & Capabilities Card */}
              <div className="bg-white border border-slate-200/90 rounded-2xl p-6 shadow-sm">
                <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-700 font-mono mb-4">
                  HIGHLIGHTS &amp; CAPABILITIES
                </h4>
                <ul className="space-y-3.5">
                  {ind.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-sky-500 shrink-0 mt-0.5" />
                      <span className="text-xs text-slate-600 leading-snug">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Discuss a Project Card */}
              <div className="bg-[#0b162c] text-white rounded-2xl p-6 shadow-md">
                <h4 className="text-base font-bold text-white mb-1">
                  Discuss a Project
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed mb-5">
                  Request design extensions for your {ind.title.toLowerCase()} systems.
                </p>
                <div className="space-y-3">
                  <Link
                    href="/contact"
                    className="w-full py-2.5 px-4 bg-white text-slate-900 hover:bg-slate-100 font-semibold text-xs rounded-xl flex items-center justify-center gap-2 transition-colors shadow-sm"
                  >
                    <MessageSquare className="w-4 h-4 text-slate-800" />
                    <span>Submit Sector Inquiry &rarr;</span>
                  </Link>
                  <a
                    href="mailto:info@gtsusainc.com"
                    className="w-full flex items-center justify-center gap-2 text-xs text-slate-300 hover:text-white transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5 text-slate-400" />
                    <span>Email info@gtsusainc.com</span>
                  </a>
                </div>
              </div>
            </div>

          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}
