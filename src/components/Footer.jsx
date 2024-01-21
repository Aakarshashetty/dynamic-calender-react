import chevronRight from "../images/chevronRight.png";
export const Footer = () => {
  return (
    <footer>
      <p>
        Powered by <a href="/">DynamicCalender</a>
      </p>
      <button onClick={() => window.location.reload()}>
        Next <img src={chevronRight} height={20} width={20} alt="footer" />
      </button>
    </footer>
  );
};
