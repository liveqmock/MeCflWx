define({
    baseUrl: "../js/",
    templatePre: "../template/pc/",
    controllerPre: "../js/controller/",
    route: {
        'center': {
            url: "/center",
            views: {
                "view_top": {
                    templateUrl: "top"
                },
                "view_center": {
                    templateUrl: "center"
                },
                "view_bottom": {
                    templateUrl: "bottom",
                    controller: "bottomCtl",
                    requireCtl: "state1Ctl"
                }
            }
        }, 'center.menue': {
            url: '/menue',
            controller: "testCtl111",
            templateUrl: "center.menue",
            requireCtl: "state1Ctl"
        }, 'center.news': {
            url: '/news',
            controller: "newsCtl",
            templateUrl: "center.news",
            requireCtl: "newsCtls"
        }, 'center.news.add': {
            url: '/add',
            controller: "newsAddCtl",
            templateUrl: "news.add",
            requireCtl: "newsCtls"
        }, 'center.newsClass': {
            url: '/newsClass',
            controller: "newsClassCtl",
            templateUrl: "center.newsClass",
            requireCtl: "newsClassCtls"
        }, 'center.newsClass.add': {
            url: '/add',
            controller: "newsClassAddCtl",
            templateUrl: "newsClass.add",
            requireCtl: "newsClassCtls"
        }, 'center.newsClass.list': {
            url: '/list',
            controller: "newsClassListCtl",
            templateUrl: "newsClass.list",
            requireCtl: "newsClassCtls"
        }, 'center.newsClass.list.detail': {
            url: '/:id',
            controller: "newsClassDetailCtl",
            templateUrl: "newsClass.detail",
            requireCtl: "newsClassCtls"
        }
    },
    defaultRedirect: '/center'
})