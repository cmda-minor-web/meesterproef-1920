import express from 'express'
import compression from 'compression'
import router from './routes/index.routes'
import bodyParser from 'body-parser'
import exphbs from 'express-handlebars'
import path from 'path'

const PORT = process.env.PORT || 8888,
  APP = express(),
  COMPONENTPATH = `${__dirname}/src/components`,
  URLENCODEDPARSER = bodyParser.urlencoded({ extended: true })

APP
  .use(compression())
  .use(express.static('static'))
  .use(bodyParser.json())
  .use(URLENCODEDPARSER)
  .set('view engine', 'hbs')
  .engine('hbs', exphbs({
    extname: '.hbs',
    defaultLayout: null,
    partialsDir: [
      {
        dir: `${__dirname}/src/components/base/views/partials/`, 
        namespace: 'base'
      }
    ]
  }))
  .listen(PORT, () => console.log(`Using port: ${PORT}`))

// Pass the app to the router and give it a paramaters object
router(APP, {COMPONENTPATH})
