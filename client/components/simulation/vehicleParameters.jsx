import React, { PropTypes } from "react";

import TextInput from "../common/textInput.jsx";

const VehicleParameters = ({vehicle, onChange, onSubmit}) => {
    const styles = {
        button: {
            margin: "12px"
        }
    };
    return (
        <div className="container" id="simulation" style={{ paddingBottom: 150 }}>
            <form>
                <div className="row">
                    <div className="col-md-12">
                        <div className="mdl-typography--headline">Vehicle Parameters</div>
                        <div className="row">
                            <div className="col-md-3">
                                <TextInput
                                    value={vehicle.vehicleWeight}
                                    name="vehicleWeight"
                                    label="Vehicle Weight"
                                    pattern="[0-9]"
                                    onChange={onChange}
                                    />
                            </div>
                            <div className="col-md-3">
                                <input
                                    value={vehicle.forcedInduction}
                                    type="text"
                                    onChange={onChange}
                                    name="forcedInduction" />
                            </div>
                            <div className="col-md-3">
                                <input
                                    value={vehicle.liftDrag}
                                    type="text"
                                    onChange={onChange}
                                    name="liftDrag" />
                            </div>
                            <div className="col-md-3">
                                <input
                                    value={vehicle.wheelbase}
                                    type="text"
                                    onChange={onChange}
                                    name="wheelbase" />
                            </div>
                        </div>
                        <div className="row">
                            <input
                                type="submit"
                                value="Update Parameters"
                                style={styles.button}
                                onClick={onSubmit}
                                />
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

VehicleParameters.propTypes = {
    vehicle: PropTypes.object.isRequired,
    onSubmit: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired

};

export default VehicleParameters;