import React, { PropTypes } from "react";

const FeatureBlock = ({icon, blockTitle, blockText}) => {
    return (
        <div className="col-sm-4 wow bounceInLeft">
            <div className="service">
                <div className="icon">
                    <i className={icon}></i>
                </div>
                <h4>{blockTitle}</h4>
                <div className="text">
                    <p>{blockText}</p>
                </div>
            </div>
        </div>
    );
};

FeatureBlock.propTypes = {
    icon: PropTypes.string.isRequired,
    blockTitle: PropTypes.string.isRequired,
    blockText: PropTypes.string.isRequired
};

export default FeatureBlock;