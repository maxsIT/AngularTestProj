var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json())
 
const cors = require('cors')
const corsOptions = {
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 200
}
 
app.use(cors(corsOptions))
 
const db = require('./app/config/db.config.js');
  
db.sequelize.sync({force: false}).then(() => {
  console.log('Drop and Resync with { force: true }');
  initial();
});
 
require('./app/route/user.route.js')(app);
 
var server = app.listen(8080, function () {
 
  let host = server.address().address
  let port = server.address().port
 
  console.log("App listening at http://%s:%s", host, port);
})
 
function initial(){
 
  let users = [
    {
      firstname: "Joe",
      lastname: "Thomas",
      age: 36
    },
    {
      firstname: "Peter",
      lastname: "Smith",
      age: 18
    },
    {
      firstname: "Lauren",
      lastname: "Taylor",
      age: 31
    },
    {
      firstname: "Mary",
      lastname: "Taylor",
      age: 24
    },
    {
      firstname: "David",
      lastname: "Moore",
      age: 25
    },
    {
      firstname: "Holly",
      lastname: "Davies",
      age: 27
    },
    {
      firstname: "Michael",
      lastname: "Brown",
      age: 45
    }
  ]
 
  const User = db.users;
  for (let i = 0; i < users.length; i++) { 
    User.create(users[i]);  
  }
}