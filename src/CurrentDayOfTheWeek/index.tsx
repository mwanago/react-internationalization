export const CurrentDayOfTheWeek = () => {
  const day = new Date().toLocaleString('en', { weekday: 'long' });

  return <div>Today is {day}.</div>;
};
