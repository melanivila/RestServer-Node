const express = require("express");
const cors = require("cors");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.usersPath = "/api/users";

    //Lectura y parseo del body
    this.app.use(express.json());

    //Middlewares
    this.middlewares();

    this.routes();
  }

  middlewares() {
    //cors - evitar errores de cross domain access
    this.app.use(cors());
    //directorio publico
    this.app.use(express.static("public"));
  }

  routes() {
    this.app.use(this.usersPath, require("../routes/users"));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("Servidor corriendo en puerto", this.port);
    });
  }
}

module.exports = Server;
