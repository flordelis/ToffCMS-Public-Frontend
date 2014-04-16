/* global app:true */
/* exported app */

'use strict';

var app = angular.module('HM-Website-App', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/:slug', {
        templateUrl: 'views/page.html',
        controller: 'PageCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
