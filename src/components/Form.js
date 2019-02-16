import React from "react";

const Form = props => (
	<form onSubmit={props.getWeather}>
		<input type="text" name="city" placeholder="город..."/>
		<input type="text" name="country" placeholder="страна..."/>
		<button>Узнать!</button>
	</form>
);

export default Form;