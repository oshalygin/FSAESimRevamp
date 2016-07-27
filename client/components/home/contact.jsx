import React from "react";

const Contact = () => {
    return (
        <section id="contact" className="section">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 headline wow bounceInLeft">
                        <h2>Contact Us</h2>
                        <p>Drop us a line or give us a ring. We love to hear you.</p>
                    </div>
                    <div className="col-md-6 wow bounceInUp">
                        <p>I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls
                            like mine. I am so happy, my dear friend.</p>
                        <ul className="icon-list">
                            <li><i className="fa fa-fw fa-map-marker"></i>001 Some Street, Some City, US</li>
                            <li><i className="fa fa-fw fa-phone"></i>123 4567 8910</li>
                            <li><i className="fa fa-fw fa-envelope-o"></i><a href="mailto:">support@site.com</a></li>
                            <li><i className="fa fa-fw fa-globe"></i><a href="">http://www.site.com</a></li>
                        </ul>
                    </div>
                    <div className="col-md-6 wow bounceInRight">
                        <form id="contact-form" role="form">
                            <div className="form-group">
                                <label className="sr-only" htmlFor="c_name">Name</label>
                                <input type="text" id="c_name" className="form-control" name="c_name" placeholder="Name" />
                            </div>
                            <div className="form-group">
                                <label className="sr-only" htmlFor="c_email">Email address</label>
                                <input type="email" id="c_email" className="form-control" name="c_email" placeholder="E-mail" />
                            </div>
                            <div className="form-group">
                                <textarea className="form-control" id="c_message" name="c_message" rows="7" placeholder="Your message"></textarea>
                            </div>
                            <button type="submit" className="btn btn-custom-1">
								<i className="fa fa-bullhorn icon-before"></i> Send it
							</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;