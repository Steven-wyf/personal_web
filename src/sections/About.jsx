import SectionHeading from '../components/common/SectionHeading.jsx';
import about from '../data/about.js';
import { useLocale } from '../context/LocaleContext.jsx';

const About = () => {
  const { locale } = useLocale();
  const data = about[locale];

  return (
    <section id="about" className="section section--about">
      <div className="shell section__inner">
        <SectionHeading {...data.heading} />

        <div className="about-grid">
          {data.cards.map((card) => (
            <article key={card.title} className="card">
              <h3 className="card__title">{card.title}</h3>
              {card.body.map((text, index) => (
                <p key={index} className="card__text">
                  {text}
                </p>
              ))}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
