(function () {
    'use strict';

    angular
        .module('app')
        .controller('homeController', homeController);

    homeController.$inject = ['$scope', '$location'];

    function homeController($scope) {
        /* jshint validthis:true */
        $scope.title = 'Pagina inicial - Home';
        activate();

        function activate() { }

        $scope.isAuthenticated = true;
    }
})();
