import mongoose from "mongoose";
import paginate from "mongoose-paginate-v2";

const colorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    hex: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

colorSchema.plugin(paginate);

const Color = mongoose.model("Color", colorSchema);
export default Color;
