
const imageToText = require('../modules/createWorker')
const getMedicine = require('../modules/api')

module.exports = async (req, res) => {
    const image = `./uploads/${req.file.originalname}`
    const text = await imageToText(image);
    console.log(getMedicine)
    
    res.render('./pages/test', { text })
}