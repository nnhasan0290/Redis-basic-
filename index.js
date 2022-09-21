const Axios = require("axios");
const express = require("express");
const Redis = require("redis");

const client = Redis.createClient({ url: "redis://localhost:6379" });
const app = express();
app.use(express.json());

(async () => {
  await client.connect();
})();

app.get("/photos", async (req, res, nex) => {
  const { data } = await Axios.get(
    "https://jsonplaceholder.typicode.com/photos"
  );
  client.set("photos", "phootos");

  res.send(data);
});

app.listen(3001, () => {
  console.log("The application is listening to the port 3001");
});
