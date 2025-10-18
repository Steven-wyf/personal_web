import hero from '../data/hero.js';
import { useLocale } from '../context/LocaleContext.jsx';

const Hero = () => {
  const { locale } = useLocale();
  const data = hero[locale];
  const greeting = locale === 'zh' ? '你好，我是 ' : "Hi, I'm ";

  return (
    <section id="hero" className="section section--hero">
      <div className="shell section__inner hero__inner">
        <div className="hero__main">
          <span className="hero__kicker">{data.role}</span>
          <h1 className="hero__title">
            {greeting}
            <span>{data.name}</span>
          </h1>
          <p className="hero__headline">{data.headline}</p>
          <p className="hero__description">{data.description}</p>
          <div className="hero__meta">
            <span className="chip chip--primary">{data.location}</span>
            <span className="chip chip--outline">{data.availability}</span>
          </div>
          <div className="hero__tags">
            {data.highlights.map((item) => (
              <span key={item} className="chip chip--ghost">
                {item}
              </span>
            ))}
          </div>
          <div className="hero__actions">
            {data.actions.map((action) => (
              <a
                key={action.label}
                className={`button ${action.variant ? `button--${action.variant}` : ''}`}
                href={action.href}
                target={action.external ? '_blank' : undefined}
                rel={action.external ? 'noreferrer' : undefined}
              >
                {action.label}
              </a>
            ))}
          </div>
        </div>
        <aside className="hero__aside">
          <div className="hero__stats">
            {data.stats.map((stat) => (
              <div key={stat.label} className="hero__stat">
                <span className="hero__stat-value">{stat.value}</span>
                <span className="hero__stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
          <div className="hero__note">
            <p>{data.note}</p>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default Hero;
