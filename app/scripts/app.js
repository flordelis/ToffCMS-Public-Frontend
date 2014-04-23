/* global app:true */
/* exported app */

'use strict';

var app = angular.module('HM-Website-App', [
  'ngResource',
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
        redirectTo: '/'
      });

  })
  .run(function ($rootScope, $routeParams, $location, gettextCatalog, Settings) {
    gettextCatalog.debug = true;

    $rootScope.languages = ['en', 'lv', 'ru'];
    $rootScope.changeLanguage = function (lang) {

      if (lang === undefined) {
        lang = $routeParams.lang;
      }

      // Fallback
      if ($rootScope.languages.indexOf(lang) < 0) {
        lang = gettextCatalog.currentLanguage;
      }

      var uriSegments = $location.path().split('/');
      uriSegments.splice(1, 1);

      var path = '/' + lang + uriSegments.join('/');

      $location.path(path).replace();
      gettextCatalog.currentLanguage = lang;
    };

    // Load the default language and redirect to it
    if ($location.path() === '/' || $location.path() === '') {
      Settings.get('defaultLanguage').then(function (lang) {
        $rootScope.changeLanguage(lang);
      });
    }

  });
