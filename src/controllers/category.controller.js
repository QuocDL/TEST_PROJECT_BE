import { createCategoryService } from "../services/category.services";
import handleASync from "../utils/handleAsync";

export const createCategory = handleASync(async (req, res, next) => {
  return await createCategoryService(req, res, next);
});
