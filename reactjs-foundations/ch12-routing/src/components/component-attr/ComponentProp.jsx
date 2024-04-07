import React from "react";
import { Route, Link } from 'react-router-dom';

function ComponentProp (props) {
	const OrderDetails = (props) => {
		return (
			<h1>Details for order # {props.match.params.orderid}</h1>
		);
	}

	return (
		<>
			<Link to="/orders/4">Order #4</Link>
			<Route path="/orders/:orderid" component={OrderDetails} />
		</>
	);
}

export default ComponentProp;