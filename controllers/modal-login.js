OTTAppControllers
    .controller('ModalLoginController', [
        '$scope',
        '$modalInstance',
        function($scope, $modalInstance) {
            $scope.logIn = function () {
                if ($scope.loginInputs.$valid)
                {
                    $modalInstance.close($scope.credentials);
                }
            };

            $scope.cancel = function () {
                $modalInstance.dismiss('cancel');
            };
        }
 ]);