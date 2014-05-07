'use strict';

describe('Service: Gallery', function () {

  // load the service's module
  beforeEach(module('publicApp'));

  // instantiate service
  var Gallery;
  beforeEach(inject(function (_Gallery_) {
    Gallery = _Gallery_;
  }));

  it('should do something', function () {
    expect(!!Gallery).toBe(true);
  });

});
