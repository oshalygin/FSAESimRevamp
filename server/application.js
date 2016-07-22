/* eslint-disable no-console */
import express from "express";
import path from "path";
import bodyParser from "body-parser";
import webpack from "webpack";
import configuration from "../webpack.config.dev";
import colors from "colors";
import open from "open";

import router from "./routes";

let application = express();
application.use(bodyParser.urlencoded({ extended: true }));
application.use(bodyParser.json());

let port = process.env.PORT || 8000;

const applicationCompiler = webpack(configuration);
application.use(require("webpack-dev-middleware")(applicationCompiler, {
    noInfo: true,
    publicPath: configuration.output.publicPath
}));

application.use(require("webpack-hot-middleware")(applicationCompiler));

// application.use('/api', router);

application.get("*", (request, response) => {
    let clientEntryPoint = path.join(__dirname, '../client/index.html');
    response.sendFile(clientEntryPoint);
});


application.listen(port, (error) => {
    if (!!error) {
        console.log(error.bold.red);
    }
    open(`http://localhost:${port}`);
    console.log(`Serving API AT http://localhost:${port}`.blue);
});

export default application;