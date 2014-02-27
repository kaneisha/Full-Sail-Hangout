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

    //$scope.desc.$child('comments').$add($scope.newComment);

    $scope.user = $rootScope.loginObj.user.username;
    //$scope.showComments = FireTransit.comments;

    if($rootScope.loginObj.user.provider === 'github'){
      $scope.avi = $rootScope.loginObj.user.avatar_url;
    }

    if($scope.newComment !== ''){
      FireCourse.$child($routeParams.id).$child('comments').$add({
        name: $scope.user,
        text: $scope.newComment,
        image: $scope.avi
      });

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

    $scope.user = $rootScope.loginObj.user.username;
    //$scope.showComments = FireTransit.comments;

    if($rootScope.loginObj.user.provider === 'github'){
      $scope.avi = $rootScope.loginObj.user.avatar_url;
    }

    if($scope.transitComment !== ''){
      FireTransit.$child('comments').$add({
        name: $scope.user,
        text: $scope.transComment,
        image: $scope.avi
      });

      console.log('hey: ', $scope.user);
    }



    // FireTransit.$child('comments').$add($scope.transComment);
    // console.log(FireTransit, $scope.transComment);
    //$scope.showComments = FireTransit.comments;
  };


}]);

App.controller('Social', ['$scope', '$routeParams', 'FireSocial', '$rootScope', function($scope, $routeParams, FireSocial, $rootScope) {

  //$scope.rides = FireTransit;
  $scope.showComments = FireSocial.$child('comments');

  $scope.addSocial = function(){

    $scope.user = $rootScope.loginObj.user.username;
   // FireSocial.$child('comments').$add($scope.socialComment, $scope.user);
    console.log($scope.showComments, $scope.showUser);


    if($rootScope.loginObj.user.provider === 'github'){
      $scope.avi = $rootScope.loginObj.user.avatar_url;
    }

    if($scope.socialComment !== ''){
      FireSocial.$child('comments').$add({
        name: $scope.user,
        text: $scope.socialComment,
        image: $scope.avi
      });

      console.log('hey: ', $scope.user);
    }

  };

}]);

App.controller('Alumni', ['$scope', '$routeParams', 'FireAlumni', '$rootScope', function($scope, $routeParams, FireAlumni, $rootScope) {

  //$scope.rides = FireTransit;
  //$scope.user = $rootScope.loginObj.user.username;
  $scope.showComments = FireAlumni.$child('comments');
  $scope.addAlumni = function(){

    //FireAlumni.$child('comments').$add($scope.alumniComments);
    console.log(FireAlumni, $scope.alumniComments);

    $scope.user = $rootScope.loginObj.user.username;
    //$scope.showComments = FireTransit.comments;

    if($rootScope.loginObj.user.provider === 'github'){
      $scope.avi = $rootScope.loginObj.user.avatar_url;
    }

    if($scope.alumniComments !== ''){
      FireAlumni.$child('comments').$add({
        name: $scope.user,
        text: $scope.alumniComments,
        image: $scope.avi
      });

      console.log('hey: ', $scope.user);
    }

  };


}]);


