'use strict';

const fs = require("fs")
const path = require('path')

class DataBase{
    constructor(){}

    store(dataToSave){
        const data = JSON.stringify(dataToSave)

        return fs.writeFile(path.resolve(__dirname, "database.json"), data, (err)=>{
            if (err) console.log('Error: ' + err)
            console.log("Data Wrtitten to file")
        })
    }
}

module.exports = new DataBase()