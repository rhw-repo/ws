import express from "express";

const app = express();
const PORT = 8080;
// middlewarre to parse json is not default express behaviour
app.use(express.json());

app.listen(PORT, () => console.log(`It's alive on http://localhost${PORT}`));
app.get("/tshirt", (req, res) => {
  res.status(200).send({
    tshirt: "👕",
    size: "large",
  });
});

app.post("/tshirt/:id", (req, res) => {
  const { id } = req.params;
  const { logo } = req.body;

  if (!logo) {
    return res.status(418).send({ message: "We need a logo!" });
  }
  res.send({
    tshirt: `👕 with your ${logo} and ID of ${id}`,
  });
});
