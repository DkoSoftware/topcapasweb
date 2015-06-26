(function () {
    'use strict';

    angular
        .module('app')
        .controller('userTasksController', userTasksController);

    userTasksController.$inject = ['$location','$scope']; 

    function userTasksController($location, $scope) {

        $scope.title = 'Tarefas';

        /* jshint validthis:true */
        var vm = this;
        vm.title = 'userTasksController';

        activate();

        function activate() { }
    }
})();
