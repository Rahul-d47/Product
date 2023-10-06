const express = require("express")
const pinsert = require("../controller/Prcontroller")



const router = express.Router()

router.post("/insert",pinsert)

module.exports = router;