'use strict';

app.factory('Post', function ($rootScope) {

  var Post = {
    getBySlug: function (slug) {
      for (var i = POST_FIXTURE.length - 1; i >= 0; i--) {
        if (POST_FIXTURE[i].slug === slug) {
          return POST_FIXTURE[i];
        }
      };

      return false;
    },
  };

  return Post;
});

var POST_FIXTURE = [
  {
    id: 1,
    title: 'My title',
    slug: 'my-title',
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, fugiat sapiente dolore quibusdam impedit sint doloremque. Eaque, error, debitis, iure consectetur id dolorem expedita dolorum ab perferendis magnam ex alias!',
    status: 'live',
    author_id: 1,
    created: 1000000,
    updated: 1000000
  },{
    id: 2,
    title: 'Draft',
    slug: 'draft',
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, fugiat sapiente dolore quibusdam impedit sint doloremque. Eaque, error, debitis, iure consectetur id dolorem expedita dolorum ab perferendis magnam ex alias!',
    status: 'draft',
    author_id: 1,
    created: 1000000,
    updated: 1000000
  },{
    id: 3,
    title: 'Test',
    slug: 'test',
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, fugiat sapiente dolore quibusdam impedit sint doloremque. Eaque, error, debitis, iure consectetur id dolorem expedita dolorum ab perferendis magnam ex alias!',
    status: 'live',
    author_id: 1,
    created: 1000000,
    updated: 1000000
  }
];
