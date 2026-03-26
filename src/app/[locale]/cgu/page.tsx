import { setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';

type Props = { params: Promise<{ locale: string }> };

export default async function CguPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main className="max-w-screen-xl mx-auto px-8 py-16">
      <CguContent />
    </main>
  );
}

function CguContent() {
  const t = useTranslations('LegalStub');
  return (
    <section>
      <h1 className="text-2xl font-semibold mb-4">CGU</h1>
      <p className="text-muted">{t('comingSoon')}</p>
    </section>
  );
}
