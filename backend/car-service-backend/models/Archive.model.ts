import mongoose from "mongoose";

const archiveSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  carModel: {
    type: String,
    required: true,
  },
  breakdownType: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Archive", archiveSchema);
