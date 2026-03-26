import { getTranslations } from 'next-intl/server';
import { IoCheckmarkCircleOutline } from 'react-icons/io5';

export async function Pricing() {
  const t = await getTranslations('Home');

  return (
    <section className="py-24">
      <div className="max-w-screen-xl mx-auto px-8">
        <h2 className="text-xl font-bold text-text mb-8 text-center">
          {t('pricing.heading')}
        </h2>

        <div className="bg-white border-2 border-primary rounded-2xl p-8 max-w-sm mx-auto">
          <div className="text-center mb-6">
            <span className="text-4xl font-bold text-text">{t('pricing.price')}</span>
            <span className="text-muted text-base"> {t('pricing.priceUnit')}</span>
          </div>

          <ul className="flex flex-col gap-3 mb-6">
            <li className="flex items-start gap-2 text-sm text-text leading-relaxed">
              <IoCheckmarkCircleOutline className="text-primary flex-shrink-0 mt-0.5" size={18} />
              <span>{t('pricing.valueProp1')}</span>
            </li>
            <li className="flex items-start gap-2 text-sm text-text leading-relaxed">
              <IoCheckmarkCircleOutline className="text-primary flex-shrink-0 mt-0.5" size={18} />
              <span>{t('pricing.valueProp2')}</span>
            </li>
            <li className="flex items-start gap-2 text-sm text-text leading-relaxed">
              <IoCheckmarkCircleOutline className="text-primary flex-shrink-0 mt-0.5" size={18} />
              <span>{t('pricing.valueProp3')}</span>
            </li>
          </ul>

          <a
            href="#"
            className="block w-full bg-primary text-white py-3 rounded-xl font-bold text-base text-center"
          >
            {t('pricing.cta')}
          </a>
        </div>
      </div>
    </section>
  );
}
