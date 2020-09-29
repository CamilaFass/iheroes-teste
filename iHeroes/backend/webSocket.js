const URL = "https://desafio-frente.herokuapp.com/";
const io = require("socket.io-client")(URL);

module.exports = () => {
  io.on("connect", function (socket) {
    console.log("connected");
  });

  io.on("occurrence", (msg) => {
    console.log(msg);
  });
};
