import SectionHeading from '../components/common/SectionHeading.jsx';
import skills from '../data/skills.js';
import { useLocale } from '../context/LocaleContext.jsx';

const Skills = () => {
  const { locale } = useLocale();
  const data = skills[locale];

  return (
    <section id="skills" className="section section--skills">
      <div className="shell section__inner">
        <SectionHeading {...data.heading} />

        <div className="skills-grid">
          {data.groups.map((group) => (
            <div key={group.category} className="skills-grid__group">
              <h3 className="skills-grid__title">{group.category}</h3>
              <div className="skills-grid__items">
                {group.items.map((item) => (
                  <span key={item} className="pill">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
