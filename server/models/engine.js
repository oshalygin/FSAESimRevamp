import mongoose from "mongoose";

let Schema = mongoose.Schema;

let Engine = new Schema({
    name: { type: String },
    university: { type: String },
    version: { type: Number },
    torque: { type: [Number] },
    rpm: { type: [Number] }
});

export default mongoose.model('engine', Engine);