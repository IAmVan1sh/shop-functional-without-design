import {InputHTMLAttributes} from "react";
import styles from "./Input.module.scss";

const Input = (props: InputHTMLAttributes<HTMLInputElement>) => {
	return (
		<input {...props} className={styles.input}>
		</input>
	);
};

export default Input;