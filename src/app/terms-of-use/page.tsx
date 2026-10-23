import type { Metadata } from 'next';
import LegalDocumentView from '@/components/legal/LegalDocumentView';
import { termsOfUse } from '@/constants/legalContent';

export const metadata: Metadata = {
  title: 'Terms of Use | GTS Engineering',
  description: 'The terms that govern access to and use of the GTS Engineering® USA Incorporated website.',
  alternates: {
    canonical: 'https://gtsusainc.com/terms-of-use'
  }
};

export default function TermsOfUsePage() {
  return <LegalDocumentView document={termsOfUse} />;
}
