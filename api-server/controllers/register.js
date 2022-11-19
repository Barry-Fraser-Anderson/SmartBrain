// Register a new user.
const handleRegister = (req, res, db) => {
  const { name, email, password } = req.body;
  if (!email || !name || !password) {
    return res.status(400).json("incorrect form submission");
  }
  db.users.push({
    id: "125", //TODO: removed hard-coded value
    name: name,
    email: email,
    entries: 0,
    joined: new Date(),
  });
  res.json(db.users.at(-1));
};

export default handleRegister;
