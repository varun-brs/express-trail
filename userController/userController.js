import User from "../model/userModel.js";

const createUser = async (req, res) => {
  const { firstName, lastName, email } = req.body;
  console.log(req.body);

  try {
    const userExist = await User.findOne({ email });

    if (userExist) {
      res.status(400).json({
        message: "User already Exists",
      });
    }

    const user = await User.create({
      firstName,
      lastName,
      email,
    });
    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    res.status(500).send("Internal server error");
  }
};

const getProfile = async (req, res) => {
  const userId = req.params.userId;
  try {
    const user = await User.findById(userId);
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({
        message: "User not found",
      });
    }
  } catch (error) {
    res.status(500).send("Internal server error");
  }
};

const updateProfile = async (req, res) => {
  const userId = req.params.userId;
  try {
    const user = await User.findById(userId);
    if (user) {
      user.firstName = req.body.firstName || user.firstName;
      await user.save();
      res.status(200).json(user);
    } else {
      res.status(404).json({
        message: "User not found",
      });
    }
  } catch (error) {
    res.status(500).send("Internal server error");
  }
};

const deleteProfile = async (req, res) => {
  const userId = req.params.userId;
  try {
    const deletedUser = await User.findByIdAndDelete(userId);
    console.log(deletedUser);
    if (deletedUser) {
      res.status(200).json({ message: "User deleted successfully" });
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    res.status(500).send("Internal server error");
  }
};

export { createUser, getProfile, updateProfile, deleteProfile };
