'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

var _Results = require('./Results');

var _Results2 = _interopRequireDefault(_Results);

var _helpers = require('../utils/helpers');

var _helpers2 = _interopRequireDefault(_helpers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Form = function (_Component) {
  _inherits(Form, _Component);

  function Form() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Form);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Form.__proto__ || Object.getPrototypeOf(Form)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      topic: '',
      startYear: '',
      endYear: '',
      saved: []
    }, _this.handleChange = function (key) {
      return function (event) {
        var state = {};
        state[key] = event.target.value;
        _this.setState(state);
      };
    }, _this.handleSubmit = function (event) {
      // prevent the HTML from trying to submit a form if the user hits "Enter" instead of
      // clicking the button
      event.preventDefault();

      console.log('submit');
      console.log(_this.state);
    }, _this.deleteArticle = function (articleID) {
      console.log(articleID);
      _helpers2.default.deleteArticle(articleID);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Form, [{
    key: 'componentDidMount',


    // The moment the page renders get the saved articles
    value: function componentDidMount() {
      var _this2 = this;

      // Get saved articles.
      _helpers2.default.getSaved().then(function (response) {
        console.log(response);
        if (response !== _this2.state.saved) {
          console.log('saved', response.data);
          _this2.setState({ saved: response.data });
        }
      }); //.bind(this)
    }

    // When a user submits...


    // delete articles

  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement(
        'div',
        { className: 'container' },
        _react2.default.createElement(
          'form',
          { onSubmit: this.handleSubmit },
          _react2.default.createElement(
            'div',
            { className: 'form-group' },
            _react2.default.createElement(
              'h4',
              { className: '' },
              _react2.default.createElement(
                'strong',
                null,
                'Topic'
              )
            ),
            _react2.default.createElement('input', {
              value: this.state.topic,
              type: 'text',
              className: 'form-control',
              id: 'topic',
              onChange: this.handleChange('topic'),
              required: true
            }),
            _react2.default.createElement(
              'h4',
              null,
              _react2.default.createElement(
                'strong',
                null,
                'Start Date'
              )
            ),
            _react2.default.createElement('input', {
              value: this.state.startYear,
              type: 'date',
              className: 'form-control',
              id: 'start-Year',
              onChange: this.handleChange('startYear'),
              required: true, pattern: '[0-9]{4}-[0-9]{2}-[0-9]{2}'
            }),
            _react2.default.createElement(
              'h4',
              null,
              _react2.default.createElement(
                'strong',
                null,
                'End Date'
              )
            ),
            _react2.default.createElement('input', {
              value: this.state.endYear,
              type: 'date',
              className: 'form-control',
              id: 'end-Year',
              onChange: this.handleChange('endYear'),
              required: true, pattern: '[0-9]{4}-[0-9]{2}-[0-9]{2}'
            })
          ),
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              _reactRouterDom.Link,
              { to: '/results' },
              _react2.default.createElement(
                'button',
                {
                  className: 'btn btn-primary',
                  type: 'submit'
                },
                'Submit'
              )
            )
          )
        ),
        _react2.default.createElement(_reactRouterDom.Route, { path: '/results', render: function render(props) {
            return _react2.default.createElement(_Results2.default, {
              searchTerm: _this3.state
            });
          } }),
        _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement(
            'h2',
            null,
            'Saved Articles'
          ),
          _react2.default.createElement(
            'ul',
            { className: 'list-group' },
            this.state.saved.map(function (item) {
              return _react2.default.createElement(
                'li',
                { key: item._id, className: 'list-group-item' },
                item.url,
                _react2.default.createElement('hr', null),
                item.title,
                _react2.default.createElement(
                  'button',
                  {
                    className: 'btn btn-danger',
                    type: 'button',
                    onClick: function onClick() {
                      _this3.deleteArticle(item._id);
                    }
                  },
                  'delete'
                ),
                _react2.default.createElement('hr', null),
                item.date
              );
            })
          )
        )
      );
    }
  }]);

  return Form;
}(_react.Component);

exports.default = Form;
//# sourceMappingURL=Form.js.map