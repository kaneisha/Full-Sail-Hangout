'use strict';

var App = angular.module('fullSailHangoutApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'firebase'
])
//whenever the url is /something go to this view and call his controller
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
        controller: 'Social'
      })
      .when('/alumni', {
        templateUrl: 'views/alumni.html',
        controller: 'Alumni'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

/*global Firebase*/
App.run(['$firebaseSimpleLogin', '$rootScope', '$window', '$location', function($firebaseSimpleLogin, $rootScope, $window, $location){

    //sets dataRef to be the url of my Firebase
    var dataRef = new Firebase('https://fsh.firebaseio.com/');
    //gives the firebaseSimpleLogin my firebase url and sets it ti loginObj
    $rootScope.loginObj = $firebaseSimpleLogin(dataRef);
    console.log($rootScope.loginObj);

    //function when user logins to direct them to the home page
    $rootScope.$on('$firebaseSimpleLogin:login', function(user) {

      if(user){
        $window.location.href = '#/loggedIn';
      }

    });

    //function when user logouts to direct them to the landing page
    $rootScope.$on('$firebaseSimpleLogin:logout', function(user) {

      if(user){
        $location.path('/');
      }

    });


  }]);
