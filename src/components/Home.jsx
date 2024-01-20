import Calendar from "./Calender";
import { Slots } from "./Slots";
import { useData } from "../contexts/dataContext";

export const Home = () => {
  const { loading } = useData();

  if (loading) {
    return <p>Loading...</p>;
  }
  return (
    <div className="home">
      <Calendar />
      <Slots />
    </div>
  );
};
