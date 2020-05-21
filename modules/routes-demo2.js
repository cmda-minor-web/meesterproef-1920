module.exports = function (app) {
  app.get('/demo2', (req, res) => {
    res.render('pages/demo2/index')
  })

  app.get('/overview-demo2', (req, res) => {
    res.render('pages/demo2/overview')
  })
  app.get('/detail-demo2', (req, res) => {
    res.render('pages/demo2/detail')
  })
  app.get('/review-demo2', (req, res) => {
    res.render('pages/demo2/review')
  })

  app.get('/advies-demo2', (req, res) => {
    res.render('pages/demo2/advies')
  })






  
}