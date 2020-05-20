const nodeFetch = require('node-fetch')

async function fetch(value) {
    console.log(value == "RVG 124146/23529");

    const url = `https://hva-cmd-meesterproef-ai.now.sh/medicines?q=${value}`
    const response = await nodeFetch(url)
    const json = await response.json()
    return json
}

async function getMedicine(value) {
    const medicine = await fetch(value)
    return medicine
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