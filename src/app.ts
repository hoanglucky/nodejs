
import express from 'express';
import 'dotenv/config'
import webRoutes from './routers/web'
import getConnection from 'config/database';
const app = express();
const port = process.env.PORT || 8080;
// config view engine
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

//config req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



// config static file
app.use(express.static('public'));

// config router
webRoutes(app);

app.listen(port, () => {
    console.log(`Server start at port: ${port}`)
    console.log(__dirname + '/views')
})
