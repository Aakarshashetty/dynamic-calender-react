export const formatTimestamp = (timestamp) => {
  const date = new Date(timestamp);
  const hours = date.getHours();
  const minutes = date.getMinutes();

  const formattedHours = hours % 12 || 12;
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

  const ampm = hours >= 12 ? "pm" : "am";
  const formattedTime = `${
    formattedHours < 10 ? "0" : ""
  }${formattedHours}:${formattedMinutes} ${ampm}`;

  return formattedTime;
};
