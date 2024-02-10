import User from "../models/user.model.js";

export const getUsers = async (req, res) => {
    try {
        const loggedUserId = req.user._id;

        const allUsers = await User.find({ _id: { $ne: loggedUserId } }).select("-password");

        res.status(200).json(allUsers);
    } catch (error) {
        console.log("Error in user controller: ",error);
        res.status(500).json({ message: "Something went wrong",error });
    }
};
