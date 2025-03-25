import "./Button.css";

const Button = ({ text, onClick, mode }) => {
  return (
  <div className={`btn btn-${mode}`} onClick={onClick}>
    <div>{text}</div>
  </div>);
};

export default Button;
