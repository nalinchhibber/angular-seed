define([
    //External Libraries
    'domReady',
    'angular',
    'angular-ui-router',    
        
     //Main Application modules
    'modules/auth/LoginController',
    'modules/home/HomeController'
], function (domReady, angular) {
    'use strict';
    var module = angular.module('angular_seed', ['ui.router']);

    module.controller('LayoutCtrl', function($scope){
        $scope.app_name = "angular-seed-app";
    });

    module.config(function($stateProvider, $urlRouterProvider){
        
        $stateProvider
            .state('app', {
                abstract: true,                                  
                templateUrl: 'modules/app/views/layout.html',
                controller: 'LayoutCtrl',
            })  
            .state('app.login', {
                url: '/login',
                views:{
                    'login_content':{
                        templateUrl: 'modules/auth/views/login.html',
                        controller : 'LoginCtrl',
                    }
                } 
            })
            .state('app.home', {
                url: '/home',
                templateUrl: 'modules/home/views/login.html',
                controller : 'HomeCtrl',
            })
        $urlRouterProvider.otherwise('/login');
    });

    domReady(function (document) {
        //Manually bootstrap angular App
        angular.bootstrap(document, ['angular_seed']);       
    });

    return module;
}); 