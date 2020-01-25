const mysql=require('mysql');
var inquirer = require('inquirer');

const connection = mysql.createConnection({
    host:'localhost',
    port: 3306,
    user: 'root',
    password: 'root',
    database: 'playlist_db'
});
connection.connect(err =>{
    if(err) throw err;
    console.log("connected as id" , connection.threadId);
});

connection.query("SELECT * from playlist", (err, res) => {
    if (err) throw err;

    res.forEach(element => {
      console.log('Song: '+ element.title, '||Artist: '+ element.artist, '||Genre: '+ element.genre);
      console.log('**************************************************')  
    });
    
});

inquirer.prompt(
    
)