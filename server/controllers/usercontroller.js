const bcrypt = require("bcrypt");
const User = require("../models/userModels");

// register
module.exports.register = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // check if username and email is already exists
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

    // password encryption
    const passwordHash = await bcrypt.hash(password, 10);

    // creating new user
    const user = await User.create({
      username,
      email,
      password: passwordHash,
    });

    // if user is created succesfully send status:true
    return res.json({
      status: true,
      msg: "Account created successfully, now you can login",
    });
  } catch (error) {
    console.log(error);
    res.json({ status: false, msg: error.message });
  }
};

// login
module.exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // check user exists or not
    const userFound = await User.find({ email });

    // if user not found give error
    if (userFound.length === 0) {
      return res.json({ status: false, msg: "User does not exist" });
    }

    // maching password
    const passwordMatch = await bcrypt.compare(password, userFound[0].password);

    // if password does not match then give error
    if (passwordMatch === false) {
      return res.json({ status: false, msg: "Invalid password" });
    }

    delete userFound[0].password;

    // otherwise send user to client
    res.json({
      userFound,
      status: true,
    });
  } catch (error) {
    console.log(error);
    res.json({ status: false });
  }
};

// getting liked movies
module.exports.getLikedMovies = async (req, res) => {
  try {
    const { email } = req.body;

    // getting user
    const user = await User.findOne({ email });

    // if user does not exist
    if (!user) {
      res.json({ status: false, msg: "User with given email is not found" });
    }

    // sending liked movies to client
    res.json({ status: true, likedMovies: user.likedMovies });
  } catch (error) {
    console.log(error);
    res.json({ status: true, msg: error });
  }
};

// adding liked movie and removing unliked movie from liked movies array
module.exports.addRemoveFromLikedMovies = async (req, res) => {
  try {
    const { email, data } = req.body;

    // finding user
    const user = await User.findOne({ email });

    if (user) {
      const { likedMovies } = user;

      // check if that movie is already exist in array
      const isMovieAlreadyLiked = likedMovies.find(({ id }) => id === data.id);

      // if movie exists then remove it
      if (isMovieAlreadyLiked) {
        const movieIndex = movies.findIndex((id) => id === data._id);

        likedMovies.splice(movieIndex, 1);

        await User.findByIdAndUpdate(user._id, {
          likedMovies: likedMovies,
        });
      }

      // if movie is not in the array then add it
      if (!isMovieAlreadyLiked) {
        await User.findByIdAndUpdate(
          user._id,
          {
            // merging two arrays
            likedMovies: [...user.likedMovies, ...data],
          },
          { new: true }
        );
      }
    }
    return res.json({
      status: true,
      movies: likedMovies,
      msg: "movies updated successfully",
    });
  } catch (error) {
    console.log(error);
    res.json({ status: false, msg: error });
  }
};
