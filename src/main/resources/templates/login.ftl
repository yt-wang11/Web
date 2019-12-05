<!DOCTYPE html>
<html>
<head>
<#assign contextPath=request.contextPath>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>登录界面</title>
<meta name="viewport" content="width=device-width,initial-scale=1.0,user-scalable=no">
    <link href="${contextPath}/plugins/bootstrap/css/bootstrap.min.css" rel="stylesheet" type="text/css"/>
<link href="${contextPath}/css/login1.css" type="text/css" rel="stylesheet">
<style>
	#div-text{color:#fff; font-family:"微软雅黑"; font-size:14px;}
	.wrap1{position:absolute; top:0; right:0; bottom:0; left:0; margin:auto }/*把整个屏幕真正撑开--而且能自己实现居中*/
	.main_content{background:url(${contextPath}/images/main_bg.png) repeat; margin-left:auto; margin-right:auto; text-align:left; float:none; border-radius:8px;}
	.form-group{position:relative;}
	.login_btn{display:block; background:#3872f6; color:#fff; font-size:15px; width:100%; line-height:50px; border-radius:3px; border:none; }
	.login_input{width:100%; border:1px solid #3872f6; border-radius:3px; line-height:40px; padding:2px 5px 2px 30px; background:none;}
	.icon_font{position:absolute; bottom:15px; left:10px; font-size:18px; color:#3872f6;}
	.font16{font-size:16px;}
	.mg-t20{margin-top:20px;}
	@media (min-width:200px){.pd-xs-20{padding:20px;}}
	@media (min-width:768px){.pd-sm-50{padding:50px;}}
	#grad {
	  background: -webkit-linear-gradient(#4990c1, #52a3d2, #6186a3); /* Safari 5.1 - 6.0 */
	  background: -o-linear-gradient(#4990c1, #52a3d2, #6186a3); /* Opera 11.1 - 12.0 */
	  background: -moz-linear-gradient(#4990c1, #52a3d2, #6186a3); /* Firefox 3.6 - 15 */
	  background: linear-gradient(#4990c1, #52a3d2, #6186a3); /* 标准的语法 */
	}
</style>

</head>

<body style="background:url(${contextPath}/images/bg.jpg) no-repeat;">
    
    <div id="div-text" class="container wrap1" style="height:450px;">
            <h2 class="mg-b20 text-center">登录页面</h2>
            <div class="col-sm-8 col-md-5 center-auto pd-sm-50 pd-xs-20 main_content">
                <p class="text-center font16">用户登录</p>
                <form action="${contentPath}/loginValidate" method="POST">
                    <div class="form-group mg-t20">
                        <i class="icon-user icon_font"></i>
                        <input type="text" class="login_input" name="username" id="username" placeholder="请输入用户名" />
                    </div>
                    <div class="form-group mg-t20">
                        <i class="icon-lock icon_font"></i>
                        <input type="password" class="login_input" name="password" id="password" placeholder="请输入密码" />
                    </div>
                    <button style="submit" class="login_btn">登 录</button>
               </form>
        </div><!--row end-->
    </div><!--container end-->

    <input type="hidden" id="error" value="${error}" />
</body>
<script type="text/javascript" src="${contextPath}/plugins/jquery.min.js"></script>
<script src="${contextPath}/plugins/bootstrap/js/bootstrap.js" type="text/javascript"></script>
<script type="text/javascript" src="${contextPath}/plugins/layer/layer.js"></script>
<script>
    $(function () {
        if ($("#error").val() === '1'){
            layer.alert("用户名或密码错误", {icon : 5}, function () {
                $("#error").val('');
                layer.closeAll();
            });

        }
    });

    function radioChange() {
        if ($("#div_radio input:radio:checked").val() == '0'){
            // alert();
            $("#password").val('');
            $("#password").attr('placeholder', '用户不可输入密码');
            $("#password").attr("disabled", true);
        }else {
            $("#password").val('');
            $("#password").attr('placeholder', '请输入密码');
            $("#password").attr("disabled", false);
        }
    }
</script>
</html>
