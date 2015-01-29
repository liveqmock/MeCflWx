define(["app"], function (app) {
    app.register.controller("testCtl111", ["$scope", function ($scope) {
        $scope.name = "somnussx";
    }])
    app.register.controller("bottomCtl", ["$scope", function ($scope) {
        $scope.bottom = "bottom page";
    }])
});