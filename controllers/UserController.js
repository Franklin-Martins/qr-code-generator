const QRCode = require('qrcode');
const bd = {
    name: "",
    email: "",
    twitter: "",
    github: "",
    qrCode: ""
}

const errorMessages = {
    nameError: null,
    emailError: null,
    twitterError: null
}


class User{
    constructor(){}
    async index(request, response) {
        return response.render('index', {errorMessages: errorMessages})
    }
    async create(request, response){
        bd.name = request.body.name;
        bd.email = request.body.email;
        bd.twitter = request.body.twitter;
        bd.github = request.body.github;

        errorMessages.nameError = null;
        errorMessages.emailError = null;
        errorMessages.twitterError = null;

        if(bd.name == null || bd.name == ""|| bd.name == undefined){
            errorMessages.nameError = "Digite nome válido"
            return response.redirect('/')
        }
        if (bd.email ==  null || bd.email ==  ""){
            errorMessages.emailError = "Digite email válido"
            return response.redirect('/')
        }
        if (bd.twitter != "" && bd.twitter.substr(0, 1) != "@"){
            errorMessages.twitterError = "Nome do twitter deve inicar com @"
            return response.redirect('/')
        }

        const text = 
        `Colaborador: ${bd.name} \n` +
        `Email: ${bd.email} \n`+
        `Twitter: ${bd.twitter}\n`+
        `github: ${bd.github}`;
        QRCode.toDataURL(text, (err, url)=>{
            if (err) console.log('error: ' + err)
            bd.qrCode = url;
            response.redirect('/generated-user')
        })
        
    }
    async show(request, response){
        return response.render('generatedImage', {bd: bd})
    }
}

module.exports = User