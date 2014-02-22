'use strict';

var App = angular.module('fullSailHangoutApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

App.controller('Course', ['$scope', '$routeParams', 'FireConn', function($scope, $routeParams, FireConn) {

  //FireConn.$bind($scope, 'comment');
  // console.log(FireConn);

  $scope.addData = function(){

  FireConn.$add($scope.comment);
};
}]);