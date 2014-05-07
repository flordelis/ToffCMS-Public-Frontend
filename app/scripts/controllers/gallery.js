'use strict';

app.controller('GalleryCtrl', function ($routeParams, $location, $scope, Gallery) {

    // Prepare the promise
    $scope.galleries = [];

    // Grab the galleries
    Gallery.get(function (data) {

      // Nothing found? Show 404
      if (data.error) {
        $location.path('/' + $routeParams.lang + '/404').replace();
        return;
      }

      // Set the galleries
      $scope.galleries = data.galleries;
    });

  });
