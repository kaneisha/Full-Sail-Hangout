'use strict';

angular.module('fullSailHangoutApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'firebase'
]);

// /*global Firebase*/
	// App.controller('Users', ['$firebaseSimpleLogin', '$rootScope', 'FireConn', '$window', '$cookies', function($firebaseSimpleLogin, $rootScope, FireConn, $window, $cookies){

	// 	$rootScope.login = function(){

	// 	}

	// }]);





// var comment = $scope.('#social_comment').val();
//     var userComment = users.username;

//     if(users.provider === 'github'){
//       $scope.avi = users.avatar_url;
//     }

//     if(users !== '' && comment !== ''){
//       FireSocial.push({
//         name: userComment,
//         text: comment,
//         image: $scope.avi
//       });
//       $scope.('#social_comment').val('');
//       console.log('hey');
//     }

//   });

//   FireSocial.on('child_added', function(snapshot){
//       var message = snapshot.val();

//       $scope.('#comment_text').append('<div id="comments"> <img src="' + message.image + '">' + '<h3 id="user">' + message.name + '</div>' + '<p id="user_comment">' + message.text + '</p>' );

//     // });
//     });
