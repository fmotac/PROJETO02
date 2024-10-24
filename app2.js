let express = require('express')
let app = express()
app.set('view engine', 'ejs')

app.get('/curso', function(req,res){
    let mysql = require('mysql')
    let connection = mysql.createConnection({
        host: 'localhost',
        user:'root',
        password: '120202',
        database:'qikbyte'

    })
    connection.query('select * from curso;',function(error, resultado){
        res.render('./curso',{dados : resultado})
    })
});

app.listen(3000)
console.log("Servidor subiu")