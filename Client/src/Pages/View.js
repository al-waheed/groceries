import React from 'react'
import { useDispatch, useSelector } from "react-redux";

export default function View() {
	const cartState = useSelector((state) => state.cartReducer);
	const cartItems = cartState.cartItems;
	const dispatch = useDispatch();

	return (
		<div>

		</div>
	)
}
