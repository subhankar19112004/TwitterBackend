import Tweet from "../schema/tweet.js";

export const createTweet = async ({ body, image }) => {
  try {
    const tweet = await Tweet.create({ body, image });
    return tweet;
  } catch (error) {
    throw error;
  }
};

export const getTweets = async () => {
  try {
    const tweets = await Tweet.find();
    return tweets;
  } catch (error) {
    throw error;
  }
};

export const getTweetsById = async (tweetId) => {
  try {
    const tweet = await Tweet.findById(tweetId);
    return tweet;
  } catch (error) {
    throw error;
  }
};

export const deleteTweet = async (tweetId) => {
  try {
    const tweet = await Tweet.findByIdAndDelete(tweetId);
    return tweet;
  } catch (error) {
    throw error;
  }
};

export const updateTweet = async (tweetId, body) => {
    try {
        const tweet = await Tweet.findByIdAndUpdate(tweetId, { body }, { new: true });
        return tweet;
    } catch (error) {
        throw error;
    }
}
export const updateImage = async (tweetId, imageLocation) => {
  try {
    // Update only the image field in the document
    const tweet = await Tweet.findByIdAndUpdate(
      tweetId,
      { image: imageLocation },
      { new: true } // Return the updated document
    );
    return tweet;
  } catch (error) {
    throw error;
  }
};



