import "./Link.css";

const Link = ({ text, onClick }) => {
  return (
  <div className="my-link">
    <div className="my-link__text" onClick={onClick}>{text}</div>
  </div>);
};

export default Link;
