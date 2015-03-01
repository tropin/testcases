OTTApp.directive('isAuthentificated', [
    '$rootScope',
    'UserService',
    function ($rootScope, UserService) {
        return {
            link: function (scope, element, attrs) {
                var needToBeAuthentificated = attrs.isAuthentificated.trim().toLowerCase() === "true";

                function updateVisibility() {
                    var isLoggedIn = Boolean(UserService.getUser());
                    var showElement = needToBeAuthentificated? isLoggedIn: !isLoggedIn;
                    if (showElement) {
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
