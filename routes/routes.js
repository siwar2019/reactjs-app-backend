 const router = require("express").Router()
 //delete from utilisateurs router
const {deletej} = require("../controller/deletej")
router.route("/delete/:id").delete(deletej)


//delete from incidents
const {deleteincident} = require("../controller/deleteincident")
router.route("/deleteincident/:id").delete(deleteincident)

//router pour confiantuser
const {confiantuser} = require("../controller/confiantuser")
router.route("/confiant").post(confiantuser)


module.exports = router 