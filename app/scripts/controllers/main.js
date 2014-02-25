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


}]);

App.controller('Social', ['$scope', '$routeParams', 'FireSocial', '$rootScope', function($scope, $routeParams, FireSocial, $rootScope) {

  var chatRef = FireSocial;
  //$scope.rides = FireTransit;
  $scope.showComments = FireSocial.$child('comments');
 // $scope.showUser = $scope.username;
  //$scope.showUser = FireSocial.user.username;
  //console.log($scope.user.username);

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

  // chatRef.$on('child_added', function(snapshot){
  //   var message = snapshot;
  //   console.log(message.$scope.user);

  //  // $scope.comments.append('<img src="' + message.image + '">' + '<h3 id="user">' + message.name + '<p id="user_comment">' + message.text + '</p>' );


  // });

}]);

App.controller('Alumni', ['$scope', '$routeParams', 'FireAlumni', function($scope, $routeParams, FireAlumni) {

  //$scope.rides = FireTransit;
  $scope.showComments = FireAlumni.$child('comments');
  $scope.addAlumni = function(){

    FireAlumni.$child('comments').$add($scope.alumniComments);
    console.log(FireAlumni, $scope.alumniComments);
    //$scope.showComments = FireTransit.comments;
  };


}]);


