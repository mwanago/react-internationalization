import { useTranslation } from 'react-i18next';

export const LanguageSwitch = () => {
  const { i18n } = useTranslation();

  const switchToEnglish = () => {
    i18n.changeLanguage('en');
  };

  const switchToPolish = () => {
    i18n.changeLanguage('pl');
  };

  return (
    <div>
      <button onClick={switchToEnglish}>EN</button>
      <button onClick={switchToPolish}>PL</button>
    </div>
  );
};
