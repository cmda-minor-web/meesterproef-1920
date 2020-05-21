module.exports = function (app) {
app.get('/overview', (req, res) => {
    res.render('pages/overview')
  })
}