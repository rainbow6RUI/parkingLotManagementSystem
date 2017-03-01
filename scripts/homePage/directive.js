/**
 * Created by lenovo on 2017-02-27.
 */
(function(angular){
    var app = angular.module('mainModule');
    app.directive("homePage",
            function(){
                return{
                    restrict:"ECMA",
                    template:
                            "<div class='header'>"+
                                "<img src='img/logo.png' alt='#'>"+
                                "<div class='ion-laptop' ui-sref='login' ui-sref-active=''><span>管理员登录</span></div>"+
                                "<div class='ion-android-contacts' ui-sref='changejob' ui-sref-active=''><span>工作人员交接</span></div>"+
                                "<div ><input type='text' placeholder='请输入查找所需关键字'/><div class='ion-android-search'></div></div>"+
                                "<div class='ion-android-textsms'><span>站间联络</span></div>"+
                            "</div>"+
                            "<div class='main'>" +
                                "<div ui-sref='userinfo' ui-sref-active='' class='ion-ios-paper'><span>用户资料</span></div>"+
                                "<div ui-sref='accctrl' ui-sref-active='' class='ion-android-car'><span>出入管理</span></div>"+
                                "<div ui-sref='carinquire' ui-sref-active='' class='ion-android-search'><span>车辆查询</span></div>"+
                                "<div ui-sref='cardinquire' ui-sref-active='' class='ion-card'><span>临时卡管理</span></div>"+
                                "<div ui-sref='vipcard' ui-sref-active='' class='ion-playstation'><span>会员一卡通</span></div>"+
                                "<div ui-sref='datarecord' ui-sref-active='' class='ion-android-apps'><span>数据记录</span></div>"+
                            "</div>",
                    scope:{
                        
                    }
                }
            }
    )
})(window.angular);