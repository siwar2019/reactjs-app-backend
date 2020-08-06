const user = require('./models/User')
const test = require('./models/Select')
const utilisateur = require('./models/utilisateur')
const image = require('./models/Image')
//

var express = require('express')
var cors = require('cors')
var bodyParser = require('body-parser')
var app = express()
var port = process.env.PORT || 5000
const routes = require("./routes/routes")
//error: has been blocked b cors policy (delete correction )
app.use(bodyParser.json())
app.use(cors())
app.use(
  bodyParser.urlencoded({
    extended: false
  })
)

//pour delete function 
app.use("/", routes)

//


var Users = require('./routes/Users')

app.use('/users', Users)
//first one

app.get('/siwar', (request, res) => {
  user.findAll().then(results => res.json(results)
  )

})
/* //API fetch data  from database to front react js (géneral test)
app.get('/select',(request,res)=>{
  test.findAll().then(results => res.json(results)   
  ) 
 
}) */
app.get('/user', (request, res) => {
  user.findAll().then(results => res.json(results)
  )

})
//api for select utilisateur de react native dans react js
app.get('/utilisateur', (request, res) => {
  utilisateur.findAll().then(results => {
    res.json(results)
  })
})
//
/*   app.delete('/owner/:id', (req, res) => {
    const id = req.params.id;
    db.users.destroy({
      where: { id: id }
    })
      .then(deletedOwner => {
        res.json(deletedOwner);
      });
  }); */
//api pour affichier la liste des images 
app.get('/imageselect', (request, res) => {
  image.findAll().then(results => res.json(results)
  )

})

/* //hh
exports.deletej = (req, res) => {
  const id = req.params.id;

  user.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Tutorial was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Tutorial with id=${id}. Maybe Tutorial was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Tutorial with id=" + id
      });
    });
};
 */

app.listen(port, function () {
  console.log('Server is running on port: ' + port)
})

//des fonct de test des delete function
/* app.get('/delete', function(request, res, next) {
  res.locals.connection.query('DELETE from utilisateurs where id = '+req.body.id+'', function (error, results, fields) {
      if(error) throw error;
      res.send(JSON.stringify(results));
  });
});
//test 2delete

app.delete('/delete2/:id',(req,res)=>{
utilisateur.query('Delete from  utilisateurs where id=?' ,[req.params.id], (err,rows,fields)=>{
  if(!err)
  res.send('delete successfully');
  else  console.log(err)
})
})
//
user.destroy({

where: { id:user.id }
}).then(() => {
console.log("deleted record with id",id);
}).catch(function (err) {
           console.log("delete failed with error: " + err );
           return 0;
   // handle error;

});
//deete
exports.delete = (userId) => {
const id = user.id;
User.destroy({
    where: { id: id }
}).then(() => {
    return id;
}).catch(function (err) {
    console.log("delete faileddadada: " + err);
    return 0;
    // handle error;
});
};
//test delete3
app.delete('/delete3/:id', (req, res) => {

db.query('Delete from  utilisateurs where id=?' ,[req.params.id], (err,rows,fields) => {
  if(!err)
  res.send('delete successfully');
  else  console.log(err)

});
}); */

/* con.connect(function(err) {
  if (err) throw err;

  con.query("SELECT * FROM users", function (err, result, fields) {
    if (err) throw err;
    res.send(result);

}) */


/* var express = require('express')
var cors = require('cors')
var bodyParser = require('body-parser')
var app = express()
var port = process.env.PORT || 5000

app.use(bodyParser.json())
app.use(cors())
app.use(
  bodyParser.urlencoded({
    extended: false
  })
)

var Users = require('./routes/Users')

app.use('/users', Users)

app.listen(port, function() {
  console.log('Server is running on port: ' + port)
}) */