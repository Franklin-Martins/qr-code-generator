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
app.use('/static', express.static(__dirname + '/public'));
app.engine('handlebars', handlebars({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.get('/', (request, response)=>{
    return response.render('index')
})
app.get('/generated-user', (request, response)=>{
    response.render('generatedImage', {bd: bd})
})
app.post('/generated-user', (request, response) => {
    bd.name = request.body.name;
    bd.email = request.body.email;
    bd.twitter = request.body.twitter;
    bd.github = request.body.github;

    const text = 
    `Colaborador: ${bd.name} \n` +
    `Email: ${bd.email} \n`+
    `Twitter: ${bd.twitter}\n`+
    `github: ${bd.github}`;
    QRCode.toDataURL(text, (err, url)=>{
        if (err) console.log('error: ' + err)
        bd.qrCode = url;
        console.log(url)
        response.redirect('/generated-user')
    })
    
})

app.listen(3030)
console.log('development server started on port 3030')

