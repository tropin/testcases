//Main app declaration and module dependences

var OTTApp  = angular.module("OTTApp", [
    'ngRoute',
    'ngStorage',
    'ipsum',
    'ui.bootstrap',
    'drahak.hotkeys',
    'OTTApp.controllers',
    'OTTApp.services'
]);

//Application controllers global variable for simplify syntax for controllers declaration
var OTTAppControllers = angular.module('OTTApp.controllers', []);

//Application services global variable for simplify syntax for services declaration
var OTTAppServices = angular.module('OTTApp.services', []);

//Routing configuration
OTTApp.config(function ($routeProvider) {
    $routeProvider.when('/home', {
        templateUrl: '/partials/home.html',
        controller: 'HomeController'
    });

    $routeProvider.when('/contacts', {
        templateUrl: '/partials/contacts.html',
        controller: 'ContactsController'
    });

    //Admin page is restricted to admin role users
    $routeProvider.when('/admin', {
        templateUrl: '/partials/admin.html',
        controller: 'AdminController',
        roles: 'admin'
    });

    //Default page is home
    $routeProvider.otherwise({redirectTo: '/home'});
});



OTTApp.run(['$rootScope','$location', 'UserService', function ($rootScope, $location, UserService) {
    //Checking permission for route
    $rootScope.$on('$routeChangeStart', function (event, next) {
        var neededRole = (next.$$route) ? next.$$route.roles : '';
        if (neededRole) { //If we have restrictions on route
            var userInfo = UserService.getUser(); //Getting user info from storage
            if (!userInfo || userInfo.role !== neededRole){ //Checking have we needed role
                $location.path('/home'); //If not, redirect to home
            }
        }
        $rootScope.activeRoute = next.$$route ? next.$$route.originalPath.substr(1) : ''; //Defining global name of current route
    });

    //Handling user default pages
    $rootScope.$on('user::changed', function(){
        var userInfo = UserService.getUser();
        if (userInfo){
            if (userInfo.role === 'admin'){
                $location.path('/admin');
            }
        } else {
            $location.path('/home');
        }
    })
}]);