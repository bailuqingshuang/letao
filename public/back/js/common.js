/**
 * Created by 笑尿 on 2017/11/21.
 */
//1.进度条显示功能
/*不显示转圈效果*/
NProgress.configure({
    showSpinner:false
});
/*在ajax开始请求的时候 把进度条显示出来*/
$(document).ajaxStart(function () {
    NProgress.start();
});
/*在ajax结束请求的时候把 进度条结束*/
$(document).ajaxStop(function () {
    setTimeout(function () {
        NProgress.done();
    },500);
});

//非登录页面，判断当前用户是否登录了，如果登陆了
if(location.href.indexOf("login.html") == -1){
    $.ajax({
        type:"get",
        url:"/employee/checkRootLogin",
        success: function (data) {
            if(data.error === 400){
                //说明用户没有登录，跳转到登陆页面
                location.href = "login.html";
            }
        }
    })
}

//二级分类显示隐藏
$(".child").prev().on("click", function () {
    $(this).next().slideToggle();
});
//侧边栏显示隐藏功能
$(".icon_menu").on("click", function () {
    $(".lt_aside").toggleClass("now");
    $(".lt_main").toggleClass("now");
});

//退出功能
$(".icon_logout").on("click", function () {
    $("#logoutModal").modal("show");

//给退出按钮注册事件,off解绑所有的事件
$(".btn_logout").off().on("click", function () {
    //发送ajax请求，退出系统
    $.ajax({
        type: "get",
        url: "/employee/employeeLogout",
        success: function (data) {
            if (data.success) {
                //退出成功
                location.href = "login.html";
            }
        }
    });
    });
});












