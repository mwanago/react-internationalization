import { useTranslation } from 'react-i18next';

export const CurrentDayOfTheWeek = () => {
  const { t, i18n } = useTranslation();

  const dayOfTheWeek = new Date().toLocaleString(i18n.language, {
    weekday: 'long',
  });

  return <div>{t('today_is', { dayOfTheWeek })}</div>;
};
