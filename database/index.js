const fs = require("fs")

class DataBase{
    constructor(){}

    async store(data){
        console.log("WRITING DATA...")
        console.log(data)
        await fs.writeFile('database.txt', data);
    }
}

module.exports = new DataBase()