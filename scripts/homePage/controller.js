/**
 * Created by lenovo on 2017-02-27.
 */
(function(angular){
    var app = angular.module("mainModule");
    app.controller("mainController",["$scope",function($scope){
    }]);
    app.run(function($ionicPlatform) {
        $ionicPlatform.ready(function() {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if(window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            if(window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.styleDefault();
            }
        });
    })

        .config(function($stateProvider, $urlRouterProvider) {
            $stateProvider

                .state('home', {
                    url: "/home",
                    templateUrl: "views/home.html",
                    controller: 'HomeCtrl'
                })

                .state('accctrl', {
                    url: "/accctrl",
                    templateUrl: "views/access-control.html",
                    controller: 'AccCtrl'


                })
                .state('userinfo', {
                    url: "/userinfo",
                    templateUrl: "views/user-information.html",
                    controller: 'UserCtrl'


                })
                .state('carinquire', {
                    url: "/carinquire",
                    templateUrl: "views/car-inquire.html",
                    controller: 'CarCtrl'


                })
                .state('cardinquire', {
                    url: "/cardinquire",
                    templateUrl: "views/card-inquire.html",
                    controller: 'CardCtrl'


                })
                .state('vipcard', {
                    url: "/vipcard",
                    templateUrl: "views/vipcard.html",
                    controller: 'VipcardCtrl'


                })
                .state('datarecord', {
                    url: "/datarecord",
                    templateUrl: "views/data-record.html",
                    controller: 'DataCtrl'


                })
                .state('login', {
                    url: "/login",
                    templateUrl: "views/login.html",
                    controller: 'LoginCtrl'


                })
                .state('register', {
                    url: "/register",
                    templateUrl: "views/register.html",
                    controller: 'RegisterCtrl'


                })
                .state('changejob', {
                    url: "/changejob",
                    templateUrl: "views/changejob.html",
                    controller: 'ChangejobCtrl'
                });



            // if none of the above states are matched, use this as the fallback
            $urlRouterProvider.otherwise('/home');
        })

        .controller('HomeCtrl', function($scope) {
        })

        .controller('AccCtrl', function($scope) {

        })
        .controller('UserCtrl', function($scope) {

        })
        .controller('CarCtrl', function($scope) {

        })
        .controller('CardCtrl', function($scope) {

        })
        .controller('VipcardCtrl', function($scope) {

        })
        .controller('DataCtrl', function($scope) {

        })
        .controller('LoginCtrl', function($scope) {

        })
        .controller('RegisterCtrl', function($scope) {

        })
        .controller('ChangejobCtrl',function ($scope) {

        })
})(window.angular);