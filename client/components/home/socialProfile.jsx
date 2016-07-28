import React from "react";
import socialPhoto from "../../assets/images/frontSlice.jpg";

const SocialProfile = () => {

    return (
        <section id="profile" className="section">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 headline wow bounceInDown">
                        <h2>FSAESim</h2>
                        <p>Visual Designer.Front-end Developer.C# Programmer.</p>
                    </div>
                    <div className="col-md-3 col-sm-6 hidden-xs wow bounceInLeft">
                        <img className="avatar" src={socialPhoto} alt="" />
                    </div>
                    <div className="col-md-3 col-sm-6 wow bounceInUp">
                        <div className="profile-widget">
                            <h3>Skillset</h3>
                            <h5>UX Design</h5>
                            <div className="skill-bar">
                                <div className="skill-rate-on"></div>
                                <div className="skill-rate-on"></div>
                                <div className="skill-rate-on"></div>
                                <div className="skill-rate-off"></div>
                            </div>
                            <h5>HTML / CSS3 / SASS</h5>
                            <div className="skill-bar">
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
                        <h3>Profesional Profile</h3>
                        <p>I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls
                            like mine.I am so happy, my dear friend.I am alone, and feel the charm of existence in this
                            spot, which was created for the bliss of souls like mine.I am so happy, my dear friend.I am
                            alone, and feel the charm of existence in this spot, which was created for the bliss of souls
                            like mine.I am so happy, my dear friend.I am so happy, my dear friend.</p>
                        <p>I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls
                            like mine.I am so happy, my dear friend.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SocialProfile;