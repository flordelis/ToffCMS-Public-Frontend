'use strict';

app.controller('PageCtrl', function ($scope, $routeParams, $location, Post) {

  $scope.post = null;

  Post.get({slug: $routeParams.slug, language: $routeParams.lang}, function (data) {
    $scope.post = data.pages[0];
  });

});
