module.exports = function (app) {
  app.get('/quiz-detail', (req, res) => {
    res.render('pages/quiz-detail')
  })
  app.get('/quiz', (req, res) => {
    res.render('pages/quiz')
  })
  
}