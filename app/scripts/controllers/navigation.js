/* global jQuery:true */
'use strict';

app.controller('NavCtrl', function ($rootScope, $routeParams, $scope, $location, gettextCatalog) {

  // Memoize this value
  var Language = function () {
    var previouslyActive = 'hi';

    var updateNavigation = function () {
      var el = {};
      $scope.navigation = [];

      for (var i = 0; i < navigationData.length; i++) {
        el = jQuery.extend({}, navigationData[i]);

        el.url = '/' + $routeParams.lang + navigationData[i].url;

        $scope.navigation.push(el);
      }
    };

    this.updateLanguage = function () {

      // No Need to update
      if (previouslyActive === $routeParams.lang) {
        return;
      }

      // Update previously active
      previouslyActive = $routeParams.lang;

      updateNavigation();
      $rootScope.changeLanguage($routeParams.lang);
    };

    return this;
  };

  // !!! ToDo: Get from API
  var navigationData = [
    {
      name: 'Home',
      url: ''
    },
    {
      name: 'Blog',
      url: '/blog'
    },
    {
      name: 'Test',
      url: '/test'
    }
  ];

  $scope.navigation = [];
  var lng = new Language();

  $rootScope.$on('$routeChangeSuccess', function () {
    lng.updateLanguage();
  });

  $scope.navClass = function (instance) {
    var path = $location.path();

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
