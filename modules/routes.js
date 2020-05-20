module.exports = function (app) {
  app.get('/', (req, res) => {
    res.render('pages/index')
  })

  app.get('/overview', (req, res) => {
    res.render('pages/overview')
  })
  app.get('/detail', (req, res) => {
    res.render('pages/detail')
  })
  app.get('/review', (req, res) => {
    res.render('pages/review')
  })

  app.get('/advies', (req, res) => {
    res.render('pages/advies')
  })

}