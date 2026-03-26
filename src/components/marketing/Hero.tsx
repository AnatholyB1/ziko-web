import { getTranslations } from 'next-intl/server';

export async function Hero() {
  const t = await getTranslations('Home');

  return (
    <section>
      <div className="max-w-screen-xl mx-auto px-8 pt-16 pb-24">
        <div className="flex flex-col md:flex-row md:items-center gap-8">
          {/* Left column — copy + CTAs */}
          <div className="flex flex-col gap-6 justify-center md:w-1/2">
            <h1 className="text-3xl md:text-4xl font-bold text-text leading-tight">
              {t('hero.headline')}
            </h1>
            <p className="text-base text-muted leading-relaxed">
              {t('hero.subline')}
            </p>
            <div className="flex gap-4 mt-2">
              <a
                href="#"
                className="bg-primary text-white px-6 py-3 rounded-xl font-bold text-sm inline-block"
              >
                {t('hero.ctaAppStore')}
              </a>
              <a
                href="#"
                className="bg-primary text-white px-6 py-3 rounded-xl font-bold text-sm inline-block"
              >
                {t('hero.ctaPlayStore')}
              </a>
            </div>
          </div>

          {/* Right column — CSS phone frame */}
          <div className="flex justify-center items-center md:w-1/2">
            <div
              style={{
                width: 220,
                height: 440,
                borderRadius: 32,
                border: '3px solid #1C1A17',
                boxShadow: '0 24px 64px rgba(0,0,0,0.18)',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: 30,
                  background: 'linear-gradient(160deg, #FF5C1A 0%, #FFB199 60%, #F7F6F3 100%)',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  top: 8,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: 80,
                  height: 20,
                  borderRadius: 12,
                  background: '#1C1A17',
                  zIndex: 10,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
