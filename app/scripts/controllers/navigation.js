'use strict';

app.controller('NavCtrl', function ($rootScope, $routeParams, $scope, $location, gettextCatalog) {

  $scope.navigation = [];

  $rootScope.$on('$routeChangeSuccess', function () {

    // !!! ToDo: Get from API
    $scope.navigation = [
      {
        name: 'Home',
        url: '/' + $routeParams.lang
      },
      {
        name: 'Blog',
        url: '/' + $routeParams.lang + '/blog'
      },
      {
        name: 'Test',
        url: '/' + $routeParams.lang + '/test'
      }
    ];

    $rootScope.changeLanguage($routeParams.lang);

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
