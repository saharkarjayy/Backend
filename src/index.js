require('dotenv').config();
const express = require("express");
const app = express();
const http = require("http");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const helmet = require("helmet");
const morgan = require("morgan");
const compression = require("compression");

const port = process.env.PORT || 8007;
const router = require("./router/router");

app.use(helmet());
app.use(compression());
app.use(cors({ origin: true }));
app.options("*", cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan("dev"));



app.use("/image", express.static(path.join(__dirname, "public/image")));
app.use("/api", router);



const httpServer = http.createServer(app);
httpServer.listen(port, () =>
  console.log("RESTful API server started on: " + port)
);


// if (require.main === module) {
//   httpServer.listen(port, () =>
//     console.log("RESTful API server started on: " + port)
//   );
// }

module.exports = app;
