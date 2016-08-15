import React from "react";
import { colorPallet } from "../../styles/muiTheme.js";

const headerStyle = {
    color: colorPallet.pink
};

const rotatingTextStyle = {
    color: colorPallet.pink
};

const Intro = () => {
    return (
        <section id="intro" className="section">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="hello wow bounceInDown">
                            <h1 style={headerStyle}>FormulaSAE</h1>
                            <h3><span className="rotate" style={rotatingTextStyle}>Lap Simulation | Oleg Shalygin | #JavaScript</span></h3>
                        </div>
                        <div className="mouse-icon">
                            <div className="wheel" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Intro;