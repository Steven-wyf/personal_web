const SectionHeading = ({ kicker, title, description }) => (
  <header className="section-heading">
    {kicker && <span className="section-heading__kicker">{kicker}</span>}
    {title && <h2 className="section-heading__title">{title}</h2>}
    {description && <p className="section-heading__description">{description}</p>}
  </header>
);

export default SectionHeading;
