import mongoose, { Schema } from "mongoose";
import paginate from "mongoose-paginate-v2";

const productSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    thumbnail: {
      type: String,
      required: true,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
    brand: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Brand",
      required: true,
    },
    variantsId: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "ProductVariant",
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
productSchema.plugin(paginate);
const Product = new mongoose.model("Product", productSchema);

export default Product;
