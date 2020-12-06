import React from "react";
import './Buttons.css';

const STYLES=[
    'btn--primary',
    'btn--outline'
]
const SIZES=[
    'btn--medium',
    'btn--large'
]


export const Button=({
    children, type,onClick,buttonSize,buttonStyle
    })=>{
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]

    return(
        <button className={`btn ${checkButtonStyle} ${checkButtonSize}`}  type={type}>
            <a href={onClick}>{children}</a>
        </button>
    );
}
export default Button;