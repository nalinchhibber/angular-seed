define(['angular'],function (angular) {
	var module = angular.module('angular_seed', ['ui.router']);
	module.controller('LoginCtrl', function($scope, $rootScope, $http, $state){
		$scope.login = function(user){
			$http.post('/login').then(function(res){
				alert('success')
				$state.go('app.home')
			}, function(err){
				alert('error')
				console.log(err)
			})
		}
	});
})