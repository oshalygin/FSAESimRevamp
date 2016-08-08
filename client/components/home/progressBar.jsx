import React, { PropTypes } from "react";

export function currentProgress(progress, total = 10) {
    let active;
    let inactive;

    for (let i = 0; i < progress; i = i + 1) {
        active = active + (<div className="skill-rate-on"></div>);
    }
    for (let i = 0; i < total - progress; i = i + 1) {
        inactive = inactive + (<div className="skill-rate-off"></div>);
    }

    return {
        active,
        inactive
    };
}

const ProgressBar = ({progress, total}) => {

    const {active, inactive} = currentProgress(progress, total);

    return (
        <div className="skill-bar">
            {active}
            {inactive}
        </div>
    );
};

ProgressBar.propTypes = {
    progress: PropTypes.number.isRequired,
    total: PropTypes.number
};

export default ProgressBar;