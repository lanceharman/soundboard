angular.module('app').controller('SoundCtrl', ['$scope', 'SoundDB', function($scope, SoundDB) {

	var audio = null;
	var audioPlayer = null;

	$scope.sounds = SoundDB.getSounds();

	//////////////////////////////////////////////////////////////////
	// SCOPE FUNCTIONS
	//////////////////////////////////////////////////////////////////

	$scope.playSound = function(sound){

		audio = sound;

		// if another sound is playing, stop it
		if(audioPlayer != null){
			audioPlayer.pause();
			audio.active = false;

			// this should be resolved with  $scope.$apply() but can't
			// because $apply is already active from the onended listener
			jQuery('.active').removeClass('active');
		}

		// don't double play
		if(!audio.active){
			audio.active = true;

			audioPlayer = new Audio('sounds/' + audio.filename);
			audioPlayer.play();

			audioPlayer.onended = function(){
				audio.active = false;
				$scope.$apply(); // needed to update the ng-class in view
			};
		}
	};

	$scope.FireModal = function(index){
		var modalID = '#modal-' + index;
		jQuery(modalID).foundation('reveal', 'open');
	};

}]);
