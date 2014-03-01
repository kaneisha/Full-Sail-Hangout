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

App.controller('CourseDesc', ['$scope', '$routeParams', 'FireCourse', '$rootScope', function($scope, $routeParams, FireCourse, $rootScope) {


  $scope.addData = function(){
    //$scope.now = new Date();

    $scope.date = Date();
    $scope.d = Date.parse($scope.date);

    //$scope.desc.$child('comments').$add($scope.newComment);

    $scope.user = $rootScope.loginObj.user.username;

    if($rootScope.loginObj.user.provider === 'github'){
      $scope.avi = $rootScope.loginObj.user.avatar_url;
    }

    if($scope.newComment !== '' && $scope.newComment !== undefined){
      FireCourse.$child($routeParams.id).$child('comments').$add({
        name: $scope.user,
        text: $scope.newComment,
        date: $scope.d,
        image: $scope.avi
      });
      $scope.newComment = '';
      console.log('hey: ', $scope.user);
    }

  };

  $scope.IdDisplay = $routeParams.id;

  $scope.desc = FireCourse.$child($routeParams.id);

  $scope.desc.comments = FireCourse.$child($routeParams.id).comments;
  console.log($scope.desc.comments);

}]);

App.controller('Transit', ['$scope', '$routeParams', 'FireTransit', '$rootScope', function($scope, $routeParams, FireTransit, $rootScope) {

  //$scope.rides = FireTransit;
  $scope.showComments = FireTransit.$child('comments');
  $scope.addTransit = function(){


    $scope.date = Date();
    $scope.d = Date.parse($scope.date);

    $scope.user = $rootScope.loginObj.user.username;
    //$scope.showComments = FireTransit.comments;

    if($rootScope.loginObj.user.provider === 'github'){
      $scope.avi = $rootScope.loginObj.user.avatar_url;
    }

    if($scope.transComment !== '' && $scope.transComment !== undefined){
      FireTransit.$child('comments').$add({
        name: $scope.user,
        text: $scope.transComment,
        date: $scope.d,
        image: $scope.avi
      });
      $scope.transComment = '';
      console.log('hey: ', $scope.user);
    }

  };


}]);

App.controller('Social', ['$scope', '$routeParams', 'FireSocial', '$rootScope', function($scope, $routeParams, FireSocial, $rootScope) {

  //$scope.rides = FireTransit;
  $scope.showComments = FireSocial.$child('comments');

  $scope.addSocial = function(){


    $scope.date = Date();
    $scope.d = Date.parse($scope.date);

    $scope.user = $rootScope.loginObj.user.username;
   // FireSocial.$child('comments').$add($scope.socialComment, $scope.user);
    console.log($scope.showComments, $scope.showUser);


    if($rootScope.loginObj.user.provider === 'github'){
      $scope.avi = $rootScope.loginObj.user.avatar_url;
    }

    if($scope.socialComment !== '' && $scope.socialComment !== undefined){
      FireSocial.$child('comments').$add({
        name: $scope.user,
        text: $scope.socialComment,
        date: $scope.d,
        image: $scope.avi
      });
      $scope.socialComment = '';
      console.log('hey: ', $scope.user);
    }

  };

}]);

App.controller('Alumni', ['$scope', '$routeParams', 'FireAlumni', '$rootScope', function($scope, $routeParams, FireAlumni, $rootScope) {

  //$scope.rides = FireTransit;
  //$scope.user = $rootScope.loginObj.user.username;
  $scope.showComments = FireAlumni.$child('comments');
  $scope.addAlumni = function(){


    $scope.date = Date();
    $scope.d = Date.parse($scope.date);

    //FireAlumni.$child('comments').$add($scope.alumniComments);
    console.log(FireAlumni, $scope.alumniComments);

    $scope.user = $rootScope.loginObj.user.username;
    //$scope.showComments = FireTransit.comments;

    if($rootScope.loginObj.user.provider === 'github'){
      $scope.avi = $rootScope.loginObj.user.avatar_url;
    }

    if($scope.alumniComments !== '' && $scope.alumniComments !== undefined){
      FireAlumni.$child('comments').$add({
        name: $scope.user,
        text: $scope.alumniComments,
        date: $scope.d,
        image: $scope.avi
      });
      $scope.alumniComments = '';
      console.log('hey: ', $scope.user);
    }

  };


}]);


