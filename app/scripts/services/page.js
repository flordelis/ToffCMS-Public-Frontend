'use strict';

app.factory('Post', function ($resource) {
  return $resource('http://api.historymakers.lv/v1.0/page/:slug');
});
