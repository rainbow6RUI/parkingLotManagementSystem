/**
 * Created by babyleon on 2017/3/1.
 */
(function (angular) {
    var app = angular.module("mainModule");
    app.directive("changejob",function () {
        return{
            restrict:"E",
            template:
            "<div class='container1'>"
                +"<div class='controller1'>"
                    +"<span class='glyphicon glyphicon-chevron-left leftPicture'>" + "</span>"
                +"</div>"
            +"</div>"
        }
    });
})(window.angular);