'use strict';

/* global Firebase*/
angular.module('fullSailHangoutApp')
	//Firebase Connection
	.factory('FireConn', ['$firebase', function ($firebase){

		var url = 'https://fsh.firebaseio.com/',
		ref = new Firebase(url);

		return $firebase( ref );

	}])

	.factory('FireCourse', ['$firebase', function ($firebase){

		var url = 'https://fsh.firebaseio.com/courses',
		ref = new Firebase(url);

		return $firebase( ref );

	}])

	.factory('FireTransit', ['$firebase', function ($firebase){

		var url = 'https://fsh.firebaseio.com/transit',
		ref = new Firebase(url);

		return $firebase( ref );

	}])

	.factory('FireSocial', ['$firebase', function ($firebase){

		var url = 'https://fsh.firebaseio.com/social',
		ref = new Firebase(url);

		return $firebase( ref );

	}])

	.factory('FireAlumni', ['$firebase', function ($firebase){

		var url = 'https://fsh.firebaseio.com/alumni',
		ref = new Firebase(url);

		return $firebase( ref );

	}]);
