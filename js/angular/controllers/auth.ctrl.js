angular.module('app').controller('AuthCtrl', ['$scope', 'SoundDB', function($scope, SoundDB) {

		var authData = SoundDB.getAuth();

		if (authData) {
			$scope.user = {
				email: '',
				pw: '',
				name: authData.password.email
			}
		}
		else {
		  console.log('Logged out');
		}

		$scope.logout = function(){
			SoundDB.unAuth();
			console.log('logout time!');

			location.reload();
		}
	}
]);
