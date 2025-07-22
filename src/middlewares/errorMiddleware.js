import createResponse from "../utils/response.js";

const errorHandle = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Server bi loi roi";
  res.status(statusCode).json(createResponse(false, statusCode, message));
};

export default errorHandle;
