const {verify} = require('jsonwebtoken');

const validateToken = (req, res, next) => {
    const accessTaken = req.header("accessToken");

    if (!accessToken) return res.json({error: "User not logged in!"});

    try {
        const validToken = verify(accessToken, "importantsecret");
        if (validTaken) {
        }
    } catch (err) {
        return res.json({error:err});

    }
};

module.export = {validateToken};
