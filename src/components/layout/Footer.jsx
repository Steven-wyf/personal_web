import hero from '../../data/hero.js';
import socialLinks from '../../data/social.js';
import { useLocale } from '../../context/LocaleContext.jsx';

const Footer = () => {
  const { locale } = useLocale();
  const heroContent = hero[locale];
  const copyrightLabel =
    locale === 'zh'
      ? `© ${new Date().getFullYear()} ${heroContent.signature}. 版权所有。`
      : `© ${new Date().getFullYear()} ${heroContent.signature}. All rights reserved.`;

  return (
    <footer className="site-footer">
      <div className="shell site-footer__bar">
        <small>{copyrightLabel}</small>
        <div className="site-footer__links">
          {socialLinks.map((link) => (
            <a key={link.id} href={link.href} target="_blank" rel="noreferrer">
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
