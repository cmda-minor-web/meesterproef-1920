const express = require('express')
const app = express()

require('dotenv').config()
const port = process.env.PORT

const upload = require('./modules/multer')
<<<<<<< Updated upstream
const postImage = require('./routes/postImage')
const home = require('./routes/home')
=======
>>>>>>> Stashed changes

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
<<<<<<< Updated upstream
    .post('/upload', upload, postImage)
=======
    .get('/search', search.get)
    .post('/search', search.post)
    .post('/upload', upload, scanImage)
>>>>>>> Stashed changes

app.listen(port, () => console.log('listening to ' + port))