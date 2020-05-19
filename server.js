const express = require('express')
const app = express()

require('dotenv').config()
const port = process.env.PORT

//routes
const upload = require('./modules/multer')
const postImage = require('./routes/postImage')


app
    .use(express.urlencoded({
        extended: true
    }))
    .use(express.static('public'))
    .set('view engine', 'ejs')
    .set('views', 'views')
    .get('/', (req, res) => {
        res.render('index')
    })
    .get('/test', (req, res) => {
        console.log('wth ',req);
        
        res.render('./pages/test')
    })
    .post('/upload', upload, postImage)

app.listen(port, () => console.log('listening to ' + port))