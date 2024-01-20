import { useState } from "react";
import { useData } from "../contexts/dataContext";
import { formatTimestamp } from "../utils/formatTimeStamp";

export const Slots = () => {
  const { apiData, selectedDate } = useData();
  const [clickedIndex, setClickedIndex] = useState(null);
  const apiDates = apiData.map((item) => ({
    ...item,
    date: new Date(item.date).toDateString(),
  }));
  const slots = apiDates.filter((item) => item.date === selectedDate)[0].slots;
  return (
    <div className="slots">
      <label>
        <p>Select from variants</p>
        <select>
          <option>30 min</option>
          <option>1 hr</option>
        </select>
      </label>
      {slots.map((slot, i) => (
        <div
          key={slot.start_time}
          className={`slot ${clickedIndex === i ? "clicked" : ""}`}
          onClick={() => setClickedIndex(i)}
        >
          {formatTimestamp(slot.start_time)} - {formatTimestamp(slot.end_time)}
        </div>
      ))}
    </div>
  );
};
