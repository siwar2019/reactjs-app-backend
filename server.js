const user = require('./models/User')
const test = require('./models/Select')
const utilisateur = require('./models/utilisateur')
const confiant = require('./models/confiant')
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
//hathom les user de react js (autorités publiques)
app.get('/user', (request, res) => {
  user.findAll().then(results => res.json(results)
  )

})
//api for select utilisateur de react native dans react js ///users react native les temoins
app.get('/utilisateur', (request, res) => {
  utilisateur.findAll().then(results => {
    res.json(results)
  })
})
//


app.post('/confiantuser2', function(req, res) {
  confiant.create({ first_name: req.body.first_name, last_name: req.body.last_name,email:req.body.email }).then(function(confiant) {
    res.json(confiant);
  });
});
//put modifier la valeur is confident 
app.put('/updateIsConfident/:id', async function(req, res) {
 try {

   const user= await utilisateur.update(
      { isConfident: req.body.isConfident  },
      { where: { id: req.params.id } } //where id hia el id passé en parametre f requette url
    )
    return res.status(200).json({ user });
 } catch (err) {
 return  res.status(500).json({ user: null, error: err });
 }
   });
 
//fetch liste des utilisateurs témoins qui sont confiants 
app.get('/favoriteliste', (request, res) => {
  utilisateur.findAll({
   where:{ isConfident: '1'}
  })
  
  .then(results => {
    
    res.json(results)
  })
})
 

  

exports.confiantuser = function(req, res, next){

 

  db.confiant.query("INSERT INTO confiants (first_name,last_name,email) VALUES('" + req.body.first_name +"','" +files.video.last_name+"'+'" + req.body.email +"')", function(err) {
    if(err){
        return res.json(400, {response: {code: 400, message:'An error appeared.'}});
    } else{
       console.log('succes');
       res.json(201, {response: {code: 201, message: 'user confiant has been added'}});
    }   

  });

}

//api pour affichier la liste des images 
app.get('/imageselect', (request, res) => {
  image.findAll().then(results => res.json(results)
  )

})



app.listen(port, function () {
  console.log('Server is running on port: ' + port)
})

