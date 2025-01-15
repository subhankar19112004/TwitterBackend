import { Filter } from "bad-words";
import {
  createTweet as createTweetRepository,
  getTweetsById as getTweetsByIdRepository,
  getTweets as getTweetsRepository,
  deleteTweet as deleteTweetRepository,
  updateTweet as updateTweetRepository,
  updateImage as updateImageRepository
} from "../repositories/tweetRepository.js";

export const createTweet = async ({ body, image }) => {
  //try to find the blocked words in the tweet body and
  // if any exists don't create the tweet and return an error

  const filter = new Filter();

  if (filter.isProfane(body)) {
    console.log(body);
    console.log(filter.clean(body));
    throw {
      message: "Tweet contains blocked words",
      status: 400,
    };
  }

  const tweet = await createTweetRepository({ body, image });

  return tweet;
};

export const getTweets = async () => {
  const tweets = await getTweetsRepository();

  return tweets;
};

export const getTweetsById = async (id) => {
  const tweet = await getTweetsByIdRepository(id);

  if (!tweet) {
    throw {
      message: "Tweet not found",
      status: 404,
    };
  }

  return tweet;
};

export const deleteTweet = async (id) => {
  const response = await deleteTweetRepository(id);

  if (!response) {
    throw {
      message: "Tweet not found",
      status: 404
    };
  }

  return response;
};

export const updateTweet = async (id, body) => {
  const response = await updateTweetRepository(id, body);

  if (!response) {
    throw {
      message: "Tweet not found",
      success: false,
      status: 404
    };
  }

  return response;
}

export const updateImage = async (id, imageLocation) => {
  // Find the tweet by ID and update the image field
  const response = await updateImageRepository(id, imageLocation);

  if (!response) {
    throw {
      message: "Tweet not found",
      status: 404,
    };
  }

  return response;
};

