import { NextFunction, Request, Response } from "express";

import jwt from "jsonwebtoken";
import authConfig from "../../../configs/auth.json";

interface TokenPayload {
  id: string;
}

export default function AuthMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).send({ error: "No token provided" });
  }

  let parts = authHeader.split(" ");

  if (parts.length !== 2) {
    return res.status(401).send({ error: "Token error" });
  }

  const [scheme, token] = parts;
  console.log(scheme);
  console.log(token);

  if (!scheme.includes("Bearer")) {
    return res.status(401).send({ error: "Token in wrong format" });
  }

  try {
    const decoded = jwt.verify(token, authConfig.secret);
    const { id } = decoded as TokenPayload;

    req.userId = id;

    return next();
  } catch (error) {
    res.status(401).send({ error: "Invalid token" });
  }
}
