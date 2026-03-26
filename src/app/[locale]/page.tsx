import { setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';

type Props = { params: Promise<{ locale: string }> };

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main className="max-w-screen-xl mx-auto px-8 py-16">
      <HomeContent />
    </main>
  );
}

function HomeContent() {
  const t = useTranslations('Home');
  return (
    <section>
      <h1 className="text-2xl font-semibold mb-4">{t('heading')}</h1>
      <p className="text-muted">{t('body')}</p>
    </section>
  );
}
