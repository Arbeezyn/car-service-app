import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const login = async (req: any, res: any) => {
  const secretKey = process.env.SECRET_KEY;
  const { username, password } = req.body;

  if (username === "admin" && password === "1") {
    const token = jwt.sign({ username }, secretKey!, { expiresIn: "1h" });
    res.json({ token });
  } else {
    res.status(401).json({ error: "Invalid username or password" });
  }
};
