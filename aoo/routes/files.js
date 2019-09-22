const express = require('express')
const multer = require('multer')
const fs = require('fs')
const path = require('path')
var router = express.Router();

router.use(multer({dest:'./public/images'}).any())
router.post('/file',(req,res)=>{
	var f = req.files[0];
	console.log(f)
	var oldname = f.filename
	var newname =  oldname + path.parse(f.originalname).ext
	console.log(newname)
	fs.renameSync('./public/images/'+oldname,'./public/images/'+newname)
	res.send(newname)
})


module.exports = router