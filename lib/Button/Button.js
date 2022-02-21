import React from "react";
import classnames from "classnames";

const Button = ({ classNames, disabled, displayText, onClick }) => (
    <button
        className={classnames([
            "py-xs",
            "px-sm",
            "text-base",
            "font-medium",
            "bg-primary",
            "text-white",
            "w-full",
            "hover:bg-primary-dark",
            classNames?.button
        ])}
        disabled={disabled}
        type="button"
        onClick={onClick}
    >
        {displayText}
    </button>
);

export default Button;
