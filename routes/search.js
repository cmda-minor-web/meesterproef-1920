const api = require('../modules/api')

async function post(req,res) {
    const medicine = await api.getMedicineName(req.body.medicine)            
    res.json(medicine)
}

async function get (req,res) {
    res.render('search')
}

module.exports = {
    get,
    post
}