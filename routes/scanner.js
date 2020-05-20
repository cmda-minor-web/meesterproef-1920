
const imageToText = require('../modules/createWorker')

module.exports = async (req, res) => {
    console.log(req);
    const image = `./uploads/${req.file.originalname}`
    const text = await imageToText(image);
    console.log(image);
    
    res.render('./pages/test', { text })
}