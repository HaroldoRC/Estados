const basePath = require('../consts')
const filename = `${basePath}/data/estados.json`
let states = require(filename)
const population = require('./populacao.model')
const h = require('../helpers/helper')
let Promise = require('bluebird');

const getStates = () => {
    return new Promise((resolve, reject) => {
        if (states.length === 0) {
            reject({
                message: 'no states available',
                status: 200
            })
        }
        resolve(states)
    })
}

const getStatesPopulation = () => {
    return getStates()
        .then(states => {
            return Promise.map(states,(state)=>{
                return population.getPopulation(state.uf)
            }).then((populations)=>{
                let estados = h.MergeRecursive(states, populations)
                return estados
            })
        })
}

module.exports = {getStates, getStatesPopulation}