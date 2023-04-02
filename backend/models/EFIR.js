import mongoose from "mongoose";

const Schema = mongoose.Schema;

const firSchema = new Schema({
  firNo: {
    type: String,
    required: true,
  },
  branch: {
    type: String,
    required: true,
  },
  contractAddress: {
    type: String,
    required: true,
  },
});

export default mongoose.model("fir", firSchema);
