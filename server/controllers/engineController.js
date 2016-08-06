import express from "express"; //eslint-disable-line no-unused-vars
import * as dataAccessApi from "../dataAccess/engineDataAccess";

export default function engineController(dataAccess = dataAccessApi) {

    function getById(request, response) {
        const engine = request.engine;
        response.status(200).json(engine);
    }

    function get(request, response) {

        let query = request.query;
        dataAccess.getAllEngines(query, function (error, engines) {
            if (!!error) {
                response.status(500).json(error);
            }
            response.status(200).json(engines);
        });
    }

    return {
        get,
        getById
    };
}
