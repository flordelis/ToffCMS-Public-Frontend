'use strict';

app.factory('Navigation', function ($resource) {
  return $resource('http://api.historymakers.lv/v1.0/navigation');
});
