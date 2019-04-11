const fs = require('fs')

const mustBeInArray = (array, uf) => {
    return new Promise((resolve, reject) => {
        const row = array.find(r => r.uf == uf)
        if (!row) {
            reject({
                message: 'UF not found',
                status: 404
            })
        }
        resolve(row)
    })
}

const MergeRecursive = (obj1, obj2)=>{
    for (var p in obj2) {
        try {
        if ( obj2[p].constructor==Object ) {
            obj1[p] = MergeRecursive(obj1[p], obj2[p])
        } else {
            obj1[p] = obj2[p]

        }
        } catch(e) {
        obj1[p] = obj2[p]
        }
    }
    return obj1
}

module.exports = {
    mustBeInArray,
    MergeRecursive
}