const jwt = require('jsonwebtoken');
require('dotenv').config();

const authorization = async (req, res, next) => {

    try {
        const token = req.headers.authorization?.split(" ")[1];
        if (!token) {
            res.send({ Message: "please login" })
        }
        jwt.verify(token, "ALS", (err, decoded) => {
            if (err) {
                res.send({ Message: err.message, status: "error" })
            }
            req.body.userid = decoded.id;
            next()
        })
    } catch (error) {
        res.send({ Message: "Some error", "err": error })
    }

}
module.exports = authorization;