import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';

export async function Footer() {
  const t = await getTranslations('Footer');
  return (
    <footer className="bg-white border-t-2 border-t-primary">
      <div className="max-w-screen-xl mx-auto px-8 py-6 flex justify-between items-center">
        <p className="text-sm text-muted">{t('copyright')}</p>
        <nav className="flex gap-4">
          <Link href="/mentions-legales" className="text-sm text-text hover:underline">
            {t('legal')}
          </Link>
          <Link href="/politique-de-confidentialite" className="text-sm text-text hover:underline">
            {t('privacy')}
          </Link>
          <Link href="/cgu" className="text-sm text-text hover:underline">
            {t('terms')}
          </Link>
        </nav>
      </div>
    </footer>
  );
}
