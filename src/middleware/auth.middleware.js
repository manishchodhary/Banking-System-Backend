import jwt from "jsonwebtoken";
import userModel from "../model/user.model";

async function authMiddleware(req, res, next) {
  const token = req.cookies.token || req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Unauthorized access" });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await userModel.findById(decoded.userId);
    req.user = user;
    next();
  } catch (error) {
    res.status(401).json({ message: "Unauthorized access" });
  }
}
