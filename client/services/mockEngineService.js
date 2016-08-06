import delay from "./pseudoDelay";

const engines = [
    {
        name: "First Engine",
        university: "CSUN",
        version: {},
        torque: {},
        rpm: {}
    },
    {
        name: "Second Engine",
        university: "UCLA",
        version: {},
        torque: {},
        rpm: {}
    }
];

class EngineService {
    static getAllEngines() {
        return new Promise((resolve, reject) => { //eslint-disable-line no-unused-vars
            //Make HTTP call here...
            //Switch based on environment
            setTimeout(() => {
                resolve(Object.assign([], engines));
            }, delay);
        });
    }
}

export default EngineService;