const bcrypt = require("bcrypt");
const User = require("../models/userModels");

module.exports.register = async (req, res) => {
  try {
    const { username, email, password, profilePicPath } = req.body;

    const [usernameExists, emailExists] = await Promise.all([
      User.exists({ username }),
      User.exists({ email }),
    ]);

    if (usernameExists) {
      return res.json({ status: false, msg: "Username is already exists" });
    }

    if (emailExists) {
      return res.send({ status: false, msg: "Email is already exists" });
    }

    const passwordHash = await bcrypt.hash(password, 10);

    const user = await User.create({
      username,
      email,
      password: passwordHash,
      profilePicPath,
    });

    return res.json({ status: true });
  } catch (error) {
    console.log(error);
  }
};

module.exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const userFound = await User.find({ email });

    if (!userFound) {
      res.json({ status: false, msg: "User does not exist" });
    }

    const passwordMatch = await bcrypt.compare(password, userFound.password);

    if (!passwordMatch) {
      res.json({ status: "false", msg: "Invalid password" });
    }

    delete userFound.password;

    res.json({
      userFound,
      status: true,
    });
  } catch (error) {
    console.log(error);
  }
};
