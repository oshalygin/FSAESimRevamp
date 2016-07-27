import React from "react";

const Stats = () => {
    return (
        <section id="stats" className="callout">
            <div className="container">
                <div className="row">
                    <div className="col-md-3 col-sm-12 hidden-xs wow bounceInLeft">
                        <h3>My Stats</h3>
                    </div>
                    <div className="col-md-3 col-sm-4 wow bounceInDown">
                        <div className="stat">
                            <div className="stat-icon">
                                <h2><i className="fa fa-coffee hidden-xs"></i><span className="timer" data-to="32"></span></h2>
                            </div>
                            <h3>Cup of coffee</h3>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-4 wow bounceInUp">
                        <div className="stat">
                            <div className="stat-icon">
                                <h2><i className="fa fa-code hidden-xs"></i><span className="timer" data-to="999"></span></h2>
                            </div>
                            <h3>Line of code</h3>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-4 wow bounceInRight">
                        <div className="stat">
                            <div className="stat-icon">
                                <h2><i className="fa fa-child hidden-xs"></i><span className="timer" data-to="300"></span>+</h2>
                            </div>
                            <h3>Happy customers</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Stats;