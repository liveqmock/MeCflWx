define(["config", "ui-route"], function (config) {
    var app = angular.module("gwApp", ['ui.router']);
    //根据congif配置来生成路由对象
    app.provider('route', function () {
        this.$get = function () {
            return this;
        }
        this.route = function () {
            function getRoute(routeObj) {
                var returnObj;
                returnObj = routeObj;
                if (routeObj) {
                    if (routeObj.views) {
                        returnObj.views = routeObj.views;
                        for (var key in routeObj.views) {
                            returnObj.views[key] = routeObj.views[key];
                            returnObj.views[key]["templateUrl"] = config.templatePre + routeObj.views[key]["templateUrl"] + ".html";
                            if ( routeObj.views[key]['requireCtl']) {
                                routeObj.views[key].resolve = {
                                    "load": ['$q', '$rootScope', function ($q, $rootScope) {
                                        return   getResolve($q, $rootScope, config.controllerPre + routeObj.views[key]['requireCtl']);
                                    }]
                                }
                            }
                        }
                    } else {
                        returnObj.templateUrl = config.templatePre + routeObj.templateUrl + ".html";
                        if (routeObj.requireCtl) {
                            returnObj.resolve = {
                                "load": ['$q', '$rootScope', function ($q, $rootScope) {
                                      return   getResolve($q, $rootScope, config.controllerPre + routeObj.requireCtl);
                                }]
                            }
                        }
                    }
                }
                function getResolve($q, $rootScope, requireCtl) {
                    //$q angularjs 的异步服务
                    //$1.defer()  获取延迟对象
                    var defer = $q.defer();
                    require([requireCtl], function () {
                        defer.resolve()
                        $rootScope.$apply();
                    })
                    return defer.promise;
                }
                return returnObj;
            }
            return {getRoute: getRoute}
        }
    });
    //用于绑定各个节点的状态和状态的参数
    app.run(['$rootScope', '$state', '$stateParams',
        function ($rootScope, $state, $stateParams) {
            $rootScope.$state = $state;
            $rootScope.$stateParams = $stateParams;
        }
    ]);
    //配置路由的各个节点
    app.config(["$stateProvider", "$urlRouterProvider", "$controllerProvider", "$compileProvider", "$filterProvider", "$provide", "routeProvider",
        function ($stateProvider, $urlRouterProvider, $controllerProvider, $compileProvider, $filterProvider, $provide, routeProvider) {
            app.register =
            {
                controller: $controllerProvider.register,
                directive: $compileProvider.directive,
                filter: $filterProvider.register,
                factory: $provide.factory,
                service: $provide.service
            };
            $urlRouterProvider.otherwise(config.defaultRedirect);

            var routers = routeProvider.route();
            var route = config.route;
            for (var routestate in route) {
                $stateProvider.state(routestate, routers.getRoute(route[routestate]));
            }

        }]);
    return app;
})
