'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// New York Times authKey
var authKey = 'aab61f8cd4e7499e858933618e21cebd';

var helper = {
  runQuery: function runQuery(articles) {
    console.log('run query topic ' + articles.topic);
    console.log('run query start ' + articles.startYear);
    console.log('run query end ' + articles.endYear);

    var searchTerm = articles.topic;
    var startYear = articles.startYear.replace(/-/g, "");
    var endYear = articles.endYear.replace(/-/g, "");

    // Figure out the geolocation

    var queryURL = "https://api.nytimes.com/svc/search/v2/" + "articlesearch.json?api-key=" + authKey + "&q=" + searchTerm + "&begin_date=" + startYear + "&end_date=" + endYear;

    console.log('queryURL ' + queryURL);

    return _axios2.default.get(queryURL).then(function (response) {
      if (response) {
        console.log("response " + response);
        var responseArray = response.data.response.docs;
        return responseArray;
      }
      // If we don't get any results, return an empty string
      return '';
    });
  },
  getSaved: function getSaved() {
    return _axios2.default.get('/api');
  },
  postArticle: function postArticle(data) {
    return _axios2.default.post('/api', data);
  },
  deleteArticle: function deleteArticle(articleID) {
    console.log("helper delete " + articleID);
    return _axios2.default.post('/api?_method=DELETE', { articleID: articleID });
  }
};

exports.default = helper;
//# sourceMappingURL=helpers.js.map