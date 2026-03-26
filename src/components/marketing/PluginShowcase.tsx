import { getTranslations } from 'next-intl/server';
import {
  IoTimerOutline,
  IoBicycleOutline,
  IoBarbellOutline,
  IoCalculatorOutline,
  IoBodyOutline,
  IoMoonOutline,
  IoScaleOutline,
  IoWaterOutline,
  IoWatchOutline,
  IoNutritionOutline,
  IoFlaskOutline,
  IoCheckmarkCircleOutline,
  IoPersonOutline,
  IoJournalOutline,
  IoTrophyOutline,
  IoStatsChartOutline,
  IoPeopleOutline,
} from 'react-icons/io5';
import type { IconType } from 'react-icons';

type Plugin = {
  id: string;
  icon: IconType;
  name: string;
};

type Category = {
  key:
    | 'categoryTraining'
    | 'categoryHealth'
    | 'categoryNutrition'
    | 'categoryCoaching'
    | 'categoryCommunity';
  plugins: Plugin[];
};

const CATEGORIES: Category[] = [
  {
    key: 'categoryTraining',
    plugins: [
      { id: 'timer', icon: IoTimerOutline, name: 'Timer & Chrono' },
      { id: 'cardio', icon: IoBicycleOutline, name: 'Cardio & Running' },
      { id: 'ai-programs', icon: IoBarbellOutline, name: 'Programmes IA' },
      { id: 'rpe', icon: IoCalculatorOutline, name: 'Calculateur RPE' },
      { id: 'stretching', icon: IoBodyOutline, name: 'Stretching & Mobilité' },
    ],
  },
  {
    key: 'categoryHealth',
    plugins: [
      { id: 'sleep', icon: IoMoonOutline, name: 'Sommeil & Récupération' },
      { id: 'measurements', icon: IoScaleOutline, name: 'Mesures & Progression' },
      { id: 'hydration', icon: IoWaterOutline, name: 'Hydratation' },
      { id: 'wearables', icon: IoWatchOutline, name: 'Wearables & Santé' },
    ],
  },
  {
    key: 'categoryNutrition',
    plugins: [
      { id: 'nutrition', icon: IoNutritionOutline, name: 'Nutrition Tracker' },
      { id: 'supplements', icon: IoFlaskOutline, name: 'Compléments' },
    ],
  },
  {
    key: 'categoryCoaching',
    plugins: [
      { id: 'habits', icon: IoCheckmarkCircleOutline, name: 'Habitudes & Objectifs' },
      { id: 'persona', icon: IoPersonOutline, name: 'AI Persona' },
      { id: 'journal', icon: IoJournalOutline, name: 'Journal & Mindset' },
      { id: 'gamification', icon: IoTrophyOutline, name: 'Récompenses' },
      { id: 'stats', icon: IoStatsChartOutline, name: 'Statistiques' },
    ],
  },
  {
    key: 'categoryCommunity',
    plugins: [
      { id: 'community', icon: IoPeopleOutline, name: 'Communauté' },
    ],
  },
];

export async function PluginShowcase() {
  const tHome = await getTranslations('Home');
  const tPlugins = await getTranslations('Plugins');

  return (
    <section className="py-24">
      <div className="max-w-screen-xl mx-auto px-8">
        <h2 className="text-xl font-bold text-text mb-8">
          {tHome('showcase.heading')}
        </h2>

        {CATEGORIES.map((category) => (
          <div key={category.key} className="mb-12">
            <h3 className="text-sm font-bold uppercase tracking-wide text-muted mb-4">
              {tHome(`showcase.${category.key}`)}
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {category.plugins.map((plugin) => {
                const Icon = plugin.icon;
                return (
                  <div
                    key={plugin.id}
                    className="bg-white border border-border rounded-xl p-4 flex flex-col gap-2"
                  >
                    <Icon className="text-text" size={24} />
                    <span className="text-sm font-bold text-text">{plugin.name}</span>
                    <p className="text-sm text-muted leading-relaxed">
                      {tPlugins(plugin.id)}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
