const axios = require('axios');

function nationalize(name) {
    return axios.get(`https://api.nationalize.io/?name=${name}`)
        .then(response => {
            return response.data;
        })
}

// let res
// nationalize('james')
//     .then(data => {
//         res = data
//     })
// setTimeout(function () {
//     console.log(res)
// }, 1000)


////[object]
// let res = nationalize('james')
// setTimeout(function () {
//     console.log(res)
// }, 1000)
