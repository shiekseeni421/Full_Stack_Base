const express = require("express");
const signInRouter = express.Router();

signInRouter.post("/signIn", (req, res) => {
  const { body, params, headers } = req;
  res.send(headers);
});

module.exports = signInRouter;
