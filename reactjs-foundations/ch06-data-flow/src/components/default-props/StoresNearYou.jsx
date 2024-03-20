import React, { Component } from 'react';
import Map from "./Map";
import StoreList from "./StoreList";

class StoresNearYou extends Component {
	// remember that we can also set the defaultProps outside of a class.
	// For functional components, it will always be outside the function.
	static defaultProps = {
		latitude: "37.3230",
		longitude: "122.0322"
	}

	render() {
		return (
			<>
				<div id="map-container">
					<Map 
						latitude={this.props.latitue}
						longitude={this.props.longitude} />
				</div>
				<div id="store-list">
					<StoreList
						latitude={this.props.latitude}
						longitude={this.props.longitude} />
				</div>
			</>
		);
	}
}

export default StoresNearYou;