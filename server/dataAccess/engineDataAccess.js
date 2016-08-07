/* eslint-disable no-console */
import "./fsaeSimDb";
import mongoose from "mongoose";
import engineModel from "../models/engine";
import colors from "colors"; //eslint-disable-line no-unused-vars
mongoose.Promise = global.Promise;


export function getAllEngines(query, callback) {

    let queryCriteria = {};
    if (!!query && query.genre) {
        queryCriteria.genre = query.genre;
    }

    let enginePromise = engineModel.find(queryCriteria).exec();
    enginePromise
        .then(engines => {
            callback(null, engines);
        })
        .catch(error => {
            console.log(error.red);
            callback(error);
        });
}

