import React from "react";
import trackMapImage from "../../images/trackMap.jpg";
import trackMapToScalePDF from "../../images/fsae2011west.pdf";


const TrackMap = () => {
    return (
            <div style={{paddingBottom: 150}} className="col-md-12">
                <a href={trackMapToScalePDF}>
                    <img src={trackMapImage} alt="FSAE 2011 Track Map" />
                </a>
            </div>
    );
};

export default TrackMap;