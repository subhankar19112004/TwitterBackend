import express from 'express';
import { getTweets, getTweetsById,createTweet, deleteTweet, updateTweet, updateImage } from '../../controllers/tweetController.js';
import { validate } from '../../validators/zodValidator.js';
import { tweetZodSchema } from '../../validators/tweetZodSchema.js';
import { s3Uploader } from '../../config/multerConfig.js';
import { getTweetsByIdManualValidator } from '../../validators/tweetManualValidator.js';

const router = express.Router();
router.post('/', s3Uploader.single('tweetImage'), validate(tweetZodSchema) ,createTweet)
router.get('/', getTweets );

router.get('/:id',getTweetsByIdManualValidator ,getTweetsById);
router.delete('/:id',getTweetsByIdManualValidator ,deleteTweet);
router.put('/:id',getTweetsByIdManualValidator ,updateTweet);
router.put('/:id/image', s3Uploader.single('tweetImage'), getTweetsByIdManualValidator, updateImage);



export default router;