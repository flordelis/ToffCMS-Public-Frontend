'use strict';

describe('Controller: GalleryitemCtrl', function () {

  // load the controller's module
  beforeEach(module('publicApp'));

  var GalleryitemCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    GalleryitemCtrl = $controller('GalleryitemCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
