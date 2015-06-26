(function () {
    'use strict';

    angular
        .module('app')
        .controller('customercontroller', customercontroller);

    customercontroller.$inject = ['$location']; 

    function customercontroller($location) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'customercontroller';

        activate();

        function activate() { }
    }
})();
