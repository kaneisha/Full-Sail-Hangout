'use strict';

var App = angular.module('fullSailHangoutApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

App.controller('Courses', ['$scope', '$routeParams', 'FireConn', function($scope, $routeParams, FireConn){

    $scope.IdDisplay = $routeParams.id;

    var free = FireConn.$child($routeParams.id);
    console.log(free);

    $scope.item = FireConn.$child($routeParams.id);

    // console.log('Loading Detail', $routeParams.id);
    // console.log(FireConn);
  }]);
