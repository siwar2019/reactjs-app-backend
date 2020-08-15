 const router = require("express").Router()
 //delete router
const {deletej} = require("../controller/deletej")
router.route("/delete/:id").delete(deletej)


const {confiantuser} = require("../controller/confiantuser")
router.route("/confiant").post(confiantuser)
module.exports = router 
