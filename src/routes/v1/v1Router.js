import express from 'express';
import commentRouter from './comment.js';
import tweetRouter from './tweet.js';
import loginRouter from './login.js';


const router = express.Router();

router.use('/tweets', tweetRouter);
router.use('/comments', commentRouter);

router.use('/login', loginRouter); 

router.get('/', (req,res) => {
    return res.json({
        message:" this is api version-1 route",
        "version": "1.0",
        "api-docs-url": "/api/v1/"
        
    });
});



export default router;

