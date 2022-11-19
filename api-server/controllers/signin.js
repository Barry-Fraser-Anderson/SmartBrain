// Login
const handleSignin = (req, res, db) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json("incorrect form submission");
  }
  const user = db.users.find((user) => {
    return user.email === email && user.password === password;
  });
  if (user !== undefined) {
    res.json(user);
  } else {
    res.status(400).json("Invalid login details");
  }
};

export default handleSignin;
