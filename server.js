const express = require('express')
const app = express()

require('dotenv').config()
const port = process.env.PORT

const upload = require('./modules/multer')

//routes
const scanImage = require('./routes/scanner')
const search = require('./routes/search')
const home = require('./routes/home')

app
    .use(express.urlencoded({
        extended: true
    }))
    .use(express.static('public'))
    .set('view engine', 'ejs')
    .set('views', 'views')
    .get('/', home)
    .get('/search', search.get)
    .post('/search', search.post)
    .post('/upload', upload, scanImage)

app.listen(port, () => console.log('listening to ' + port))