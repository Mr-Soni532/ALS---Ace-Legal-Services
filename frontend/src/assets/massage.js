// import lawyers from './lawyers.json'

const lawyers = require('./lawyers.json')
// console.log(lawyers)



lawyers.map((el, index) => {
    el['email'] = el.name.split(" ").join(".") + index + "@gmail.com"
    return el;
})


