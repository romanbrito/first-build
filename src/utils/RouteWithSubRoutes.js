'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// wrap <Route> and use this everywhere instead, then when
// sub routes are added to any route it'll work
var RouteWithSubRoutes = function RouteWithSubRoutes(route) {
  return _react2.default.createElement(_reactRouterDom.Route, { path: route.path, render: function render(props) {
      return (
        // pass the sub-routes down to keep nesting
        _react2.default.createElement(route.component, _extends({}, props, { routes: route.routes }))
      );
    } });
};

exports.default = RouteWithSubRoutes;
//# sourceMappingURL=RouteWithSubRoutes.js.map