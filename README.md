# <a href='#'>FormulaSAE Simulation</a>

[![Build Status](https://travis-ci.org/oshalygin/FSAESimRevamp.svg?branch=master)](https://travis-ci.org/oshalygin/FSAESimRevamp)
[![Coverage Status](http://coveralls.io/repos/github/oshalygin/FSAESimRevamp/badge.svg?branch=master)](https://coveralls.io/github/oshalygin/FSAESimRevamp?branch=master)

####Major overhaul to FSAESim:

> The primary driver behind the overhaul was to give a better user experience for global teams.  With the inclusion of a better UI and backend, we can enable teams to persist changes, view history and seamlessly navigate throughout the application.  This overhaul also involves a maintainable platform moving forward which will be extended by future collaboration.

####To run this application follow these steps:
1.  Clone this repository.
2.  Run  `npm install`  to pull in the project dependencies.
3.  Run  `npm start`  to kick off the application.
    * It should automatically load a browser window and point to  `http://localhost:9999`.
    * If the browser window does not load, then manually navigate your browser to  `http://localhost:9999`.
3.  If you are on a Windows environment, run `npm run start-windows` to launch the application.
    * babel-watch doesn't work on Windows as it uses unix named pipes.
    * Various other differences between OSX and windows such as setting the node environment variable and path lookup.
4.  Run `npm test` to explicitly run the tests in the solution.
    * In windows run, `npm run windows-test`.
5.  The build steps are also available and are in development mode. It is recommended that you run `npm start` to experience HMR and other development level features.  For production deployment builds, the command is `npm build`.

### OSX/Linux
```sh
npm install
npm start
npm test
npm build
```

### Windows
```sh
npm install
npm run windows-start
npm run windows-test
npm run windows-build
```

####Primary Technology Used in this application:
* ExpressJs
* ReactJs
* Redux
* ES2015(ES6) JavaScript
* WebPack
* Mongoose
* MongoDB
* ESLint
* PhantomJS
* Axios
* Babel
* TypeScript definitions
* Mocha
* Expect
* Redux Mock Store
* Nock
* JSDOM
* Toastr
* Enzyme
* Istanbul

> Developed by Oleg Shalygin, primarily to make the web a better place.
> If you have any questions, feel free to drop me a line at oshalygin@gmail.com.


