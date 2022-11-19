// Get requested user profile from the DB
const handleProfileGet = (req, res, db) => {
  const { id } = req.params;
  const user = db.users.find((user) => user.id === id);
  if (user === undefined) {
    res.status(404).json("not found");
  } else {
    res.json(user);
  }
};

export default handleProfileGet;
