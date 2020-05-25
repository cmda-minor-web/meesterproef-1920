module.exports = function (app) {
app.get('/detail', (req, res) => {
    res.render('pages/detail')
  })

}