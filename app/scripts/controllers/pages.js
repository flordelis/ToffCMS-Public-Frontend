'use strict';

app.controller('PageCtrl', function ($scope, $routeParams, $location, Post, gettextCatalog) {

  $scope.post = null;

  $scope.languages = ['en', 'lv', 'ru'];
  $scope.lang = $routeParams.lang;

  $scope.changeLanguage = function (lang) {

    if (lang !== undefined) {
      $scope.lang = lang;
    }

    var path = '/' + $scope.lang + $location.path().substr(3);
    $location.path(path).replace();

    gettextCatalog.currentLanguage = $scope.lang;
  };

  Post.get({slug: $routeParams.slug}, function (data) {
    $scope.post = data.pages[0];
  });

  $scope.changeLanguage();

});
