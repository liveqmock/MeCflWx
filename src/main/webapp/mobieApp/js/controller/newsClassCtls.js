define(["app","service/commonServices"], function (app) {

    app.register.controller("newsClassCtl", ['$scope', function ($scope) {
    }]);
    app.register.controller("newsClassListCtl", ['$scope','comminService', function ($scope,comminService){
        $scope.newsClassList=comminService.search();
    }]);
    app.register.controller("newsClassDetailCtl", ['$scope','$stateParams','comminService', function ($scope,$stateParams,comminService){
       $scope.newsClass=comminService.searchById($stateParams.id);
    }]);
    app.register.controller("newsClassAddCtl", ['$scope','comminService', function ($scope,comminService) {
        $scope.newClass = {};
        $scope.subMit = function () {
            comminService.save($scope.newClass,"obj");
        }
    }]);


})