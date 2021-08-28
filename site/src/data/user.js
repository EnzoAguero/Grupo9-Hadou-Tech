const fs = require('fs');
const path = require('path');


module.exports = {
    usuarios : JSON.parse(fs.readFileSync(path.join(__dirname,'user.json'),'utf-8')),
    guardar : data => fs.writeFileSync(path.join(__dirname,'user.json'),JSON.stringify(data,null,2),'utf-8'),
} 
