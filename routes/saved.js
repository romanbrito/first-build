"use strict";

var _methodOverride = require("method-override");

var _methodOverride2 = _interopRequireDefault(_methodOverride);

var _article = require("../models/article");

var _article2 = _interopRequireDefault(_article);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var express = require("express");
var router = express.Router();

// override with POST having ?_method=DELETE
router.use((0, _methodOverride2.default)("_method"));

// Require Article schema


// This is the route we will send GET requests to retrieve our most recent saved articles
// We will call this route the moment our page gets rendered
router.get('/api', function (req, res) {
  _article2.default.find({}).exec(function (err, doc) {
    if (err) {
      console.log(err);
    } else {
      res.send(doc);
    }
  });
});
// save to MongoDB
router.post("/api", function (req, res) {

  console.log("post route");

  var result = {};
  result.title = req.body.headline.main;
  result.date = req.body.pub_date;
  result.url = req.body.web_url;

  var entry = new _article2.default(result);

  entry.save(function (err, savedArt) {
    if (err) {
      console.log(err);
    } else {
      console.log("saved article posted"
      //res.redirect("/");
      );
    }
  });
});

// delete database
router.delete("/api", function (req, res) {
  console.log("delete route yes!!!");
  _article2.default.findByIdAndRemove(req.body.articleID, function (err, offer) {
    if (err) {
      console.log(err);
    } else {
      console.log("deleted article"
      //res.redirect("/");
      );
    }
  });
});

module.exports = router;
//# sourceMappingURL=saved.js.map