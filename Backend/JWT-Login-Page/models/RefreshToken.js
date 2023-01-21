import mongoose from "mongoose";

const refreshTokenSchema = new mongoose.Schema({
  token: { type: String, required: true },
  userId:{
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  })

export default mongoose.model("RefreshToken", refreshTokenSchema);