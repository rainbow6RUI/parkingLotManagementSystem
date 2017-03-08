/**
 * Created by lenovo on 2017-02-27.
 */
(function (angular) {
    var app = angular.module("mainModule",['ionic','ui.router']);
    app.factory("dataGet",["$http",function ($http) {
        return {
            getData:function () {
                return $http.post("/home").then(function (res) {
                    var result = [];
                    res.data.forEach(function (i) {
                        result.push({
                            title:i.title
                        });
                    });
                    return result
                });
            }
        }
    }]);
})(window.angular);