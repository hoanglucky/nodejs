
import express from 'express';
import 'dotenv/config'
import webRoutes from './routers/web'
const app = express();
const port = process.env.PORT || 8080;
// config view engine
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
// config router
webRoutes(app);
// config static file
app.use(express.static('public'));


app.listen(port, () => {
    console.log(`Server start at port: ${port}`)
    console.log(__dirname + '/views')
})
