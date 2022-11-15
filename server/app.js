import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';

const app = express();

//Middlewares
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//Routes
require("./routes")(app)


//Vue.js Middleware
const history = require('connect-history-api-fallback');
app.use(history());
app.use(express.static(path.join(__dirname, 'public')));

//Server
app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), () => {
    console.log(`Server listening on port ${app.get('port')}`);
});