const jwt = require("jsonwebtoken");

module.exports = function (request, response, next) {
  try {
    let token = request.header("x-token");
    if (!token) {
      response.status(400).send("Token not found");
    }else {
      let decode = jwt.verify(token, "jwtSecret");
      request.user = decode.user;
      next();
    }
  } catch (error) {
    return response.status(500).send(error);
  }
};
