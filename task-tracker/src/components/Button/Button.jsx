import "./Button.css";

const Button = ({ text, onClick, mode, weight, icon , position}) => {
  return (
  <div className={`btn btn-${mode} btn-${weight} btn-${position}`} onClick={onClick}>
    {icon && (
      <img src={icon} alt="" />
    )}
    <div>{text}</div>
  </div>);
};

export default Button;
