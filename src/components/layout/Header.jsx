import { useState } from 'react';
import navigation from '../../data/navigation.js';
import hero from '../../data/hero.js';
import { useLocale } from '../../context/LocaleContext.jsx';
import useScrollLock from '../../hooks/useScrollLock.js';

const Header = () => {
  const [open, setOpen] = useState(false);
  const { locale, toggleLocale } = useLocale();
  useScrollLock(open);

  const toggleMenu = () => setOpen((prev) => !prev);
  const closeMenu = () => setOpen(false);
  const handleLocaleSwitch = () => {
    setOpen(false);
    toggleLocale();
  };

  const navItems = navigation[locale];
  const heroContent = hero[locale];
  const navLabel = locale === 'zh' ? '主导航' : 'Primary navigation';
  const localeLabel = locale === 'zh' ? '切换为英文' : 'Switch to Chinese';

  return (
    <header className="site-header">
      <div className="shell site-header__bar">
        <a className="branding" href="#hero">
          <span className="branding__name">{heroContent.name}</span>
          <span className="branding__role">{heroContent.role}</span>
        </a>
        <nav className={`nav ${open ? 'nav--open' : ''}`} aria-label={navLabel}>
          {navItems.map((item) => (
            <a key={item.id} href={`#${item.id}`} onClick={closeMenu}>
              {item.label}
            </a>
          ))}
        </nav>
        <div className="header-controls">
          <button className="locale-switch" type="button" onClick={handleLocaleSwitch} aria-label={localeLabel}>
            {locale === 'zh' ? 'EN' : '中文'}
          </button>
          <button
            className="nav-toggle"
            type="button"
            onClick={toggleMenu}
            aria-expanded={open}
            aria-label={locale === 'zh' ? '展开导航' : 'Toggle navigation'}
          >
            <span className="nav-toggle__bar" />
            <span className="nav-toggle__bar" />
            <span className="nav-toggle__bar" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
