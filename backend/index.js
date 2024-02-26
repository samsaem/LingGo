const express = require("express");
const app = express();
const cors = require("cors");

// fixing POST request when trying to SEND through Insomnia
app.use(express.json());
app.use(cors());

// import models to mySQL workbench
const db = require('./models');

// Routers
const usersRouter = require('./routes/Users')
app.use("/auth", usersRouter);

db.sequelize.sync().then(() => {
    app.listen(3035, () => {
        console.log("Backend server running on port 3035");
    });                                                    
});