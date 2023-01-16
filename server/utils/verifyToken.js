import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;

  if (!token) {
    res.status(401).send("You are not authorized!");
  } else
    jwt.verify(token, process.env.JWT_KEY, (error, user) => {
      if (error) {
        res.status(403).send("Your token is invalid");
      } else req.user = user;
      next();
    });
};

export const verifyUser = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else
      res
        .status(403)
        .send("You are not the authorized person for this operation.");
  });
};

export const verifyAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.isAdmin) {
      next();
    } else res.status(403).send("Only Admin can perform this operation!!");
  });
};
