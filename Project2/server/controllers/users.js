const express = require("express");

const user = require("../models/users");

const app = express.Router();

app
  .post("/", (req, res, next) => {
    user.createUser(req.body)
      .then((user) => res.status(201).send(user));
  })
  .get("/", (req, res, next) => {
    users.getUsers()
      .then((data) => res.status(200).send(data))
      .catch(next);
  })
  .get("/:username", (req, res, next) => {
    users.getUser(req.params.username)
      .then((data) => {
        if (data) {
          res.status(200).send(data);
        } else {
          res.status(404).send("User not found");
        }
      })
  })
  .get("/following/:username", (req, res, next) => {
    users.getFollowing(req.params.username)
      .then((data) => {
        if (data) {
          res.status(200).send(data);
        } else {
          res.status(404).send("User not found");
        }
      })
  })
  .patch("/follow/:username/:fusername", (req, res, next) => {
    users.follow(req.params.username, req.params.fusername)
      .then((data) => {
        res.status(200).send(req.params.username + " followed " + req.params.fusername);
      });
  })
  .patch("/unfollow/:username/:fusername", (req, res, next) => {
    users.unfollow(req.params.username, req.params.fusername)
      .then((data) => {
        res.status(200).send(req.params.username + " unfollowed " + req.params.fusername);
      });
  })
  .delete("/:username", (req, res, next) => {
    users.removeUser(req.params.username)
      .then((data) => {
        res.status(200).send("User " + req.params.username + " deleted");
      });
  })
  .post("/login", (req, res, next) => {
    users.login(req.body.username, req.body.password)
      .then((data) => {
        if (data) {
          res.status(200).send(data);
        } else {
          res.status(401).send("Invalid username or password");
        }
      });
  })
  .post("/seed", (req, res, next) => {
    users.seed();
    res.status(200).send("Seeded");
  });


module.exports = app;