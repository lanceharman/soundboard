angular.module('app').service('SoundDB', ['$firebaseArray', '$firebaseAuth', function($firebaseArray, $firebaseAuth){

    // insert the reference link to your firebase here
    var baseRef = new Firebase('YOUR FIREBASE LINK'),
        boardRef = new Firebase('YOUR FIREBASE LINK/board');

    this.getBaseRef = function(){
        return baseRef;
    };

    this.getAuth = function(){
        return $firebaseAuth(baseRef).$getAuth();
    };

    this.getSounds = function(){
        return $firebaseArray(boardRef);
    };
}]);
