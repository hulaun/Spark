const isStudent = (req, res, next) => {
  if (req.role !== "student") {
    return res.status(403).send({ message: "Require Student Role!" });
  }
  next();
};

const isAdmin = (req, res, next) => {
  if (req.role !== "admin") {
    return res.status(403).send({ message: "Require Admin Role!" });
  }
  next();
};

module.exports = {
  isStudent,
  isAdmin,
};
