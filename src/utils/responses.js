import { StatusCodes } from "http-status-codes";

export const errorResponse = (error, res) => {
  console.log(error);
  if (error.status) {
    return res.status(error.status).json({
      message: error.message,
      success: false,
    });
  }
  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
    message: "internal server error",
    success: false,
  });
};

export const successResponse = (data, statusCode, message, res) => {
  return res.status(statusCode).json({
    success: true,
    data,
    message
  });
};
