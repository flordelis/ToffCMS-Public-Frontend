/* global jQuery:true */
'use strict';

app.controller('NavCtrl', function ($rootScope, $routeParams, $scope, $location, gettextCatalog, Navigation) {

  // Memoize this value
  var Language = function () {
    var previouslyActive;

    this.updateNavigation = function () {
      Navigation.get({language: $routeParams.lang}, function (data) {
        var navigation = [],
            el = {};

        for (var i = 0; i < data.navigation.length; i++) {
          el = jQuery.extend({}, data.navigation[i]);

          // HTTP URLs
          if (el.full_url.match(/^http/i)) {
            el.url = el.full_url;

          // Other URLs
          } else {
            el.url = '#/' + $routeParams.lang + el.full_url;
          }

          // Append the instance to the main array
          navigation.push(el);
        }

        $scope.navigation = navigation;

        console.log($scope.navigation);
      });

    };

    this.updateLanguage = function () {

      // No Need to update
      if (previouslyActive === $routeParams.lang) {
        return;
      }

      // Update previously active
      previouslyActive = $routeParams.lang;

      $rootScope.changeLanguage($routeParams.lang);
      this.updateNavigation();
    };

    return this;
  };

  var lng = new Language();






  $scope.navigation = [];

  $rootScope.$on('$routeChangeSuccess', function () {
    lng.updateLanguage();
  });

  $scope.navClass = function (instance) {
    var path = '#' + $location.path();

    if (path.substr(-1, 1) === '/') {
      path = path.substr(0, path.length-1);
    }

    if (instance.url === path)
    {
      return 'active';
    }

    return '';
  };

  $rootScope.languages = ['en', 'lv', 'ru'];
  $rootScope.changeLanguage = function (lang) {

    if (lang === undefined) {
      lang = gettextCatalog.currentLanguage;
    }

    if ($rootScope.languages.indexOf(lang) < 0) {
      lang = config.defaultLanguage;
    }

    var path = '/' + lang + $location.path().substr(3);
    $location.path(path).replace();

    gettextCatalog.currentLanguage = lang;
  };

});
