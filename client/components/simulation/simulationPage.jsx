import React from "react";
import { connect } from "react-redux";

import PreLoader from "../common/preLoader.jsx";
import NavigationBar from "../common/navigationBar.jsx";

import VehicleParameters from "./vehicleParameters.jsx";

export class SimulationPage extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            vehicle: {}
        };

        this.onParameterSubmit.bind(this);
    }

    onParameterSubmit(event) {
        event.preventDefault();

        const updatedVehicleParameters = event.target.value;
        console.log(updatedVehicleParameters);
    }

    componentDidMount() {

    }

    render() {
        const {vehicle} = this.state;
        return (
            <div>
                <PreLoader />
                <NavigationBar pathName ="simulation" offset={true} />
                <VehicleParameters vehicle={vehicle} onSubmit={this.onParameterSubmit} />
            </div>
        );
    }
}

export default connect()(SimulationPage);