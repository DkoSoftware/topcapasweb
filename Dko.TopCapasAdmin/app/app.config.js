(function () {
    'use strict';

    angular.module('app').constant('APP_SETTINGS', {
        "VERSION": "0.0.1",
        "CURR_ENV": "dev"
        //"SERVICE_URL": "https://andrebaltieri-api.azurewebsites.net/"
        //"SERVICE_URL": "http://localhost:3348/"
    });

    angular.module('app').run(function ($rootScope, $location) {

        $rootScope.isAuthenticated = true;


        // alert config
        //toastr.options = {
        //    "closeButton": true,
        //    "debug": false,
        //    "newestOnTop": false,
        //    "progressBar": false,
        //    "positionClass": "toast-top-full-width",
        //    "preventDuplicates": false,
        //    "onclick": null,
        //    "showDuration": "300",
        //    "hideDuration": "1000",
        //    "timeOut": "5000",
        //    "extendedTimeOut": "1000",
        //    "showEasing": "swing",
        //    "hideEasing": "linear",
        //    "showMethod": "fadeIn",
        //    "hideMethod": "fadeOut"
        //};

        //$rootScope.isPageBusy = false;

        //$rootScope.reLogin = reLogin();

        $rootScope.logout = function () {
            logout();
            localStorage.setItem('token', '');
            localStorage.setItem('user', '');
            $location.path('/');
        };

        logout();
        //reLogin();

        function logout() {
            $rootScope.isAuthenticated = false;
            $rootScope.token = "";
            $rootScope.user = {
                name: "",
                email: ""
            };

            $location.path("/");
        };

        //function reLogin() {
        //    var token = localStorage.getItem('token');
        //    if (token != '' && token != null && token != undefined && token != 'undefined') {
        //        $rootScope.token = token;
        //        $rootScope.user = angular.fromJson(localStorage.getItem('user'));
        //        $rootScope.isAuthenticated = true;
        //        getUserInfo();
        //    }
        //};

        //function getUserInfo() {

        //    DashboardDataFactory.getInfo()
        //        .success(success)
        //        .catch(fail);

        //    function success(response) {
        //        $rootScope.user = {
        //            name: response.name,
        //            email: response.email
        //        };
        //        localStorage.setItem('user', angular.toJson($rootScope.user));
        //    }

        //    function fail(error) {
        //        if (error.status == 401) {
        //            toastr.error("Sua sessão expirou");
        //            $rootScope.logout();
        //        } else {
        //            toastr.error(error.data.error);
        //        }
        //    }
        //};

        $rootScope.$on("$routeChangeStart", function (event, next, current) {
            if (next.authorize && !$rootScope.isAuthenticated) {
                $location.path("/");
            }
        });
        
    });
})();