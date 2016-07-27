import React from "react";

const Callout = () => {
    return (
         <section className="callout">
            <div className="container">
                <div className="row">
                    <div className="col-md-3 hidden-xs wow bounceInLeft">
                        <h3>My status</h3>
                    </div>
                    <div className="col-md-9 headline nomargin wow bounceInDown">
                        <h3>I'm currently available for freelance work.</h3>
                        <p>I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls
                            like mine. I am so happy, my dear friend.</p>
                        <a href="index.html#contact" className="btn btn-default btn-custom-2 callout-btn"><i className="fa fa-paper-plane-o icon-before"></i> Contact me</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Callout;