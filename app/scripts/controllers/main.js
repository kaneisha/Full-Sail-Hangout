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

  // Function that runs once the submit button is clicked on the courses page
  $scope.addData = function(){

    //Adds a new date for the comments
    $scope.date = Date();
    //Sets scope.d to equal an AngularJs method that parses the date
    $scope.d = Date.parse($scope.date);

    //$scope.desc.$child('comments').$add($scope.newComment);

    //sets the user to be the username of the person logged in
    $scope.user = $rootScope.loginObj.user.username;

    //sets the avi var to be the avatar github provides for the user
    if($rootScope.loginObj.user.provider === 'github'){
      $scope.avi = $rootScope.loginObj.user.avatar_url;
    }

    //if the textarea is not blank then add the name,comment,date,and avatar to the firebase
    if($scope.newComment !== '' && $scope.newComment !== undefined){
      FireCourse.$child($routeParams.id).$child('comments').$add({
        name: $scope.user,
        text: $scope.newComment,
        date: $scope.d,
        image: $scope.avi
      });
      //empty the textarea after submit
      $scope.newComment = '';
      console.log('hey: ', $scope.user);
    }

  };

  //sets IdDisplay to equal the id of the clicked item
  $scope.IdDisplay = $routeParams.id;

  //Sets $scope.desc to equal the id of the course that is clicked under the courses section in Firebase
  $scope.desc = FireCourse.$child($routeParams.id);

  //Sets $scope.desc.comments to show the comments for the id of the course that is clicked under the courses section in Firebase
  $scope.desc.comments = FireCourse.$child($routeParams.id).comments;
  console.log($scope.desc.comments);

}]);

App.controller('Transit', ['$scope', '$routeParams', 'FireTransit', '$rootScope', function($scope, $routeParams, FireTransit, $rootScope) {

  //sets $scope.showComments to equal the comments section under transit in Firebase
  $scope.showComments = FireTransit.$child('comments');

  // Function that runs once the submit button is clicked on the transit page
  $scope.addTransit = function(){

    //Adds a new date for the comments
    $scope.date = Date();
    //Sets scope.d to equal an AngularJs method that parses the date
    $scope.d = Date.parse($scope.date);

    //sets the user to be the username of the person logged in
    $scope.user = $rootScope.loginObj.user.username;
    //$scope.showComments = FireTransit.comments;

    //sets the avi var to be the avatar github provides for the user
    if($rootScope.loginObj.user.provider === 'github'){
      $scope.avi = $rootScope.loginObj.user.avatar_url;
    }

    //if the textarea is not blank then add the name,comment,date,and avatar to the firebase
    if($scope.transComment !== '' && $scope.transComment !== undefined){
      FireTransit.$child('comments').$add({
        name: $scope.user,
        text: $scope.transComment,
        date: $scope.d,
        image: $scope.avi
      });
      //empty the textarea after submit
      $scope.transComment = '';
      console.log('hey: ', $scope.user);
    }

  };


}]);

App.controller('Social', ['$scope', '$routeParams', 'FireSocial', '$rootScope', function($scope, $routeParams, FireSocial, $rootScope) {

  //sets $scope.showComments to equal the comments section under social in Firebase
  $scope.showComments = FireSocial.$child('comments');

  // Function that runs once the submit button is clicked on the social page
  $scope.addSocial = function(){

    //Adds a new date for the comments
    $scope.date = Date();
    //Sets scope.d to equal an AngularJs method that parses the date
    $scope.d = Date.parse($scope.date);

    //sets the user to be the username of the person logged in
    $scope.user = $rootScope.loginObj.user.username;
   // FireSocial.$child('comments').$add($scope.socialComment, $scope.user);
    console.log($scope.showComments, $scope.showUser);

    //sets the avi var to be the avatar github provides for the user
    if($rootScope.loginObj.user.provider === 'github'){
      $scope.avi = $rootScope.loginObj.user.avatar_url;
    }

    //if the textarea is not blank then add the name,comment,date,and avatar to the firebase
    if($scope.socialComment !== '' && $scope.socialComment !== undefined){
      FireSocial.$child('comments').$add({
        name: $scope.user,
        text: $scope.socialComment,
        date: $scope.d,
        image: $scope.avi
      });
      //empty the textarea after submit
      $scope.socialComment = '';
      console.log('hey: ', $scope.user);
    }

  };

}]);

App.controller('Alumni', ['$scope', '$routeParams', 'FireAlumni', '$rootScope', function($scope, $routeParams, FireAlumni, $rootScope) {

  //sets $scope.showComments to equal the comments section under alumni in Firebase
  $scope.showComments = FireAlumni.$child('comments');

  // Function that runs once the submit button is clicked on the social page
  $scope.addAlumni = function(){

    //Adds a new date for the comments
    $scope.date = Date();
    //Sets scope.d to equal an AngularJs method that parses the date
    $scope.d = Date.parse($scope.date);

    console.log(FireAlumni, $scope.alumniComments);

    //sets the user to be the username of the person logged in
    $scope.user = $rootScope.loginObj.user.username;
    //$scope.showComments = FireTransit.comments;

    //sets the avi var to be the avatar github provides for the user
    if($rootScope.loginObj.user.provider === 'github'){
      $scope.avi = $rootScope.loginObj.user.avatar_url;
    }

    //if the textarea is not blank then add the name,comment,date,and avatar to the firebase
    if($scope.alumniComments !== '' && $scope.alumniComments !== undefined){
      FireAlumni.$child('comments').$add({
        name: $scope.user,
        text: $scope.alumniComments,
        date: $scope.d,
        image: $scope.avi
      });
      //empty the textarea after submit
      $scope.alumniComments = '';
      console.log('hey: ', $scope.user);
    }

  };


}]);


