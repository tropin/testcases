OTTAppServices.factory('LoginService', [
    '$modal',
    'UserService',
    function ($modal, UserService) {
        return function(){
            var modalInstance = $modal.open({
                templateUrl: 'partials/modal-login.html',
                controller: 'ModalLoginController',
                backdrop: 'static',
                backdropClass: 'ott login backdrop'
            });
            modalInstance.result.then(//We interested only in successful login, so there is no rejection promise handler
                function (credentials){
                    //There is no credentials checking, sorry...
                    UserService.setUser(credentials.login, 'admin'); //All our users are admins, land of gods!
                }
            );
        };
    }]);