import express from 'express';

const router = express.Router();

router.get('/', (req,res) => {
    return res.json({
        message: " The tweet's comment are shown here"
    });
});

router.get('/:id', (req, res) => {
    return res.json({
        message: "Get a comment by id",
        comment_id: req.params.id
    });
});


export default router;