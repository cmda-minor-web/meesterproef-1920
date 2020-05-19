const {
    createWorker
} = require('tesseract.js')

const worker = createWorker({
    logger: m => console.log(m),
})

async function imageToText(image) {
    await worker.load()
    await worker.loadLanguage('nld')
    await worker.initialize('nld')
    const {
        data: {
            text
        }
    } = await worker.recognize(image)
    console.log(text, 'ds')
    await worker.terminate()
    return text
}

module.exports = imageToText