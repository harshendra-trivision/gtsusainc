import SolutionDetailPage, { generateMetadata as generateDetailMetadata } from './[slug]/page';

export async function generateMetadata() {
  return generateDetailMetadata({ params: Promise.resolve({ slug: 'plant-process-engineering' }) });
}

export default async function SolutionsIndexPage() {
  return SolutionDetailPage({
    params: Promise.resolve({ slug: 'plant-process-engineering' }),
  });
}
