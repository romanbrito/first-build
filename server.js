'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _methodOverride = require('method-override');

var _methodOverride2 = _interopRequireDefault(_methodOverride);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

var PORT = process.env.PORT || 3000;

// Run Morgan for Logging
app.use((0, _morgan2.default)('dev'));
app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({ extended: true }));
app.use(_bodyParser2.default.text());
app.use(_bodyParser2.default.json({ type: 'application/vnd.api+json' }));

// override with POST having ?_method=DELETE
app.use((0, _methodOverride2.default)("_method"));

// public Directory
app.use(_express2.default.static('./public'));

// handlebars
var exphbs = require('express-handlebars');
var hbs = exphbs.create({
  defaultLayout: 'main',
  partialsDir: ['views/partials']
});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// -------------------------------------------------

// hook mongoose with our mongodb database
//local uri
// create mongoDB nytreact
var databaseUri = 'mongodb://localhost/nytreact';

if (process.env.MONGODB_URI) {
  _mongoose2.default.connect(process.env.MONGODB_URI);
} else {
  _mongoose2.default.connect(databaseUri);
}

var db = _mongoose2.default.connection;

db.on('error', function (err) {
  console.log('Mongoose Error:', err);
});

db.once('open', function () {
  console.log('Mongoose connection successful.');
});

// Routes
// Main "/" Route. This will redirect the user to our rendered React application
app.use(require('./routes/saved'));
app.use(require('./routes/main'));

// This is the route we will send GET requests to retrieve our most recent click data.
// We will call this route the moment our page gets rendered
// app.get('/api', (req,res) => {
//   Click.find({}).exec((err, doc)=>{
//     if (err) {
//       console.log(err);
//     } else {
//       res.send(doc);
//     }
//   });
// });

// This is the route we will send POST requests to save each click.
// We will call this route the moment the "click" or "reset" button is pressed.

// app.post('/api', (req, res) => {
//   let clickID = req.body.clickID;
//   let clicks = parseInt(req.body.clicks);

// Note how this route utilizes the findOneAndUpdate function to update the clickCount
// { upsert: true } is an optional object we can pass into the findOneAndUpdate method
// If included, Mongoose will create a new document matching the description if one is not found
//   Click.findOneAndUpdate({
//     clickID: clickID
//   }, {
//     $set: {
//       clicks: clicks
//     }
//   }, {upsert: true}).exec((err)=>{
//     if (err) {
//       console.log(err);
//     }else {
//       res.send('Updated Click Count!');
//     }
//   });
// });

app.listen(PORT, function () {
  console.log('App listening on PORT: ' + PORT);
});
//# sourceMappingURL=server.js.map