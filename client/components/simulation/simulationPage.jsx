import React, { PropTypes } from "react";
import { connect } from "react-redux";

import PreLoader from "../common/preLoader.jsx";
import NavigationBar from "../common/navigationBar.jsx";

import VehicleParameters from "./vehicleParameters.jsx";

export class SimulationPage extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            vehicle: Object.assign({}, props.vehicle)
        };

        this.onVehicleParameterChange = this.onVehicleParameterChange.bind(this);
        this.onParameterSubmit = this.onParameterSubmit.bind(this);

    }

    onVehicleParameterChange(event) {
        const field = event.target.name;
        let vehicle = this.state.vehicle;
        vehicle[field] = event.target.value;
        return this.setState({ vehicle: vehicle });
    }

    onParameterSubmit(event) {
        event.preventDefault();
        //Update the object from the state
    }

    componentDidMount() {

    }

    render() {
        const {vehicle} = this.state;
        return (
            <div>
                <PreLoader />
                <NavigationBar pathName ="simulation" offset={true} />
                <VehicleParameters
                    vehicle={vehicle}
                    onChange={this.onVehicleParameterChange}
                    onSubmit={this.onParameterSubmit} />
            </div>
        );
    }
}

SimulationPage.propTypes = {
    vehicle: PropTypes.object.isRequired
};

function mapStateToProps() {
    let vehicle = {
        vehicleWeight: "",
        forcedInduction: "",
        liftDrag: "",
        wheelbase: ""
    };
    return {
        vehicle: vehicle
    };
}

function mapDispatchToProps() {
    return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(SimulationPage);