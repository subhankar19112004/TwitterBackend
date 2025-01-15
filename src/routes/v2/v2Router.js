import express from 'express';
import tweetRouter from './tweet.js';




const router = express.Router();
router.use('/tweets', tweetRouter);


router.get('/', (req,res) => {
    return res.json({
        message:" this is api version-2 route",
        "version": "2.0",
        "api-docs-url": "/api/v1/"
        
    });
});



export default router;

