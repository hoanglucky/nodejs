
import express from 'express';
import 'dotenv/config'
const app = express();
const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
    res.send('Hello World!, nodemon')
})
app.get('/admin', (req, res) => {
    res.send('Hello World!, admin')
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
