const QRCode = require('qrcode');
const AppError = require('../Error/AppError')


const appError = new AppError()

class User{
    async index(request, response) {
        console.log(appError.errorMessage)
        return response.render('index', {message: appError.errorMessage})
    }
    async create(request, response){
        bd.name = request.body.name;
        bd.email = request.body.email;
        bd.twitter = request.body.twitter;
        bd.github = request.body.github;

        if(bd.name == null || bd.name == ""|| bd.name == undefined){
            
            appError.setError("Nome inválido")
            
            return response.redirect('/')
        }
        if (bd.email ==  null || bd.email ==  ""){
            
            appError.setError("Email inválido")
            
            return response.redirect('/')
        }
        if (bd.twitter != "" && bd.twitter.substr(0, 1) != "@"){
            
            appError.setError("Nome do twitter deve inicar com @")

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