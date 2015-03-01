OTTAppControllers
    .controller('MainMenuController', [
        '$scope',
        'LoginService',
        'UserService',
        function($scope, LoginService, UserService) {
            $scope.signIn = function(){
                LoginService();
            };

            $scope.signOut = function(){
                UserService.clearAuth(); //No excuses, no confirmations :)
            };
        }
    ]);