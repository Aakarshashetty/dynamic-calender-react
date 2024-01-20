import { createContext, useContext, useEffect, useState } from "react";

export const DataContext = createContext();
export const DataContextProvider = ({ children }) => {
  const [apiData, setApiData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedDate, setSelectedDate] = useState("");
  useEffect(() => {
    (async () => {
      try {
        fetch(
          "https://app.appointo.me/scripttag/mock_timeslots?start_date=2024-01-20&end_date=2024-01-30"
        )
          .then((response) => response.json())
          .then((data) => {
            setApiData(data);
            setLoading(false);
            const date = new Date(data[0]?.date);
            setSelectedDate(date.toDateString());
          })
          .catch((error) => {
            console.error("Error fetching data from API:", error);
            setLoading(false);
          });
      } catch (e) {
        console.error(e);
      }
    })();
    // eslint-disable-next-line
  }, []);

  console.log(selectedDate);
  return (
    <DataContext.Provider
      value={{ apiData, loading, selectedDate, setSelectedDate }}
    >
      {children}
    </DataContext.Provider>
  );
};
export const useData = () => useContext(DataContext);
