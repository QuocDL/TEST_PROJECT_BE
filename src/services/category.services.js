import Category from "../models/category.model";
import createError from "../utils/errorHandle";
import createResponse from "../utils/response";

export const createCategoryService = async (req, res, next) => {
  const existingCategory = await Category.findOne({ name: req.body.name });
  if (existingCategory) {
    return next(createError(400, "Danh mục này đã tồn tại"));
  }
  const newCategory = await Category.create({ ...req.body });
  return res
    .status(201)
    .json(createResponse(true, 201, "Tạo danh mục thành công", newCategory));
};
