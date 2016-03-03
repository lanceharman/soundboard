angular.module('app').controller("AuthCtrl", ["$scope", "$firebaseAuth",

	function($scope, $firebaseAuth) {

		var ref = new Firebase("https://yac-soundboard.firebaseio.com/");

		$scope.authObj = $firebaseAuth(ref);

		var authData = $scope.authObj.$getAuth();

		if (authData) {
			$scope.user = {
				email: '',
				pw: '',
				name: authData.password.email
			}
		} 
		else {
		  console.log("Logged out");
		}


		$scope.logout = function(){
			$scope.authObj.$unauth();
			console.log("logout time!");

			location.reload();
		}



	}



]);