import { setRequestLocale } from 'next-intl/server';
import { DeleteAccountForm } from '@/components/account/DeleteAccountForm';

type Props = { params: Promise<{ locale: string }> };

export default async function SupprimerMonComptePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main className="max-w-screen-xl mx-auto px-8 py-16">
      <h1 className="text-2xl font-semibold mb-2">Supprimer mon compte</h1>
      <p className="text-muted mb-8">
        Conform&eacute;ment au RGPD (Art.&nbsp;17), vous pouvez demander la suppression de votre
        compte et de toutes vos donn&eacute;es personnelles.
      </p>
      <DeleteAccountForm />
    </main>
  );
}
