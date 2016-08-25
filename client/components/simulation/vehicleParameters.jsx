import React, { PropTypes } from "react";

const VehicleParameters = ({vehicle, onSubmit}) => {
    const styles = {
        button: {
            margin: 12
        }
    };

    return (
        <div className="container" style={{ paddingBottom: 150 }}>
            <form>
                <div className="row">
                    <div className="col-md-12">
                        <div className="mdl-typography--headline">Vehicle Parameters</div>
                        <div className="row">
                            <div className="col-md-3">
                                <input
                                    value={vehicle.weight}
                                    name="vehicleWeight"
                                    hintText="Enter the weight of the vhiecle in lbs"
                                    floatingLabelText="Vehicle Weight (lbs)" />
                            </div>
                            <div className="col-md-3">
                                <input
                                    value={vehicle.forcedInduction}
                                    name="forcedInduction"
                                    hintText="Forced Induction in HP"
                                    floatingLabelText="Forced Induction" />
                            </div>
                            <div className="col-md-3">
                                <input
                                    value={vehicle.liftDrag}
                                    name="liftDrag"
                                    hintText="Lift or Drag coefficient(0-1.0)"
                                    floatingLabelText="Lift / Drag" />
                            </div>
                            <div className="col-md-3">
                                <input
                                    value={vehicle.wheelbase}
                                    name="wheelbase"
                                    hintText="Wheelbase in inches"
                                    floatingLabelText="Wheelbase" />
                            </div>
                        </div>
                        <div className="row">
                            <input
                                label="Github Link"
                                type="submit"
                                onTouchTap={onSubmit}
                                secondary={true}
                                style={styles.button}
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
    onSubmit: PropTypes.func.isRequired
};

export default VehicleParameters;