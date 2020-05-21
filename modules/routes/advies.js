module.exports = function (app) {
app.get('/advies', (req, res) => {
    res.render('pages/advies')
  })

}