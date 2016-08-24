import React from "react";

import TextField from 'material-ui/TextField';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const VehicleParameters = () => {
    return (
        <div className="container" style={{paddingBottom: 150}}>
            <div className="row">
                <div className="col-md-12">
                    <div className="mdl-typography--headline">Vehicle Parameters</div>
                    <div className="row">
                        <div className="col-md-3">
                            <TextField
                                name="vehicleWeight"
                                hintText="Enter the weight of the vhiecle in lbs"
                                floatingLabelText="Vehicle Weight (lbs)" />
                        </div>
                        <div className="col-md-3">
                            <TextField
                                name="forcedInduction"
                                hintText="Forced Induction in HP"
                                floatingLabelText="Forced Induction" />
                        </div>
                        <div className="col-md-3">
                            <TextField
                                name="liftDrag"
                                hintText="Lift or Drag coefficient(0-1.0)"
                                floatingLabelText="Lift / Drag" />
                        </div>
                        <div className="col-md-3">
                            <TextField
                                name="wheelbase"
                                hintText="Wheelbase in inches"
                                floatingLabelText="Wheelbase" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VehicleParameters;