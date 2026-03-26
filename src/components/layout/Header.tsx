import { getTranslations, getLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';

export async function Header() {
  const t = await getTranslations('Header');
  const locale = await getLocale();

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border">
      <div className="max-w-screen-xl mx-auto px-8 h-14 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-primary">
          {t('logo')}
        </Link>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Link
              href="/"
              locale="fr"
              className={locale === 'fr' ? 'font-bold text-text text-sm' : 'text-sm text-muted hover:text-text'}
            >
              {t('localeFR')}
            </Link>
            <span className="text-muted text-sm">|</span>
            <Link
              href="/"
              locale="en"
              className={locale === 'en' ? 'font-bold text-text text-sm' : 'text-sm text-muted hover:text-text'}
            >
              {t('localeEN')}
            </Link>
          </div>
          <Link href="#" className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-bold">
            {t('cta')}
          </Link>
        </div>
      </div>
    </header>
  );
}
