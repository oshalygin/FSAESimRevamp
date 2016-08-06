/* eslint-disable no-console */
import mongoose from "mongoose";
import colors from "colors"; //eslint-disable-line no-unused-vars

const databaseName = "FSAESimService";
const testDatabaseName = "FSAESimService_Test";

if (process.env.NODE_ENV === "test") { //eslint-disable-line no-process-env
    mongoose.connect(`mongodb://localhost/${testDatabaseName}`, () => {
        console.log(`Database connection opened to TESTING db: ${testDatabaseName}`.blue);
    });
} else {
    mongoose.connect(`mongodb://localhost/${databaseName}`, () => {
        console.log(`Database connection opened to TESTING db: ${databaseName}`.green);
    });
}

export default mongoose;