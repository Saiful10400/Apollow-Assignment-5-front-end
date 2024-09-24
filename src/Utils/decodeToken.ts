import jwt from "jsonwebtoken";

const DecodeToken = async() => {
  const token = localStorage.getItem("token");

  const decoded =jwt.verify(token as string, import.meta.env.VITE_JWT_SECRET);

  console.log(import.meta.env.VITE_JWT_SECRET,token)
};

export default DecodeToken;
