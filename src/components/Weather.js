import React from "react";

const Weather = props => (
	<div className="info">
	 {	
	 	props.city && props.country && <p className="key"> Местоположение: 
	 		<span className="value"> { props.city }, { props.country }</span>
	 	</p> 
	 }
	 { 	
	 	props.temperature && <p className="key"> Температура: 
	 		<span className="value"> { props.temperature }	</span>
	 	</p> 
	 }
	 { 	
	 	props.humidity && <p className="key"> Влажность: 
	 		<span className="value"> { props.humidity } </span>
	 	</p> 
	 }
	 { 	
	 	props.description && <p className="key"> Состояние: 
	 		<span className="value"> { props.description } </span>
	 </p> 
	 }
	 { 
	 	props.error && <p className="error">{ props.error }</p>  
	 }
	</div>
);

export default Weather;