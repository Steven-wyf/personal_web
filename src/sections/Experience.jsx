import SectionHeading from '../components/common/SectionHeading.jsx';
import experience from '../data/experience.js';
import { useLocale } from '../context/LocaleContext.jsx';

const Experience = () => {
  const { locale } = useLocale();
  const data = experience[locale];

  return (
    <section id="experience" className="section section--experience">
      <div className="shell section__inner">
        <SectionHeading {...data.heading} />

        <div className="timeline">
          {data.items.map((item) => (
            <article key={item.id} className="timeline__item">
              <div className="timeline__marker" aria-hidden="true" />
              <div className="timeline__content">
                <header className="timeline__header">
                  <h3>{item.role}</h3>
                  <span className="timeline__timeframe">{item.timeframe}</span>
                </header>
                <div className="timeline__company">
                  <span>{item.company}</span>
                  <span>{item.location}</span>
                </div>
                <ul className="timeline__highlights">
                  {item.highlights.map((highlight, index) => (
                    <li key={index}>{highlight}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
