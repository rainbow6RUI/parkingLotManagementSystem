/**
 * Created by lenovo on 2017-02-27.
 */
(function(angular){
    angular.module('mainModule').directive("homepage",
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
                                "<div>用户资料</div>"+
                                "<div>出入管理</div>"+
                                "<div>车辆查询</div>"+
                                "<div>临时卡管理</div>"+
                                "<div>会员一卡通</div>"+
                                "<div>数据记录</div>"+
                            "</div>",
                    scope:{
                        
                    }
                }
            }
    )
})(angular);