let express = require('express')
let bodyParser = require('body-parser')
let path = require('path')
// let fetch = require('node-fetch')
let app = express()
let port = process.env.PORT || 5000

//view Engines 
app.set('view engine', 'ejs')
app.set('views', 'views')


app.use(express.static('public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: false
}));

// Set Static path for non html code like pictures and CSS
app.use(express.static(path.join(__dirname + 'public')))

//demo 1
require('./modules/routes/index')(app);
require('./modules/routes/overview')(app);
require('./modules/routes/detail')(app);
require('./modules/routes/review')(app);
require('./modules/routes/advies')(app);


//demo 2
require('./modules/routes-demo2')(app);



app.listen(port, () => console.log(`Example app listening on port ${port}!`))