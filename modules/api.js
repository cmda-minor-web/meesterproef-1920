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
async function getMedicineData(value) {
    const medicines = await fetch()
    const medicineNames = medicines.map(medicine => medicine.name)
    const medicine = stringSimilarity.findBestMatch(value, medicineNames).bestMatch
    // console.log(medicine)
    const medicineData = medicines.filter(meds => meds.name == medicine.target)
    console.log(medicineData)
    return medicineData
}

module.exports = {
    getMedicineName,
    getMedicineData
}