(() => {
    // if(process.env.NODE_ENV === "production"){
    //     module.exports = require("./configure.store.production.js");
    // }
    // else{
        module.exports = require("./configureStore.dev");
    // }
})();