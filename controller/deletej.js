//import model utilisateur
const user = require("../models/utilisateur")

//fonction deletej pour bloquer témoins
exports.deletej = (req, res) => {
  const id = req.params.id;
//eni 7echti b table utilisateur
  user.destroy({
    where: { id:id}
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "User was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete user with id=${id}. Maybe user was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete user with id=" + id
      });
    });
};
