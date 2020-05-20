const nodeFetch = require('node-fetch')
const stringSimilarity = require('string-similarity');
const medicineJson = require('../medicines.json');

async function fetch(value) {
    const url = `https://hva-cmd-meesterproef-ai.now.sh/medicines?q=${value}`
    const response = await nodeFetch(url)
    const json = await response.json()
    return json
}

async function jsonFetch() {
    const url = 'https://hva-cmd-meesterproef-ai.now.sh/medicines'
    const response = await nodeFetch(url)
    const json = await response.json()
    return json
}

// search function
async function getMedicine(value) {
    const medicines = await jsonFetch()
    const mediceneNames = medicines.map(medicine => medicine.name)
    const medicine = stringSimilarity.findBestMatch(value, mediceneNames)
    return medicine.bestMatch
}

async function search (req,res) {
    const medicine = await getMedicine(req.body.medicine)            
    res.json(medicine)
}

async function getData(name) {
    const data = await fetchMedicine()
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

module.exports = {
    getMedicine,
    search
}