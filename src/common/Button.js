import React from "react";

const Button = ({
  label,
  disabled,
  type = "button",
  className = "",
  onClick,
  dataTestid
}) =>
  onClick ? (
    <button
      className={`button ${className}`}
      type={type}
      disabled={disabled}
      onClick={() => onClick()}
      data-testid={dataTestid}
    >
      {label}
    </button>
  ) : (
    <button className={`button ${className}`} type={type} disabled={disabled}>
      {label}
    </button>
  );

export default Button;
