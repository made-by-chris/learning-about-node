import express from "express";
const app = express();
// DIFFERENT WAYS TO DELIVER HTML

// just text
// app.get("/", (req, res) => res.send("hello."));

// HTML in a text string
// app.get("/", (req, res) => res.send("<h1>HELLO in HTML STRING</h1>"));

// HTML file
app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile("index.html", {
    root: process.cwd(), // directory name
  });
});

app.get("/playlist", (req, res) => {
  res.sendFile("data/database.json", {
    root: process.cwd(), // directory name
  });
});

app.post("/video", (req, res) => {
  console.log(req.body);
  // what are http status codes
  // what are request headers?
  // what are response headers?
  res.send("video added to playlist");
});

app.listen(8000, () => console.log("server is running on port 8000"));
