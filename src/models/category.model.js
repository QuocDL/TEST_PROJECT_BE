import mongoose, { Schema } from "mongoose";
import paginate from "mongoose-paginate-v2";

const categorySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

categorySchema.plugin(paginate);

const Category = mongoose.model("Category", categorySchema);
export default Category;
