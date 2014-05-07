'use strict';

app.controller('GalleryitemCtrl', function ($routeParams, $location, $scope, Gallery) {

    // Prepare the promise
    $scope.gallery = [];

    // Grab the gallery
    Gallery.get({slug: $routeParams.slug }, function (data) {

      // Set the gallery
      $scope.gallery = data.gallery;

    }, function () {

      // Nothing found? Show 404
      $location.path('/' + $routeParams.lang + '/404');

    });

  });
