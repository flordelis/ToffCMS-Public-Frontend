'use strict';

app.controller('PageCtrl', function ($scope, $routeParams, Post) {

  $scope.post = Post.getBySlug($routeParams.slug);

});
