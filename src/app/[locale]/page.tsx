import { setRequestLocale } from 'next-intl/server';
import { Hero } from '@/components/marketing/Hero';
import { PluginShowcase } from '@/components/marketing/PluginShowcase';
import { Pricing } from '@/components/marketing/Pricing';

type Props = { params: Promise<{ locale: string }> };

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main>
      <Hero />
      <PluginShowcase />
      <Pricing />
    </main>
  );
}
