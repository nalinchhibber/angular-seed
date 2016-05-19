define(['angular'],function (angular) {
    var module = angular.module('angular_seed', ['ui.router']);
    module.controller('HomeCtrl', function($scope,$rootScope){
        console.log('reached login ctrl')
        alert('reached login ctrl')
    });
})