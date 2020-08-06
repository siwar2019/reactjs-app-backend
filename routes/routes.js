 const router = require("express").Router()
const {deletej} = require("../controller/deletej")
router.route("/delete/:id").delete(deletej)
module.exports = router 
