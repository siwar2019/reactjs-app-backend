//import model incident
const incident = require("../models/Incident")
//delete pour incident 
exports.deleteincident = (req, res) => {
    const id = req.params.id;
 
    incident.destroy({
      where: { id:id}
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "incident was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete incident with id=${id}. Maybe incident was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete incident with id=" + id
        });
      });
  };
  