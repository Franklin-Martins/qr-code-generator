const database = require('../database/index')

class UserModel{
    constructor(){
        this.bd = {
            name: "",
            email: "",
            twitter: "",
            github: "",
            qrCode: ""
        }
    }
    
    index(){
        return bd;
    }
    create(user){
        this.bd.name = user.name;
        this.bd.email = user.email;
        this.bd.twitter = user.twitter;
        this.bd.github = user.github;
        this.bd.qrCode = user.qrCode;

        database.store(this.bd)
        
    }
}

module.exports = UserModel;