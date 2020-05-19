const express = require('express')
const app = express()

require('dotenv').config()
const port = process.env.PORT

//routes
const upload = require('./modules/multer')
const postImage = require('./routes/postImage')
const home = require('./routes/home')


app
    .use(express.urlencoded({
        extended: true
    }))
    .use(express.static('public'))
    .set('view engine', 'ejs')
    .set('views', 'views')
    .get('/', home)
    .post('/upload', upload, postImage)

app.listen(port, () => console.log('listening to ' + port))