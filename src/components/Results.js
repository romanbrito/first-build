'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _helpers = require('../utils/helpers');

var _helpers2 = _interopRequireDefault(_helpers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Results = function (_Component) {
  _inherits(Results, _Component);

  function Results() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Results);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Results.__proto__ || Object.getPrototypeOf(Results)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      results: [],
      searchTerm: {},
      article: {}
    }, _this.saveArticle = function (info) {
      console.log(info);
      _helpers2.default.postArticle(info);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Results, [{
    key: 'componentDidMount',


    // componentDidUpdate() {
    //   helpers.postArticle(this.state.article)
    //     .then(() => {
    //     console.log("posted to mongo");
    //   })
    // }

    // Whenever the button is clicked we'll use setState to add to the clickCounter
    // Note the syntax for setting the state

    // If the component changes (i.e. if a search is entered)...
    value: function componentDidMount() {
      var _this2 = this;

      //if (prevState.searchTerm !== this.state.searchTerm) {
      console.log('Updated');
      console.log(this.props.searchTerm);

      //var {topic, startYear, endYear} = this.props.searchTerm;


      // Run query for the article
      _helpers2.default.runQuery(this.props.searchTerm).then(function (data) {
        if (data !== _this2.state.results) {
          _this2.setState({ results: data });
          console.log('Articles');
          console.log(_this2.state.results);
        }
      }
      //}
      );
    }

    // save articles

  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement(
        'div',
        { className: 'container' },
        _react2.default.createElement(
          'h2',
          null,
          'Search Results'
        ),
        _react2.default.createElement(
          'ul',
          { className: 'list-group' },
          this.state.results.map(function (item) {
            return _react2.default.createElement(
              'li',
              { key: item._id, className: 'list-group-item' },
              item.web_url,
              _react2.default.createElement('hr', null),
              item.headline.main,
              _react2.default.createElement(
                'button',
                {
                  className: 'btn btn-primary',
                  type: 'button',
                  onClick: function onClick() {
                    _this3.saveArticle(item);
                  }
                },
                'Save'
              ),
              _react2.default.createElement('hr', null),
              item.pub_date
            );
          })
        )
      );
    }
  }]);

  return Results;
}(_react.Component);

exports.default = Results;
//# sourceMappingURL=Results.js.map