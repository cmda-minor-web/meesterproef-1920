module.exports = function (app) {
app.get('/review', (req, res) => {
    res.render('pages/review')
  })

}