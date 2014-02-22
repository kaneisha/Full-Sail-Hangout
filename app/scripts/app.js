'use strict';

var App = angular.module('fullSailHangoutApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'firebase'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/loggedIn', {
        templateUrl: 'views/home.html',
        //controller: 'Login'
      })
      .when('/courses', {
        templateUrl: 'views/courses.html',
        controller: 'Courses'
      })
      .when('/course', {
        templateUrl: 'views/course.html',
        controller: 'Course'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

/*global Firebase*/
App.run(['$firebaseSimpleLogin', '$rootScope', function($firebaseSimpleLogin, $rootScope){

    var dataRef = new Firebase('https://fsh.firebaseio.com/');
    $rootScope.loginObj = $firebaseSimpleLogin(dataRef);
    //console.log($rootScope.loginObj);
  }]);
