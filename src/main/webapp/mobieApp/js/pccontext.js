require(['config'],function(config){
    require.config({
        baseUrl : config.baseUrl,
        paths : {
            "angular" : "bower_components/angular/angular.min",
            "ui-route":"bower_components/angular-ui-router/release/angular-ui-router.min"
        },
        shim : {
            'angular':{
                exports:"angular"
            },
            'ui-route':{
                exports:"uiroute"
            }
        }
    });
    require(['angular','app'], function(angular,app) {
        angular.bootstrap(document,[app.name]);
    });
})
