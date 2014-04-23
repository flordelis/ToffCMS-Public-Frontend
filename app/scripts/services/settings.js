'use strict';

app.factory('Settings', function ($q, $resource) {
  var resource = $resource('http://api.historymakers.lv/v1.0/settings');

  /**
   * Get a setting by its key attr
   * @param  {string} key
   * @return {promise}
   */
  this.get = function (key) {
    var deferred = $q.defer();

    resource.get(function (data) {
      deferred.resolve(data.settings[key]);
    });

    return deferred.promise;
  };

  return this;
});
