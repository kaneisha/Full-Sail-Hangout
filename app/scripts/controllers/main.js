'use strict';

var App = angular.module('fullSailHangoutApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

App.controller('Courses', ['$scope', '$routeParams', 'FireCourse', function($scope, $routeParams, FireCourse) {

 // var db = new Firebase('https://fsh.firebaseio.com/activeUser');
  //$scope.items = $Firebase(db);

  $scope.courses = FireCourse;

  // $scope.addData = function(){

  //   FireCourse.$add($scope.item);

  // };

}]);

App.controller('Transit', ['$scope', '$routeParams', 'FireTransit', function($scope, $routeParams, FireTransit) {

 // var db = new Firebase('https://fsh.firebaseio.com/activeUser');
  //$scope.items = $Firebase(db);

  //$scope.courses = FireCourse;

  $scope.addData = function(){

    $scope.desc.$child('comments').$add($scope.newComment);

  };

  $scope.IdDisplay = $routeParams.id;

  $scope.desc = FireCourse.$child($routeParams.id);

  $scope.desc.comments = FireCourse.$child($routeParams.id).comments;
  console.log($scope.desc.comments);

}]);

App.controller('CourseDesc', ['$scope', '$routeParams', 'FireCourse', function($scope, $routeParams, FireCourse) {

 // var db = new Firebase('https://fsh.firebaseio.com/activeUser');
  //$scope.items = $Firebase(db);

  //$scope.courses = FireCourse;

  $scope.addData = function(){

    $scope.desc.$child('comments').$add($scope.newComment);

  };

  $scope.IdDisplay = $routeParams.id;

  $scope.desc = FireCourse.$child($routeParams.id);

  $scope.desc.comments = FireCourse.$child($routeParams.id).comments;
  console.log($scope.desc.comments);

}]);

