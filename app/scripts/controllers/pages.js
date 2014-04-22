'use strict';

app.controller('PageCtrl', function ($scope, $routeParams, $location, Post) {

  // Prepare the promise
  $scope.post = null;

  // Grab the post
  Post.get({slug: $routeParams.slug, language: $routeParams.lang}, function (data) {

    // Nothing found? Show 404
    if (data.error || data.pages.length !== 1) {
      $location.path('/' + $routeParams.lang + '/404').replace();
      return;
    }

    // Set the post
    $scope.post = data.pages[0];
  });

});
