const UserController=require("../controller/user.controller")
const router= require("express").Router()
router.get("/",UserController.all)
router.get("/add",UserController.add)
router.get("/addlogic",UserController.addlogic)
router.get("/singletask/:id",UserController.singletask)
router.get("/deleAL",UserController.deletall)
router.get("/dele/:id",UserController.deltask)
router.get("/edit/:id",UserController.edtit)
router.get("/editlogic/:id",UserController.edtitlogic)
module.exports=router