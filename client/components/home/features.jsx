/* eslint-disable max-len */
import React from "react";
import FeatureBlock from "./featureBlock.jsx";

const Features = () => {
    return (
        <section id="features" className="section">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 headline wow bounceInDown">
                        <h2>Features</h2>
                    </div>
                    <div className="col-md-12">
                        <div className="row">
                            <FeatureBlock
                                icon="fa fa-font-awesome"
                                blockTitle="Lap Simulation"
                                blockText="Simulation software that takes advantage of innovative programming techniques to imitate real world physical results" />
                            <FeatureBlock
                                icon="fa fa-circle-o-notch"
                                blockTitle="Open Source"
                                blockText="A collaboration amongst FSAE students that aims to help the community in design development." />
                            <FeatureBlock
                                icon="fa fa-history"
                                blockTitle="Continually Tested"
                                blockText="Continually tested to ensure accuracy, efficiency and proper vehicle dynamics simulation." />
                        </div>
                        <div className="row">
                            <FeatureBlock
                                icon="fa fa-code"
                                blockTitle="Cutting Edge Software"
                                blockText="Built on NodeJs, React, and Redux with performance and extensibility in mind." />
                            <FeatureBlock
                                icon="fa fa-git-square"
                                blockTitle="Collaboration"
                                blockText="GitHub is at the center point of the integration allowing pull requests, issue tracking and technology exploration" />
                            <FeatureBlock
                                icon="fa fa-check-circle-o"
                                blockTitle="Fully Tested Codebase"
                                blockText="Code quality is crucial in maintaining and developing the platform that FSAESim is built on.  Every line of code with logic is fully unit tested with nearly 98% line coverage." />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;