const express = require("express");

const user = require("../models/User.js");

const app = express.Router();

app
  .post("/", (req, res, next) => {
    user.createUser(req.body)
      .then((user) => res.status(201).send(user));
  })
  .get("/", (req, res, next) => {
    user.getUsers()
      .then((data) => res.status(200).send(data))
      .catch(next);
  })
  .get("/:username", (req, res, next) => {
    user.getUser(req.params.username)
      .then((data) => {
        if (data) {
          res.status(200).send(data);
        } else {
          res.status(404).send("User not found");
        }
      })
  })
  .get("/following/:username", (req, res, next) => {
    user.getFollowing(req.params.username)
      .then((data) => {
        if (data) {
          res.status(200).send(data);
        } else {
          res.status(404).send("User not found");
        }
      })
  })
  .patch("/follow/:username/:fusername", (req, res, next) => {
    user.follow(req.params.username, req.params.fusername)
      .then((data) => {
        res.status(200).send(req.params.username + " followed " + req.params.fusername);
      });
  })
  .patch("/unfollow/:username/:fusername", (req, res, next) => {
    user.unfollow(req.params.username, req.params.fusername)
      .then((data) => {
        res.status(200).send(req.params.username + " unfollowed " + req.params.fusername);
      });
  })
  .delete("/:username", (req, res, next) => {
    user.removeUser(req.params.username)
      .then((data) => {
        res.status(200).send("User " + req.params.username + " deleted");
      });
  })
  .post("/login", (req, res, next) => {
    user.login(req.body.username, req.body.password)
      .then((data) => {
        if (data) {
          res.status(200).send(data);
        } else {
          res.status(401).send("Invalid username or password");
        }
      });
  })
  .post("/seed", (req, res, next) => {
    user.seed();
    res.status(200).send("Seeded");
  });


module.exports = app;