'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = require('react-bootstrap');

var _Form = require('./Form');

var _Form2 = _interopRequireDefault(_Form);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Main = function Main() {
  return _react2.default.createElement(
    'div',
    { className: 'container' },
    _react2.default.createElement(
      _reactBootstrap.Jumbotron,
      null,
      _react2.default.createElement(
        'h1',
        null,
        'New York Times Article Scrubber'
      ),
      _react2.default.createElement(
        'p',
        null,
        'Search for and annotate articles of interest!'
      )
    ),
    _react2.default.createElement(_Form2.default, null)
  );
};

// could move to routes
exports.default = Main;
//# sourceMappingURL=Main.js.map