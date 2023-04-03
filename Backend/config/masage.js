const lawyers = require('../../frontend/src/assets/lawyers.json')
const fs = require('fs')

lawyers.map((el, index) => {
    el['email'] = el.name.split(" ").join(".") + index + "@gmail.com"
    return el;
})

fs.writeFileSync('./lawyer.json',JSON.stringify(lawyers),'utf-8')


