(function () {
    'use strict';

    angular
        .module('app')
        .controller('loginController', loginController);

    loginController.$inject = ['$location', '$scope','$rootScope'];

    function loginController($location, $scope, $rootScope) {

        $scope.currentYear = new Date().getFullYear();
        $scope.isAuthenticated = false;

        $scope.userLogin = {
            userName: '',
            password: ''
        };

        /* jshint validthis:true */
        var vm = this;
        vm.title = 'loginController';

        activate();

        function activate() { }

        $scope.doLogin = function (user, password) {

            debugger;
            if (user == 'riguel' && password == '123') {

                $rootScope.isAuthenticated = true;
                $location.path("/");
            }
        };

        $scope.doLogout = function () {

            debugger;
            $scope.userLogin = {
                userName: '',
                password: ''
            };

            $rootScope.isAuthenticated = false;
            $location.path("/");
        };
    }
})();
