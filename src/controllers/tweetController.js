import { StatusCodes } from "http-status-codes";
import {
  createTweet as createTweetService,
  getTweets as getTweetsService,
  getTweetsById as getTweetsByIdService,
  deleteTweet as deleteTweetService,
  updateTweet as updateTweetService,
  updateImage as updateImageService,
} from "../services/tweetService.js";
import { errorResponse, successResponse } from "../utils/responses.js";

export const createTweet = async (req, res) => {
  console.log(req.file);
  try {
    const response = await createTweetService({
      body: req.body.body,
      image: req.file.location,
    });
    return successResponse(response, StatusCodes.CREATED, "Tweet created successfully");
  } catch (error) {
    return errorResponse(error, res);
  }
};

export const getTweets = async (req, res) => {
  try {
    const response = await getTweetsService();

    return successResponse(response, StatusCodes.OK, "Tweet fetched successfully", res);
  } catch (error) {
    return errorResponse(error, res);
  }
};

export const getTweetsById = async (req, res) => {
  try {
    const response = await getTweetsByIdService(req.params.id);
    return successResponse(response, StatusCodes.OK, "Tweet fetched successfully by id", res);
  } catch (error) {
    return errorResponse(error, res);
  }
};

export const deleteTweet = async (req, res) => {
  try {
    const response = await deleteTweetService(req.params.id);
    return successResponse(response, StatusCodes.OK, "Tweet deleted successfully", res);
  } catch (error) {
    return errorResponse(error, res);
  }
};

export const updateTweet = async (req, res) => {
  try {
    const response = await updateTweetService(req.params.id, req.body.body);
    return successResponse(response, StatusCodes.CREATED, "Tweet updated successfully", res);
  } catch (error) {
    return errorResponse(error, res);
  }
};

export const updateImage = async (req, res) => {
    try {
      // Ensure an image file is provided
      if (!req.file) {
        return errorResponse("No image file provided", StatusCodes.BAD_REQUEST);
      }
  
      // Call the service layer to update the image
      const response = await updateImageService(req.params.id, req.file.location);
  
      return successResponse(response, StatusCodes.OK, "Image updated successfully", res);
    } catch (error) {
      return errorResponse(error, res);
    }
  };
  

