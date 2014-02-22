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
      .when('/course/:id', {
        templateUrl: 'views/course.html',
        controller: 'CourseDesc'
      })
      .when('/transit', {
        templateUrl: 'views/transit.html',
        controller: 'Transit'
      })
      .when('/social', {
        templateUrl: 'views/social.html',
        //controller: 'Course'
      })
      .when('/alumni', {
        templateUrl: 'views/alumni.html',
       // controller: 'Course'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

/*global Firebase*/
App.run(['$firebaseSimpleLogin', '$rootScope', function($firebaseSimpleLogin, $rootScope){

    var dataRef = new Firebase('https://fsh.firebaseio.com/');
    $rootScope.loginObj = $firebaseSimpleLogin(dataRef);
    console.log($rootScope.loginObj);


  }]);
