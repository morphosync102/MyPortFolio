import { CoffeeBeanIcon } from './CoffeeBeanIcon.js';
import { contentConfig } from '../content/contentConfig.js';

export function AboutPage() {
  const { rolesItems, skillsItems, hobbiesItems } = contentConfig;

  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <div className="reveal-up flex flex-col gap-4">
        <span className="text-xs uppercase tracking-[0.4em] text-amber-600">Profile</span>
        <h1 className="text-4xl font-semibold text-amber-950">石垣雄大 / Yudai Ishigaki</h1>
        <p className="max-w-2xl text-base text-amber-800 whitespace-pre-line">
          上智大学外国語学部卒業。2024年よりシステムエンジニアとして就職。
          セキュリティ関連業務のかたわら、生成AIをこねくり回している。
        </p>
      </div>

      {rolesItems.length > 0 && (
        <section className="reveal-up delay-1 mt-10">
          <h2 className="text-lg font-semibold uppercase tracking-[0.2em] text-amber-700">
            Roles
          </h2>
          <ul className="about-list mt-5 space-y-3 text-sm text-amber-800">
            {rolesItems.map((item) => (
              <li
                key={item.id}
                className="about-list-item flex gap-3 rounded-2xl border border-amber-200/80 bg-amber-50/90 px-4 py-3 leading-relaxed shadow-[0_12px_24px_rgba(216,165,110,0.16)] backdrop-blur-sm"
              >
                <CoffeeBeanIcon className="coffee-bean-icon mt-1 text-amber-600" />
                <div>
                  <span className="block text-base font-semibold text-amber-950">
                    {item.company}
                  </span>
                  <span className="mt-1 block text-sm text-amber-700">
                    {item.title}
                  </span>
                  <span className="mt-2 block">{item.summary}</span>
                </div>
              </li>
            ))}
          </ul>
        </section>
      )}

      {skillsItems.length > 0 && (
        <section className="reveal-up delay-2 mt-12">
          <h2 className="text-lg font-semibold uppercase tracking-[0.2em] text-amber-700">
            Skills
          </h2>
          <ul className="about-list mt-5 space-y-3 text-sm text-amber-800">
            {skillsItems.map((item) => (
              <li
                key={item.id}
                className="about-list-item flex gap-3 rounded-2xl border border-amber-200/80 bg-amber-50/90 px-4 py-3 leading-relaxed shadow-[0_12px_24px_rgba(216,165,110,0.16)] backdrop-blur-sm"
              >
                <CoffeeBeanIcon className="coffee-bean-icon mt-1 text-amber-600" />
                <div>
                  <span className="block text-base font-semibold text-amber-950">
                    {item.name}
                  </span>
                  {item.description && (
                    <span className="mt-1 block">{item.description}</span>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </section>
      )}

      {hobbiesItems.length > 0 && (
        <section className="reveal-up delay-3 mt-12">
          <h2 className="text-lg font-semibold uppercase tracking-[0.2em] text-amber-700">
            Hobbies
          </h2>
          <ul className="about-list mt-5 space-y-3 text-sm text-amber-800">
            {hobbiesItems.map((item) => (
              <li
                key={item.id}
                className="about-list-item flex gap-3 rounded-2xl border border-amber-200/80 bg-amber-50/90 px-4 py-3 leading-relaxed shadow-[0_12px_24px_rgba(216,165,110,0.16)] backdrop-blur-sm"
              >
                <CoffeeBeanIcon className="coffee-bean-icon mt-1 text-amber-600" />
                <div>
                  <span className="block text-base font-semibold text-amber-950">
                    {item.name}
                  </span>
                  <span className="mt-1 block">{item.description}</span>
                </div>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}
