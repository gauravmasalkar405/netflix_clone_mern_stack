const router = require("express").Router();
const multer = require("multer");
const { register, login } = require("../controllers/usercontroller");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/assets");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

router.post("/register", upload.single("profilePic"), register);
router.post("/login", login);

module.exports = router;
