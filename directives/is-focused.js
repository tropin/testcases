OTTApp.directive('isFocused', [
    '$parse',
    '$timeout',
    function ($parse, $timeout) {
        return {
            link: function (scope, element, attrs) {
                var model = $parse(attrs.isFocused);
                scope.$watch(model, function (value) {
                    $timeout(function(){
                            if (value === true) {
                                element[0].focus();
                            }
                        }
                    );
                });
            }
        };
    }]);
