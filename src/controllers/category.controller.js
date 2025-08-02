import {
  createCategoryService,
  getALlCategoryServices,
  getDetailedCategoryServices,
} from "../services/category.services.js";
import handleASync from "../utils/handleAsync.js";

export const createCategory = handleASync(async (req, res, next) => {
  return await createCategoryService(req, res, next);
});

export const getALlCategory = handleASync(async (req, res, next) => {
  return await getALlCategoryServices(req, res, next);
});

export const getDetailedCategory = handleASync(async (req, res, next) => {
  return await getDetailedCategoryServices(req, res, next);
});
