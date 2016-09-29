/// <reference path="../typings/main.d.ts" />
angular.module('demoApp', ['ngMaterial'])
    .controller('mainCtrl', ['$scope', '$http', function ($scope, $http) {
        $scope.sendTest = () => {
            $http({
                method: 'GET',
                url: `person/1/${$scope.lastName}`
            })
                .then((response) => alert(response.data));
        };
    }]);
//# sourceMappingURL=app.js.map