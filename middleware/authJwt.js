const jwt = require("jsonwebtoken");
require('dotenv').config();

verifyToken = (req, res, next) => {
    const token = req.headers["x-access-token"];
    if (!token) {
        return res.status(403).send({
            message: "No token provided!"
        });
    }
    jwt.verify(token, process.env.SECRET_WORD, (err, decoded) => {
        if (err) {
            return res.status(401).send({
                message: "Unauthorized!",
            });
        }
        req.userId = decoded.userId;
        console.log(req.userId)
        next();
    });
};

checkUserId = (req, res, next) => {
    console.log(req.userId, req.params.id);
    if (req.params.id && req.userId !== parseInt(req.params.id)) {
        return res.status(403).send({
            message: "Unauthorized! You can only access your own data."
        });
    }
    console.log(req.params.id)
    next();
}

const generateToken = (user) => {
    return jwt.sign({ userId: user.id }, process.env.SECRET_WORD, {
        expiresIn: 86400 // 24 hours
    });
};

const authJwt = {
    verifyToken: verifyToken,
    checkUserId: checkUserId,
    generateToken: generateToken
};
module.exports = authJwt