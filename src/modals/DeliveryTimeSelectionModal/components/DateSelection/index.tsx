import DateCard from "./DateCard";

const today = new Date();

const dates: Date[] = [];

for (let i = 0; i < 15; i++) {
  const nextDay = new Date(today);
  nextDay.setDate(today.getDate() + i);
  dates.push(nextDay);
}

const DateSelection = () => {
  return (
    <div className="px-4 pb-2 sm:pb-4 bg-primary/20 sm:bg-uiWhite overflow-hidden">
      <div
        className="flex pb-2 gap-3 overflow-x-auto"
        style={{
          scrollbarColor: "#7a737366 transparent",
        }}
      >
        {dates.map((date, idx) => (
          <DateCard key={idx} date={date} />
        ))}
      </div>
    </div>
  );
};

export default DateSelection;
