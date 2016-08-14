import React from "react";

const Contact = () => {
    return (
        <section id="contact" className="section">
            <div className="container">
                <div className="row text-center">
                    <div className="col-md-12 headline wow bounceInLeft">
                        <h2>Contact The Team</h2>
                    </div>
                    <div className="col-md-12 wow bounceInUp">
                        <p>Feel free to reach out and collaborate on GitHub.</p>
                        <ul className="icon-list">
                            <li><i className="fa fa-github-alt"></i><a href="https://github.com/oshalygin/FSAESimRevamp/issues">GitHub Issues</a></li>
                            <li><i className="fa fa-fw fa-envelope-o"></i><a href="mailto:oshalygin@gmail.com">Contact Oleg </a></li>
                            <li><i className="fa fa-fw fa-globe"></i><a href="">http://www.fsaesim.com</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;