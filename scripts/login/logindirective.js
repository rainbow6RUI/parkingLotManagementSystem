/**
 * Created by Messi on 2017/3/1.
 */
(function (angular) {
    var app = angular.module("mainModule");
    app.directive("loginPage",function () {
        return{
            restrict:"E",
            template:"<form id='slick-login'>"+
            "<label for='username'>username</label>"+"<input type='text' name='username' class='placeholder' placeholder='me@tutsplus.com'>"+
            "<label for='password'>password</label>"+"<input type='password' name='password' class='placeholder' placeholder='password'>"+
            "<input type='submit' value='Log In'>"+
            "</form>"
        }
    });
})(window.angular);