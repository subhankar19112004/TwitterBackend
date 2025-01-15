import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    return res.json({
        message: 'Welcome to the Twitter API! version-02 '
    });
});

router.get('/:id', (req, res)=> {
    return res.json({
        message: 'Get a tweet by ID',
        tweet_id: req.params.id
    });
});

export default router;