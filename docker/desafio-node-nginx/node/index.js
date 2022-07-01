const express = require('express')
const app = express()
const port = 3000
const config = {
    host: 'mysql-db',
    user: 'root',
    password: 'root',
    database:'db_node'
};
const mysql = require('mysql')
const connection = mysql.createConnection(config)

const sql = `
INSERT INTO people(name) values('Lucca')`
connection.query(sql)

app.get('/', (req,res) => {
    connection.query("SELECT * FROM people", function (err, result, fields) {
        if (err) throw err;
        html = `<h1>Full Cycle Rocks!</h1></br>`
        result.forEach(item => {
            html += `<li> ${item.id}. ${item.name}</li>`
        })
        res.send(html)
    });
    
})

app.listen(port, ()=> {
    console.log('Rodando na porta ' + port)
})
