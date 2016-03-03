(function() {

	var app = angular.module('app', ['ui.router', 'firebase']);

	app.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider){

		$urlRouterProvider.otherwise('/');

		$stateProvider.state('home',
		{
			url: '/',
			templateUrl:'views/home/home.html',
			controller:'SoundCtrl'
		}).
		state('upload',
		{
			url: '/upload',
			templateUrl:'views/upload/upload.html',
			controller:'UploadCtrl'
		}).
		state('sign',
		{
			url: '/sign',
			templateUrl:'views/sign/sign.html',
			controller:'SignCtrl'
		});

	}]);

})();
