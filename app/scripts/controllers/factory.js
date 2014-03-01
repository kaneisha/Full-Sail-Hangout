'use strict';

/* global Firebase*/
angular.module('fullSailHangoutApp')
	//Firebase Connection
	.factory('FireConn', ['$firebase', function ($firebase){
		//sets the url to be the url of the firebase, ref to be a new firebase with the url and return it
		var url = 'https://fsh.firebaseio.com/',
		ref = new Firebase(url);

		return $firebase( ref );

	}])
	//Firebase connection for the courses part of the firebase, ref to be a new firebase with the url and return it
	.factory('FireCourse', ['$firebase', function ($firebase){
		//sets the url to be the url of the firebase
		var url = 'https://fsh.firebaseio.com/courses',
		ref = new Firebase(url);

		return $firebase( ref );

	}])
	//Firebase connection for the transit part of the firebase, ref to be a new firebase with the url and return it
	.factory('FireTransit', ['$firebase', function ($firebase){
		//sets the url to be the url of the firebase
		var url = 'https://fsh.firebaseio.com/transit',
		ref = new Firebase(url);

		return $firebase( ref );

	}])
	//Firebase connection for the social part of the firebase, ref to be a new firebase with the url and return it
	.factory('FireSocial', ['$firebase', function ($firebase){
		//sets the url to be the url of the firebase
		var url = 'https://fsh.firebaseio.com/social',
		ref = new Firebase(url);

		return $firebase( ref );

	}])
	//Firebase connection for the alumni part of the firebase, ref to be a new firebase with the url and return it
	.factory('FireAlumni', ['$firebase', function ($firebase){
		//sets the url to be the url of the firebase
		var url = 'https://fsh.firebaseio.com/alumni',
		ref = new Firebase(url);

		return $firebase( ref );

	}]);
