import React from "react";

const Profile = () => {
    return (
        <section id="profile-contact">
            <div className="container">
                <div className="row">
                    <div id="application"></div>
                    <div className="col-sm-4 wow bounceInLeft">
                        <div className="profile-item">
                            <i className="fa fa-envelope-o"></i>
                            <h5><a href="index.html#">markstone @some.com</a></h5>
                        </div>
                    </div>
                    <div className="col-sm-4 wow bounceInUp">
                        <div className="profile-item">
                            <i className="fa fa-phone"></i>
                            <h5>(1234) 1234-5678-1011</h5>
                        </div>
                    </div>
                    <div className="col-sm-4 wow bounceInRight">
                        <div className="profile-item">
                            <i className="fa fa-map-marker"></i>
                            <h5>144 Some Street, Some City, Some Country</h5>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Profile;