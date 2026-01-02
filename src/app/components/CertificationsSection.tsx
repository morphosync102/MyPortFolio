import { CoffeeBeanIcon } from './CoffeeBeanIcon.js';

type CertificationItem = {
  id: string;
  name: string;
  description: string;
};

type CertificationsSectionProps = {
  items: CertificationItem[];
};

export function CertificationsSection({ items }: CertificationsSectionProps) {
  if (items.length === 0) {
    return null;
  }

  return (
    <section className="reveal-up delay-4 mt-12">
      <h2 className="text-lg font-semibold uppercase tracking-[0.2em] text-amber-700 dark:text-slate-300">
        Certifications
      </h2>
      <ul className="about-list mt-5 space-y-3 text-sm text-amber-800 dark:text-slate-300">
        {items.map((item) => (
          <li
            key={item.id}
            className="about-list-item flex gap-3 rounded-2xl border border-amber-200/80 bg-amber-50/90 px-4 py-3 leading-relaxed shadow-[0_12px_24px_rgba(216,165,110,0.16)] backdrop-blur-sm dark:border-slate-700 dark:bg-slate-800/90 dark:shadow-none"
          >
            <CoffeeBeanIcon className="coffee-bean-icon mt-1 text-amber-600 dark:text-amber-400" />
            <div>
              <span className="block text-base font-semibold text-amber-950 dark:text-slate-200">
                {item.name}
              </span>
              <span className="mt-1 block">{item.description}</span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
