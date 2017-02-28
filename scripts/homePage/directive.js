/**
 * Created by lenovo on 2017-02-27.
 */
(function(angular){
    var app = angular.module('mainModule');
    app.directive("homePage",
            function(){
                return{
                    restrict:"E",
                    template:
                            "<div class='header'>"+
                                "<img src='img/logo.png' alt='#'>"+
                                "<ion-icon name='laptop'>管理员登录</ion-icon>"+
                                "<ion-icon name='hand'>工作人员交接</ion-icon>"+
                                "<ion-icon ><input type='text' placeholder='请输入查找所需关键字'/></ion-icon>"+
                                "<ion-icon name=''></ion-icon>"+
                            "</div>"+
                            "<div class='main'>" +
                                "<div ui-sref='userinfo' ui-sref-active=''>用户资料</div>"+
                                "<div ui-sref='accctrl' ui-sref-active=''>出入管理</div>"+
                                "<div ui-sref='carinquire' ui-sref-active=''>车辆查询</div>"+
                                "<div ui-sref='cardinquire' ui-sref-active=''>临时卡管理</div>"+
                                "<div ui-sref='vipcard' ui-sref-active=''>会员一卡通</div>"+
                                "<div ui-sref='datarecord' ui-sref-active=''>数据记录</div>"+
                            "</div>",
                    scope:{
                        
                    }
                }
            }
    )
})(window.angular);