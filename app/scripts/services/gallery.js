'use strict';

app.factory('Gallery', function ($resource) {
  return $resource('http://api.historymakers.lv/v1.0/gallery/:slug');
});
