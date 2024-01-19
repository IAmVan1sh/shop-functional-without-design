import styles from "./Counter.module.scss";
import Button from "../button/Button.tsx";
import Input from "../Input/Input.tsx";
import {useAppSelector} from "../../../hooks/typedHooks.ts";
import {FC} from "react";
import useActions from "../../../hooks/useActions.ts";
import CounterTypes from "../../../types/CounterTypes.ts";

const Counter: FC<CounterTypes> = ({_id, quantity, className}) => {
	const basket = useAppSelector(state => state.cart.items);
	const index = basket.findIndex(element => element._id === _id);
	const { changeQuantity} = useActions();

	return (
		<div className={`${styles.cardCounter} ${className}`}>
			<Button plusMinus onClick={() => changeQuantity({id: _id, value: quantity - 1})}>-</Button>

			<Input
				type="number"
				value={basket[index].quantity}
				onChange={event => changeQuantity({id: _id, value: Number(event.target.value)})}
			/>

			<Button plusMinus onClick={() => changeQuantity({id: _id, value: quantity + 1})}>+</Button>
		</div>
	);
};

export default Counter;