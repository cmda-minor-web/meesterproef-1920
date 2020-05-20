<<<<<<< Updated upstream
const fetch = require('node-fetch')

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

module.exports = getData
=======
const nodeFetch = require('node-fetch')
const stringSimilarity = require('string-similarity');

async function fetch() {
    const url = 'https://hva-cmd-meesterproef-ai.now.sh/medicines'
    const response = await nodeFetch(url)
    const json = await response.json()
    return json
}

// search function
async function getMedicineName(value) {
    const medicines = await fetch()
    const mediceneNames = medicines.map(medicine => medicine.name)
    const medicine = stringSimilarity.findBestMatch(value, mediceneNames)
    return medicine.bestMatch
}

module.exports = {
    getMedicineName
}
>>>>>>> Stashed changes
