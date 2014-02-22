'use strict';

/* global Firebase*/
angular.module('fullSailHangoutApp')
	//Firebase Connection
	.factory('FireConn', ['$firebase', function ($firebase){

		var url = 'https://fsh.firebaseio.com',
		ref = new Firebase(url);

		return $firebase( ref );

	}]);