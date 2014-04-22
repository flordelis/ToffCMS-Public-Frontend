/* global app:true */
/* exported app */

'use strict';

var app = angular.module('HM-Website-App', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'gettext'
])
  .config(function ($routeProvider) {

    $routeProvider
      .when('/:lang',            {templateUrl: 'views/main.html',    controller: 'MainCtrl'})
      .when('/:lang/404',        {templateUrl: 'views/404.html',     controller: '404Ctrl'})
      .when('/:lang/blog',       {templateUrl: 'views/main.html',    controller: 'MainCtrl'})
      .when('/:lang/:slug',      {templateUrl: 'views/page.html',    controller: 'PageCtrl'})
      .otherwise({
        redirectTo: '/' + config.defaultLanguage + '/'
      });

  })
  .run(function (gettextCatalog) {
    gettextCatalog.debug = true;
  });
