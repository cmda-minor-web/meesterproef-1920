const express = require('express')
const app = express()
const multer = require('multer')
const fs = require('fs')
const fetch = require('node-fetch')

const {
    createWorker
} = require('tesseract.js')

const worker = createWorker({
    logger: m => console.log(m),
})

require('dotenv').config()
const port = process.env.PORT

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
});
const upload = multer({
    storage: storage
}).single('scanmeds')

app
    .use(express.urlencoded({
        extended: true
    }))
    .use(express.static('public'))
    .set('view engine', 'ejs')
    .set('views', 'views')

app
    .get('/', (req, res) => {
        res.render('index')
    })
    .get('/test', (req, res) => {
        res.render('./pages/test')
    })
    .post('/upload', async (req, res) => {
        upload(req, res, err => {
            // console.log(req.file)
            let image = `./uploads/${req.file.originalname}`
            imageToText(image)
                .then(data => data)
        })
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
async function apiFetch() {
    const url = `https://hva-cmd-meesterproef-ai.now.sh/medicines`
    const response = await fetch(url)
    const json = await response.json()
    return json
}
async function getData(name) {
    const data = await apiFetch()
    const meds = data.map(d => {
        const str = d.name
        if (str.includes(name)) {
            return d
        }
    })
    console.log(meds)
    return meds
}

function textCompressed(medsName) {
    let name = medsName
    console.log(name)
    let str = name.substr(0, 30)
    return str
}

// textCompressed('LevonorgestrelV/Ethinylestradiol Aurobi o 3X27 filmomhulde tabletten ‘ Bevat 0.a. lactosemonohydraat. Zie bijsluiter voor verdere informatie. L ees voor het gebruik de bijsluiter. Voor oraai gebruik. guiten het zicht en bereik van kinderen houden. gewaren beneden 30°C. RYG 111871 UR.')
app.listen(port, () => console.log('listening to ' + port))