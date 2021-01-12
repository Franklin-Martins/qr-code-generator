const express = require('express');
const app = express();
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
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
app.use('/static', express.static(__dirname + '/public'));
app.engine('handlebars', handlebars({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.get('/', (request, response)=>{
    return response.render('index', {errorMessages: errorMessages})
})
app.get('/generated-user', (request, response)=>{
    response.render('generatedImage', {bd: bd})
})
app.post('/generated-user', (request, response) => {
    bd.name = request.body.name;
    bd.email = request.body.email;
    bd.twitter = request.body.twitter;
    bd.github = request.body.github;

    errorMessages.nameError = null;
    errorMessages.emailError = null;
    errorMessages.twitterError = null;

    if(bd.name == null || bd.name == ""){
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
    
})

app.listen(3030)
console.log('development server started on port 3030')

