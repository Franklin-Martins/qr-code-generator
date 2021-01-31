const express = require('express');
const app = express();
const routes = require('./routes')
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const flash = require('connect-flash')


app.use('/static', express.static(__dirname + '/public'));
app.engine('handlebars', handlebars({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use('/', routes)

app.listen(3030)
console.log('development server started on port 3030')

