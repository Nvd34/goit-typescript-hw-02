
enum Day {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

const isWeekend = (day: Day): boolean => {
  return day === Day.Saturday || day === Day.Sunday;
};
