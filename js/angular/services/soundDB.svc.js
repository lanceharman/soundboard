angular.module('app').service('SoundDB', ['$firebaseArray', '$firebaseAuth', function($firebaseArray, $firebaseAuth){

    // insert the reference link to your firebase here
    var baseRef = new Firebase('http://YourFirebaseLink/'),
        boardRef = new Firebase('http://YourFirebaseLink/board');

    this.getBaseRef = function(){
        return baseRef;
    };

    this.getAuth = function(){
        return $firebaseAuth(baseRef).$getAuth();
    };

    this.unAuth = function(){
        $firebaseAuth(baseRef).$unauth();
    };

    this.getSounds = function(){
        return $firebaseArray(boardRef);
    };
}]);
