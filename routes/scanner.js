
const imageToText = require('../modules/createWorker')
const api = require('../modules/api')

module.exports = async (req, res) => {
    const image = `./uploads/${req.file.originalname}`
    const text = await imageToText(image);
    const meds = await api.getMedicineData(text)
    console.log('scan',meds)
    
    res.render('./pages/test', { text:text, meds:meds[0]})
}