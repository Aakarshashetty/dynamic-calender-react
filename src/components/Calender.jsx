import { useData } from "../contexts/dataContext";
import chevronRight from "../images/chevronRight.png";
import chevronLeft from "../images/chevronLeft.png";
import { useState } from "react";

const Calendar = () => {
  const { apiData, setSelectedDate } = useData();
  const [clickedDay, setClickedDay] = useState(20);
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();
  const apiDates = apiData.map((item) => new Date(item.date));
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
  const monthDays = Array.from(
    { length: daysInMonth },
    (_, index) => index + 1
  );
  const previousMonthDays = Array.from(
    { length: firstDayOfMonth },
    (_, index) => {
      const day = new Date(currentYear, currentMonth, -index).getDate();
      return day;
    }
  ).reverse();
  const allDays = [...previousMonthDays, ...monthDays];
  const weeks = [];
  for (let i = 0; i < allDays.length; i += 7) {
    weeks.push(allDays.slice(i, i + 7));
  }
  const clickHandler = (date, day) => {
    setSelectedDate(date);
    setClickedDay(day);
  };
  return (
    <div className="calendar">
      <h3>Test Service</h3>
      <p className="time-zone">TimeZone: Asia/Calcutta</p>
      <div className="month">
        <img src={chevronLeft} width={20} height={20} alt="logo" />
        <p>{`${currentDate
          .toLocaleString("default", { month: "long" })
          .toUpperCase()} ${currentYear}`}</p>
        <img src={chevronRight} width={20} height={20} alt="logo" />
      </div>
      <table>
        <thead>
          <tr>
            <th>Sun</th>
            <th>Mon</th>
            <th>Tue</th>
            <th>Wed</th>
            <th>Thu</th>
            <th>Fri</th>
            <th>Sat</th>
          </tr>
        </thead>
        <tbody>
          {weeks.map((week, index) => (
            <tr key={index}>
              {week.map((day, index) => {
                const date = new Date(currentYear, currentMonth, day);
                const isApiDate = apiDates.some(
                  (apiDate) => apiDate.toDateString() === date.toDateString()
                );
                const isDisabled = !isApiDate;
                return (
                  <td
                    key={index}
                    className={`${!isDisabled ? "api-date" : "disabled-date"} ${
                      clickedDay === day ? "clickedDate" : ""
                    }`}
                    onClick={() => clickHandler(date.toDateString(), day)}
                  >
                    {day}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Calendar;
