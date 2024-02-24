const express = require("express");
const router = express.Router();
const { Users } = require("../models");
const bcrypt = require("bcrypt");

//const {sign} = require('jsonwebtoken');

router.get("/", (req, res) => {
    res.send("testing GET backend/routes/Users.js")
});

// Create new account
router.post("/", async (req,res) => {
    const { username, password, email } = req.body;
    bcrypt.hash(password, 10).then((hash) => {
        Users.create({
            username: username,
            password: hash,
            email: email
        });
        res.json("Successfully creater a user");
    });
});

// Login
router.post("/login", async (req,res) => {
    const { username, password } = req.body;

    const user = await Users.findOne({ where: {username: username }});

    if (!user) res.json({ error: "User doesn't exist" });

    bcrypt.compare(password, user.password).then((match) => {
        if (!match) res.json({ error: "Wrong username and password combination"});
        res.json("Logged in!");
    });
});

module.exports = router;