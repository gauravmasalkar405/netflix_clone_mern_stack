const router = require("express").Router();
const multer = require("multer");
const {
  register,
  login,
  getLikedMovies,
  addRemoveFromLikedMovies,
} = require("../controllers/usercontroller");

const upload = multer();

// when we are sending data as formdata we have use multer and if we are not sending any image file we have to use upload.none() method otherwise for images we use upload.single("/image name")

// register route
router.post("/register", upload.single(), register);

//  login route
router.post("/login", login);

// liked movies route
router.post("/liked", getLikedMovies);

// add remove route
router.post("/addremove", addRemoveFromLikedMovies);

module.exports = router;
