const express = require("express");
var cors = require("cors");

let app = express();
app.use(cors());

// Declare our route and call the controller that will do all the job with callbacks
app.get("/getSkills", function (req, res) {
  //res.header("Access-Control-Allow-Origin", "https://dkmhp.csb.app");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");

  setTimeout(() => {
    res.json({
      skills: [
        {
          name: "HTML",
          percent: "80%"
        },
        {
          name: "CSS",
          percent: "20%"
        },
        {
          name: "VueJS",
          percent: "100%"
        }
      ]
    });
  }, 3000);
});

app.listen(3000);
