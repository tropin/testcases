OTTAppServices.factory('UserService', [
    '$localStorage',
    '$rootScope',
    function ($localStorage, $rootScope) {
        return {
            setUser: function (login, role){
                $localStorage.user = {
                    login: login,
                    role: role
                };
                //Application-widesSignalling that user changed
                $rootScope.$broadcast('user::changed');
            },
            getUser: function()
            {
                return $localStorage.user;
            },
            clearAuth: function(){
                $localStorage.user = null;
                //Application-wide signalling that user have been changed
                $rootScope.$broadcast('user::changed');
            }
        }
    }
]);
