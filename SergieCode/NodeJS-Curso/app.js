const fs = require('fs')
const peoma = fs.readFileSync('poema.txt', 'utf-8')
console.log(peoma)
const peomaModified = peoma.replace(/h/ig, 'hola')
fs.writeFileSync('peoma2.txt', peomaModified)
const path = require('path')