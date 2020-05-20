const express = require('express')
const app = express()

require('dotenv').config()
const port = process.env.PORT

//routes
const upload = require('./modules/multer')
const postImage = require('./routes/postImage')
const api = require('./modules/api')
const home = require('./routes/home')


app
    .use(express.urlencoded({
        extended: true
    }))
    .use(express.static('public'))
    .set('view engine', 'ejs')
    .set('views', 'views')
    .get('/', home)
    .get('/search', (req,res) => {
        res.render('search')
    })
    .post('/search', api.search)
    .post('/upload', upload, postImage)

app.listen(port, () => console.log('listening to ' + port))