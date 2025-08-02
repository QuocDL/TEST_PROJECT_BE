import {
  createCategoryService,
  getALlCategoryServices,
  getDetailedCategoryServices,
  updateCategoryService,
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

export const updatedCategory = handleASync(async (req, res, next) => {
  return await updateCategoryService(req, res, next);
});
