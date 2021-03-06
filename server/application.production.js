/* eslint-disable no-console */
import express from "express";
import path from "path";
import bodyParser from "body-parser";
import colors from "colors"; //eslint-disable-line no-unused-vars
import open from "open";

import router from "./routes";

let application = express();
application.use(bodyParser.urlencoded({ extended: true }));
application.use(bodyParser.json());

let port = process.env.PORT || 9000; //eslint-disable-line no-process-env

application.use("/api", router);
application.use(express.static(path.join(__dirname, "../dist")));

application.get("*", (request, response) => {
    let clientEntryPoint = path.join(__dirname, "../dist/index.html");
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