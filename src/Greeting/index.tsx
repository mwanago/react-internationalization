import { useTranslation } from 'react-i18next';

export const Greeting = () => {
  const { t } = useTranslation();

  return <div>{t('greeting')}</div>;
};
