import express from "express";
const app = express();

// DIFFERENT WAYS TO DELIVER HTML

// just text
// app.get("/", (req, res) => res.send("hello."));

// HTML in a text string
// app.get("/", (req, res) => res.send("<h1>HELLO in HTML STRING</h1>"));

// HTML file
app.get("/", function (req, res) {
  res.sendFile("index.html", {
    root: process.cwd(), // directory name
  });
});

app.listen(8000, () => console.log("server is running on port 8000"));
