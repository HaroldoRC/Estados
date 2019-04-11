const basePath = require('../consts')
const filename = `${basePath}/data/populacao.json`
let states = require(filename)
const helper = require('../helpers/helper')

const getPopulation = (uf) => {
    return new Promise((resolve, reject) => {
        helper.mustBeInArray(states, uf)
        .then(state => resolve(state))
        .catch(err => reject(err))
    })
}

module.exports = {getPopulation}