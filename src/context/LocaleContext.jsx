import { createContext, useContext, useMemo, useState } from 'react';

const LocaleContext = createContext();

export const LocaleProvider = ({ defaultLocale = 'zh', children }) => {
  const [locale, setLocale] = useState(defaultLocale);

  const value = useMemo(() => {
    const toggleLocale = () => setLocale((prev) => (prev === 'zh' ? 'en' : 'zh'));
    return { locale, setLocale, toggleLocale };
  }, [locale]);

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
};

export const useLocale = () => {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error('useLocale must be used within a LocaleProvider');
  }
  return context;
};
