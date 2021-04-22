const controller = require("../controllers/auth.controller");
const router = require("express").Router()

router.post("/api/auth/signin", controller.signin)
router.post("http://zoointegrateddb-env.eba-j24arzz8.us-east-2.elasticbeanstalk.com:8080/api/auth/signup", controller.signup)
router.post("/api/auth/employeesignin", controller.employeesignin)
router.post("/api/auth/addanimal", controller.addanimal)
router.post("/api/auth/addemployee", controller.addemployee)
router.post("/api/auth/addrevenue", controller.addrevenue)

module.exports = router;
