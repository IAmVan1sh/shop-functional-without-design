import {ButtonHTMLAttributes, DetailedHTMLProps} from "react";

export interface IButton extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
	plusMinus?: boolean;
}