(function () {
    'use strict';

    angular.module('app').config(function ($routeProvider) {

        $routeProvider
            .when('/', {
                controller: 'homeController',
                templateUrl: 'app/areas/home/views/home.html'
            })
            .when('/login', {
                controller: 'loginController',
                templateUrl: '/',
                controllerAs: 'vm',
                requiereLogin : true
            })
            .when('/userPerfil', {
                templateUrl: 'app/areas/user/views/userPerfil.html',
                controller: 'userPerfilController',
                controllerAs: 'vm',
                requiereLogin : true
                //property for resolve inject functions in controller
                //resolve: {
                //    moviesPrepService: moviesPrepService
                //}
            })
            .when('/userTasks', {
                templateUrl: 'app/areas/user/views/userTasks.html',
                controller: 'userTasksController',
                controllerAs: 'vm',
                requiereLogin: true
                //property for resolve inject functions in controller
                //resolve: {
                //    moviesPrepService: moviesPrepService
                //}
            })
            .otherwise({
                controller: 'homeController as vm',
                templateUrl: '404.html',
                requiresLogin: false
            });
    });

})();