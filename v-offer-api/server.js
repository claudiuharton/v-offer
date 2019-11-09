const express = require("express");
const bodyParser = require("body-parser");
const router = require("./routes");
const session = require("client-sessions");
const PORT = require("./config").runtime.port;
const sessionKey = require("./secrets").sessionKey;

const app = express();

app.use(
  session({
    cookieName: "session",
    secret: sessionKey,
    duration: 7200000,
    activeDuration: 300000,
    httpOnly: true,
    ephemeral: true
  })
);

// app.use("/", express.static("public"));

app.use(bodyParser.json());
app.use("/api", router);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
