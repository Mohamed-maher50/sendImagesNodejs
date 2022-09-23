const express = require("express");
const app = express();
const bodyparser = require("body-parser");

require("dotenv").config();

const multer = require("multer");
const path = require("path");
app.use(express.static("uploads"));
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    console.log(file);
    cb(null, "uploads/images");
  },
  filename: (req, file, cb) => {
    console.log;
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
const upload = multer({ storage: storage });
const cors = require("cors");

app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
  })
);
app.use(bodyparser.urlencoded());
app.use(express.json());
app.post("/api/addProduct", upload.single("avatar"), (req, res) => {
  const { description, img, category, countInStock } = req.body;
  console.log(req.body);
  console.log(img);
  res.send("done");
});
app.listen(process.env.PORT || 5050, () => {
  console.log("lisent in port 5050");
});
// (async function asdf() {
//   const d = await hashPassword("200100");
//   console.log(d);
// })();
