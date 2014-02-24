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

  $scope.courses = FireCourse;


}]);

App.controller('CourseDesc', ['$scope', '$routeParams', 'FireCourse', function($scope, $routeParams, FireCourse) {


  $scope.addData = function(){

    $scope.desc.$child('comments').$add($scope.newComment);

  };

  $scope.IdDisplay = $routeParams.id;

  $scope.desc = FireCourse.$child($routeParams.id);

  $scope.desc.comments = FireCourse.$child($routeParams.id).comments;
  console.log($scope.desc.comments);

}]);

App.controller('Transit', ['$scope', '$routeParams', 'FireTransit', function($scope, $routeParams, FireTransit) {

  //$scope.rides = FireTransit;
  $scope.showComments = FireTransit.$child('comments');
  $scope.addTransit = function(){



    FireTransit.$child('comments').$add($scope.transComment);
    console.log(FireTransit, $scope.transComment);
    //$scope.showComments = FireTransit.comments;
  };


  // $scope.desc.comments = FireTransit.$child($routeParams.id).comments;

  // $scope.IdDisplay = $routeParams.id;

  // $scope.desc = FireCourse.$child($routeParams.id);

 // $scope.desc.comments = FireTransit.comments;
 // console.log($scope.desc.comments);

}]);

