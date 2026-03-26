import { setRequestLocale, getTranslations } from 'next-intl/server';

type Props = { params: Promise<{ locale: string }> };

export default async function PolitiqueConfidentialitePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('LegalStub');

  return (
    <main className="max-w-screen-xl mx-auto px-8 py-16">
      <section>
        <h1 className="text-2xl font-semibold mb-4">Politique de confidentialit\u00e9</h1>
        <p className="text-muted">{t('comingSoon')}</p>
      </section>
    </main>
  );
}
