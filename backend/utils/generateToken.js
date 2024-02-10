import jwt from "jsonwebtoken";

const generateToken = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: "15d" });

  res.cookie("jwt", token, {
    secure : process.env.NODE_ENV === "production",
    httpOnly: true,
    sameSite: "strict",
    maxAge: 15 * 24 * 60 * 60 * 1000,
  });
};

export default generateToken;
