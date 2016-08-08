import React, { PropTypes } from "react";

export function currentProgress(progress, total = 10) {
    const on = <div className="skill-rate-on"></div>;
    const off = <div className="skill-rate-off"></div>;
    let active;
    let inactive;

    for (let i = 0; i < progress; i = i + 1) {
        active = active + on;
    }
    for (let i = 0; i < total - progress; i = i + 1) {
        inactive = inactive + off;
    }

    active = (<span>{(active)}</span>);

    inactive = <span>inactive</span>;
    console.log(active);
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