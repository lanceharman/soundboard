angular.module('app').controller('SignCtrl', ['$scope', 'SoundDB', function($scope, SoundDB) {

	// query the server
	var dataRef = SoundDB.getBaseRef();

	$scope.user = {
		email: '',
		pw: '',
		name: ''
	};

	////////////////////////
	////////////////////////
	$scope.registerNewUser = function(email, pw){

		// loosely check email/pw fields
		if(email == '' || email == undefined){
			window.alert('Well that\'s not even proper formatting for an email address');
			return;
		}
		if(pw == ''){
			window.alert('But you never entered a password...');
			return;
		}

		dataRef.createUser({
			email    : email,
			password : pw
		}, function(error) {
			if (error === null) {
				$scope.loginUser(email, pw);
			} else {
				console.log('Error creating user:', error);
			}
		});
	}

	////////////////////////
	////////////////////////
	$scope.loginUser = function(email, pw){

		// loosely check email/pw fields
		if(email == '' || email == undefined){
			window.alert('Well that\'s not even proper formatting for an email address');
			return;
		}
		if(pw == ''){
			window.alert('But you never entered a password...');
			return;
		}


		dataRef.authWithPassword({
			email    : email,
			password : pw
		}, function(error, authData) {
			if (error) {
				console.warn('Login Failed!', error);
			} else {
				console.log('Authenticated successfully with payload:', authData);
				$scope.user.name = $scope.user.email.substring(0, $scope.user.email.indexOf('@'));

				// refresh page to show the user logged in
				location.href='/soundboard';
			}
		});

		// location.reload();

	}

}]);
