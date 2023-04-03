const jwt = require('jsonwebtoken');
require('dotenv').config();
const JWT_SECRET = process.env.JWT_SECRET;
const authorization = async (req, res, next) => {

    try {
        const token = req.headers.authorization?.split(" ")[1];
        if (!token) {
           return res.status(403).json({ Message: "Unorthorised route" })
        }
        jwt.verify(token, JWT_SECRET, (err, decoded) => {
            if (err) {
              return  res.json({ Message: err.message, status: "error" })
            }
            req.body.userid = decoded.id;
            next();
        })
    } catch (error) {
        res.status(500).json({ Message: "Something went wrong while authorizing user", "err": error })
    }

}
module.exports = authorization;