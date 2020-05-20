const fetch = require('node-fetch')

async function apiFetch() {
    const url = `https://hva-cmd-meesterproef-ai.now.sh/medicines`
    const response = await fetch(url)
    const json = await response.json()
    return json
}
async function getData(string) {
    const data = await apiFetch()
    console.log(string)
    const meds = data.map(d => {
        const str = d.name
        if (name) {
            console.log(d)
            console.log(compareString)
            // console.log(d)
            // return d
        }
    })
    return meds
}


// textCompressed('LevonorgestrelV/Ethinylestradiol Aurobi o 3X27 filmomhulde tabletten ‘ Bevat 0.a. lactosemonohydraat. Zie bijsluiter voor verdere informatie. L ees voor het gebruik de bijsluiter. Voor oraai gebruik. guiten het zicht en bereik van kinderen houden. gewaren beneden 30°C. RYG 111871 UR.')

module.exports = getData