import React from "react";

const Resume = () => {
    return (
        <section id="resume" className="section">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 headline wow bounceInDown">
                        <h2>Resume</h2>
                        <p>My education and experience.</p>
                    </div>
                </div>
                <div className="row resume-items">
                    <div className="col-md-3 wow bounceInLeft">
                        <h3>Education</h3>
                    </div>
                    <div className="col-md-6 col-sm-8 resume-item wow bounceInUp">
                        <h4>Computer science</h4>
                        <p>I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls
                            like mine. I am so happy, my dear friend.</p>
                        <hr className="hidden-xs" />
                    </div>
                    <div className="col-md-3 col-sm-4 resume-place wow bounceInRight">
                        <h4><i className="fa fa-suitcase"></i> Stanford University</h4>
                        <i className="fa fa-calendar"></i> 2013 - 2014
                        <hr className="visible-xs" />
                    </div>
                    <div className="col-md-6 col-md-offset-3 col-sm-8 resume-item wow bounceInUp">
                        <h4>Visual designer</h4>
                        <p>I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls
                            like mine. I am so happy, my dear friend.</p>
                        <hr className="hidden-xs" />
                    </div>
                    <div className="col-md-3 col-sm-4 resume-place wow bounceInRight">
                        <h4><i className="fa fa-suitcase"></i> St. Patrick University</h4>
                        <i className="fa fa-calendar"></i> 2013 - 2014
                        <hr className="visible-xs" />
                    </div>
                </div>
                <div className="row resume-items">
                    <div className="col-md-3 wow bounceInLeft">
                        <h3>Experience</h3>
                    </div>
                    <div className="col-md-6 col-sm-8 resume-item wow bounceInUp">
                        <h4>Front-end developer / php programmer</h4>
                        <p>I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls
                            like mine. I am so happy, my dear friend.</p>
                        <hr className="hidden-xs" />
                    </div>
                    <div className="col-md-3 col-sm-4 resume-place wow bounceInRight">
                        <h4><i className="fa fa-suitcase"></i> Google</h4>
                        <i className="fa fa-calendar"></i> 2013 - 2014
                        <hr className="visible-xs" />
                    </div>
                    <div className="col-md-6 col-md-offset-3 col-sm-8 resume-item wow bounceInUp">
                        <h4>C# programmer</h4>
                        <p>I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls
                            like mine. I am so happy, my dear friend.</p>
                        <hr className="hidden-xs" />
                    </div>
                    <div className="col-md-3 col-sm-4 resume-place wow bounceInRight">
                        <h4><i className="fa fa-suitcase"></i> Microsoft</h4>
                        <i className="fa fa-calendar"></i> 2013 - 2014
                        <hr className="visible-xs" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 col-md-offset-3 wow bounceInUp">
                        <a href="index.html#" className="btn btn-default btn-custom-2"><i className="fa fa-cloud-download icon-before"></i> Download CV</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Resume;