/* eslint-disable max-len */
import React from "react";
import socialPhoto from "../../images/frontSlice.jpg";
import ProgressBar from "./progressBar.jsx";

const Progress = () => {

    return (
        <section id="progress" className="section">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 headline wow bounceInDown">
                        <h2>Development Progress</h2>
                        <p>The current progress of the FSAE application and milestones</p>
                    </div>
                    <div className="col-md-3 col-sm-6 hidden-xs wow bounceInLeft">
                        <img className="avatar" src={socialPhoto} alt="" />
                    </div>
                    <div className="col-md-3 col-sm-6 wow bounceInUp">
                        <div className="profile-widget">

                            <ProgressBar
                                title = "React Front-End Application"
                                progress = {3}
                                total = {10} />
                            <ProgressBar
                                title = "Express Application"
                                progress = {2}
                                total = {10} />
                            <ProgressBar
                                title = "Database and Analytics"
                                progress = {1}
                                total = {10} />
                            <ProgressBar
                                title = "Simulation Accuracy"
                                progress = {6}
                                total = {10} />
                            <ProgressBar
                                title = "Visualizations"
                                progress = {1}
                                total = {10} />
                        </div>


                    </div>
                    <div className="col-md-6 col-sm-12 wow bounceInRight">
                        <h3>FSAESim Progress</h3>
                        <p>Obviously this project is a work in progress and as such there are a few bars to keep track of where we need the most development effort.These are pseudo progress bars but they give a clear indication of where we stand.</p>
                        <p>It is my goal to update the progress upon every milestone we hit!</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Progress;