define(["app"], function (app) {
    app.register.service("comminService", function () {
        this.save = function (obj, actionUrl) {
            console.info(obj);
            console.info("进入save方法service");
            return "";
        }
        function getObj(){
            return  [{
                "id": "1",
                "className": "公司介绍"
            }, {
                "id": "2",
                "className": "基本新闻"
            }, {
                "id": "3",
                "className": "重要新闻"
            }, {
                "id": "4",
                "className": "公司简介"
            }, {
                "id": "5",
                "className": "招纳贤士"
            }, {
                "id": "6",
                "className": "团队风采"
            }];
        }
        this.searchById = function (id) {
            var obj =getObj();
            var returnObj;
            if (id) {
                for (var i = 0; i < obj.length; i++) {
                    if (obj[i].id == id) {
                        returnObj = obj[i]
                        break;
                    }
                }
            }
            return returnObj;
        }
        this.search = function () {
            return getObj();
        }
    })

})