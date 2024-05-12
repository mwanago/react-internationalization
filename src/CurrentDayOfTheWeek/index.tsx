import { useTranslation } from 'react-i18next';

export const CurrentDayOfTheWeek = () => {
  const { t, i18n } = useTranslation();

  const dayOfTheWeek = new Date().toLocaleString(i18n.language, {
    weekday: 'long',
  });

  return <div>{t('current_day_of_the_week', { dayOfTheWeek })}</div>;
};
