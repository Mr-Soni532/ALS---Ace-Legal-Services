exports.loginSuccess = (req, res) => {
    if (req.user) {
        res.status(200).json({
            success: true,
            message: "successfull",
            user: req.user,
            //   cookies: req.cookies
        });
    }
}
exports.loginFailed = (req, res) => {
    res.status(401).json({
        success: false,
        message: "failure",
    });
}