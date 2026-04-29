import type { Metadata } from 'next'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import { Hero } from '@/components/marketing/Hero'
import { HowItWorks } from '@/components/marketing/HowItWorks'
import { AICoach } from '@/components/marketing/AICoach'
import { PluginShowcase } from '@/components/marketing/PluginShowcase'
import { Pricing } from '@/components/marketing/Pricing'

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'Metadata' })

  return {
    title: t('homeTitle'),
    description: t('homeDescription'),
    alternates: {
      canonical: `/${locale}`,
      languages: { fr: '/fr', en: '/en' },
    },
    openGraph: {
      title: t('homeTitle'),
      description: t('homeDescription'),
      url: `/${locale}`,
      siteName: 'Ziko',
      images: [{ url: '/og-image.png', width: 1200, height: 630, alt: t('ogImageAlt') }],
      locale: locale === 'fr' ? 'fr_FR' : 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: t('homeTitle'),
      description: t('homeDescription'),
      images: ['/og-image.png'],
    },
  }
}

export default async function HomePage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)

  return (
    <main>
      <Hero />
      <HowItWorks />
      <AICoach />
      <PluginShowcase />
      <Pricing />
    </main>
  )
}
