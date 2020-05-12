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

module.exports = getData