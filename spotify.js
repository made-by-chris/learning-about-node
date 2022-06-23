import express from "express";
const app = express();

app
  .route("/playlists")
  .get((req, res) => res.send("here's the playlist"))
  .post((req, res) => res.send("playlist post request received"))
  .put((req, res) => res.send("playlist put request received"))
  .delete((req, res) => res.send("playlist delete request received"));

app
  .route("/songs")
  .get((req, res) => res.send("here's the song"))
  .post((req, res) => res.send("song post request received"))
  .put((req, res) => res.send("song put request received"))
  .delete((req, res) => res.send("song delete request received"));

app
  .route("/likes")
  .get((req, res) => res.send("here's the like"))
  .post((req, res) => res.send("like post request received"))
  .put((req, res) => res.send("like put request received"))
  .delete((req, res) => res.send("like delete request received"));

app
  .route("/profile")
  .get((req, res) => res.send("here's the profile"))
  .post((req, res) => res.send("profile post request received"))
  .put((req, res) => res.send("profile put request received"))
  .delete((req, res) => res.send("profile delete request received"));

app
  .route("/artists")
  .get((req, res) => res.send("here's the artist"))
  .post((req, res) => res.send("artist post request received"))
  .put((req, res) => res.send("artist put request received"))
  .delete((req, res) => res.send("artist delete request received"));

app.route("/search").get((req, res) => res.send("here's the search"));

app.listen("7000", () => console.log("spotify API running"));

// volume
// albums
// recommended
// genre
// podcasts
// episodes
