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
                                title = "FrontEnd"
                                progress = {3}
                                total = {10} />

                            <h5>Simulation Calculations</h5>
                            <div className="skill-bar">
                                <div className="skill-rate-on"></div>
                                <div className="skill-rate-on"></div>
                                <div className="skill-rate-on"></div>
                                <div className="skill-rate-on"></div>
                                <div className="skill-rate-on"></div>
                                <div className="skill-rate-on"></div>
                                <div className="skill-rate-off"></div>
                                <div className="skill-rate-off"></div>
                            </div>
                            <h5>Javascript</h5>
                            <div className="skill-bar">
                                <div className="skill-rate-on"></div>
                                <div className="skill-rate-on"></div>
                                <div className="skill-rate-on"></div>
                                <div className="skill-rate-on"></div>
                            </div>
                            <h5>Ajax</h5>
                            <div className="skill-bar">
                                <div className="skill-rate-on"></div>
                                <div className="skill-rate-off"></div>
                                <div className="skill-rate-off"></div>
                                <div className="skill-rate-off"></div>
                            </div>
                        </div>

                        <div className="profile-widget">
                            <h3>Social Profiles</h3>
                            <ul className="widget-social">
                                <li><a href="index.html#"><i className="fa fa-facebook fa-fw"></i></a></li>
                                <li><a href="index.html#"><i className="fa fa-github-alt"></i></a></li>
                                <li><a href="index.html#"><i className="fa fa-dribbble"></i></a></li>
                                <li><a href="index.html#"><i className="fa fa-google-plus"></i></a></li>
                            </ul>
                        </div>

                    </div>
                    <div className="col-md-6 col-sm-12 wow bounceInRight">
                        <h3>FSAESim Progress</h3>
                        <p>Obviously this project is a work in progress and as such there are a few bars to keep track of where we need the most development effort.  These are pseudo progress bars but they give a clear indication of where we stand.</p>
                        <p>It is my goal to update the progress upon every milestone we hit!</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Progress;