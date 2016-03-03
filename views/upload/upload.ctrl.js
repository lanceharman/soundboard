angular.module('app').controller('UploadCtrl', ['$scope', 'SoundDB', function($scope, SoundDB) {

	$scope.submission = {};

	$scope.SelectFile = function(){
		// initiate file browse
		jQuery('#upload').click();
	};

	$scope.ReadFile = function(submission){
		var file = submission.files[0];
		$scope.submission.filename = file.name;

		$scope.$apply();
	};

	// submit to firebase server
	$scope.SubmitSound = function(){

		var auth = SoundDB.getAuth();

		if (auth){
			$scope.submission.title = jQuery('#title').val();
			$scope.submission.description = jQuery('#description').val();
			$scope.submission.tags = jQuery('#tags').val();
			$scope.submission.author = auth.password.email;

			var boardSync = SoundDB.getSounds();

			boardSync.$add($scope.submission).then(function(ref){
				var id = ref.key();
				console.log('added record with id: ', id);

				// once the entry has been verified and entered to firebase, add file to our server
				UploadFile();

			});
		}
		else
			alert('only logged in users may submit');
	};

	// submit to our server
	UploadFile = function(){

		var file = document.getElementById('upload').files[0];

		if(file != undefined){
		    var url = '/soundboard/upload.php';
		    var xhr = new XMLHttpRequest();
		    var fd = new FormData();

		    xhr.open('POST', url, true);
		    xhr.onreadystatechange = function() {
		        if (xhr.readyState == 4 && xhr.status == 200) {
		            // Every thing ok, file uploaded
		            console.log(xhr.responseText);
		            location.href='/soundboard';
		        }
		    };

		    fd.append('upload_file', file);
		    xhr.send(fd);
		}
		else
			alert('You haven\'t chosen a file');
	};

}]);
