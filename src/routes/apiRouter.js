import express from 'express';
import v1Router from './v1/v1Router.js'
import v2Router from './v2/v2Router.js'


const router = express.Router();

router.use('/v1', v1Router);
router.use('/v2', v2Router);


router.get('/', (req,res) => {
    return res.json({
        message:" this is api route",
        "for-version": "1.0",
        "v1": "/api/v1/",
        "for-version": "2.0",
        "v2": "/api/v2"
    });
});



export default router;