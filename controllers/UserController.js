const QRCode = require('qrcode');
const AppError = require('../Error/AppError')
const UserModel = require('../models/UserModel')
const appError = new AppError()
const userModel = new UserModel()
class User{
    constructor(){
        this.qrCode = "";
    }
    async index(request, response) {
        return response.render('index', {message: appError.errorMessage})
    }
    async create(request, response){
        const { name, email, twitter, github } = request.body
        
        if(name == null || name == ""|| name == undefined){
            
            appError.setError("Nome inválido")
            
            return response.redirect('/')
        }
        if (email ==  null || email ==  ""){
            
            appError.setError("Email inválido")
            
            return response.redirect('/')
        }
        if (twitter != "" && twitter.substr(0, 1) != "@"){
            
            appError.setError("Nome do twitter deve inicar com @")

            return response.redirect('/')
        }
        
        const text = 
        `Colaborador: ${name} \n` +
        `Email: ${email} \n`+
        `Twitter: ${twitter}\n`+
        `github: ${github}`;

        QRCode.toDataURL(text, (err, url)=>{
            if (err) console.log('error: ' + err)
            const qrCode = url;
            const data = {
                name:name, 
                email:email, 
                twitter:twitter, 
                github: github,
                qrCode: qrCode
            }   
            userModel.create(data)
            return response.redirect('/generated-user')
        })
    }
    async show(request, response){
        return response.render('generatedImage', {bd: userModel.bd});
    }
}

module.exports = User