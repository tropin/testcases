OTTApp.directive('haveRole', [
    '$rootScope',
    'UserService',
    function ($rootScope, UserService) {
        return {
            link: function (scope, element, attrs) {
                var role = attrs.haveRole.trim();

                function updateVisibility() {
                    var user = UserService.getUser();
                    var haveRole = false;
                    if (user){
                        haveRole = user.role === role;
                    }
                    if (haveRole) {
                        element.removeClass('hidden');
                    } else {
                        element.addClass('hidden');
                    }
                }
                updateVisibility();
                //Watching for global user change or SignOut
                $rootScope.$on('user::changed', updateVisibility);
            }
        };
 }]);
