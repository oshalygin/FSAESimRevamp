import React, { PropTypes } from "react";

export function currentProgress(progress, total = 10) {
    let active = [];
    let inactive = [];

    for (let i = 0; i < progress; i = i + 1) {
        active.push(<div className="skill-rate-on" key={Math.random(1000) }></div>);
    }
    for (let i = 0; i < total - progress; i = i + 1) {
        inactive.push(<div className="skill-rate-off" key={Math.random(1000) }></div>);
    }

    return {
        active,
        inactive
    };
}

const ProgressBar = ({title, progress, total}) => {
    const {active, inactive} = currentProgress(progress, total);
    return (
        <div>
            <h5>{title}</h5>
            <div className="skill-bar">
                {active}
                {inactive}
            </div>
        </div>
    );
};

ProgressBar.propTypes = {
    title: PropTypes.string.isRequired,
    progress: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired
};

export default ProgressBar;