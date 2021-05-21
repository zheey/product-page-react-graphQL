import React from "react";

const Button = ({ label, disabled }) => (
    <button className="button" disabled={disabled}>{ label }</button>
);

export default Button;
