import Clarifai from "clarifai";

//TODO: Use a real API key here
const app = new Clarifai.App({
  apiKey: "MY_KEY",
});

export const handleApiCall = (req, res) => {
  app.models
    .predict(Clarifai.FACE_DETECT_MODEL, req.body.input)
    .then((data) => res.json(data))
    .catch((err) => res.status(400).json("unable to process image"));
};

const handleImage = (req, res, db) => {
  const { id } = req.params;
  const user = db.users.find((user) => user.id === id);
  if (user === undefined) {
    res.status(404).json("not found");
  } else {
    const entries = user.entries++;
    res.json(entries);
  }
};

export default handleImage;
