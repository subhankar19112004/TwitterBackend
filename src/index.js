import express from 'express';
import morgan from 'morgan';
import { PORT } from './config/serverConfig.js';
import  apiRouter  from './routes/apiRouter.js'
import connectDB from './config/dbConfig.js';


const app = express();

app.set('view engine', 'ejs');
app.set('views', import.meta.dirname + '/views');

app.use(morgan('combined'));
app.use(express.json());
app.use(express.urlencoded());


app.use('/api',  apiRouter );

app.get('/', (req, res) => {
    res.render('home', {
        name: 'Subhankar Jena',
        number: '7735599567'
    });
})

app.get('/ping', (req, res) => {
    return res.json({
        message: 'pong'
    });
});




app.all('*', (req,res)=>{
    return res.status(404).json({
        message: 'Page not found'
    });
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    connectDB();
});

//trashes from the code
/**app.post('/hello', (req, res) => {
    console.log("query Params", req.query);
    console.log("body", req.body);
    return res.json({
        message: 'Hello, World!'
    });
});


app.get('/tweets/:tweed_id/comments/:comments_id', (req,res)=>{
    console.log("Params", req.params);
    return res.json({
        message: 'Get comments for a tweet'
    });
});
*/