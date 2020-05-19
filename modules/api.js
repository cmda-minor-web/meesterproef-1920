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