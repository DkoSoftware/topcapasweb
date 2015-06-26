(function () {
    'use strict';

    angular
        .module('app')
        .controller('userPerfilController', userPerfilController);

    userPerfilController.$inject = ['$location','$scope']; 

    function userPerfilController($location, $scope) {

        $scope.title = 'Dados cadastrais';

        var user = {
            id: 0,
            namne : '',
            userName : '',
            password : '',
            email : ''
        };

        /* jshint validthis:true */
        var vm = this;
        vm.title = 'userPerfilController';

        activate();

        function activate() { }

        $scope.saveUser = function (userData) {

            debugger;
            if ($scope.formUserRegister.$invalid) return;
            toastr["success"]("Usuario salvo com sucesso!");
        };

        $scope.editUser = function(userData) {
            debugger;
            toastr["success"]("Usuario alterado com sucesso!");
        };

        $scope.onSubmit = function ($event) {
            // check for errors; if wrong return/preventDefault/doTheRightThing
            // else continue
            debugger;
            return false;
        };
    }
})();
