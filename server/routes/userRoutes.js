const router = require("express").Router();
const multer = require("multer");
const {
  register,
  login,
  getLikedMovies,
  addRemoveFromLikedMovies,
} = require("../controllers/usercontroller");

// saving static file using multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/assets");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

// register route
router.post("/register", upload.single("profilePic"), register);

//  login route
router.post("/login", login);

// liked movies route
router.post("/liked", getLikedMovies);

// add remove route
router.post("/addremove", addRemoveFromLikedMovies);

module.exports = router;
