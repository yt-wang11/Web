<!DOCTYPE html>

<html>
	<head>
	<#assign contextPath=request.contextPath>
		<meta charset="utf-8">
		<title>管理系统</title>
		<meta name="renderer" content="webkit">
		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
		<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
		<meta name="apple-mobile-web-app-status-bar-style" content="black">
		<meta name="apple-mobile-web-app-capable" content="yes">
		<meta name="format-detection" content="telephone=no">

		<link rel="stylesheet" href="${contextPath}/plugins/layui/css/layui.css" media="all" />
		<link rel="stylesheet" href="${contextPath}/css/global.css" media="all">
		<link rel="stylesheet" type="text/css" href="${contextPath}/css/font-awesome.4.6.0.css">
        <!--锁屏模板 start-->
        <script type="text/template" id="lock-temp">
            <div class="admin-header-lock" id="lock-box">
                <div class="admin-header-lock-img">
                    <img src="images/0.jpg"/>
                </div>
                <div class="admin-header-lock-name" id="lockUserName">${cjbh}</div>
                <input type="text" class="admin-header-lock-input" value="输入密码解锁.." name="lockPwd" id="lockPwd" />
                <button class="layui-btn layui-btn-small" id="unlock">解锁</button>
            </div>
        </script>
        <!--锁屏模板 end -->
        <script type="text/javascript" src="${contextPath}/plugins/jquery.min.js"></script>
        <script type="text/javascript" src="${contextPath}/plugins/layui/layui.js"></script>
        <script type="text/javascript" src="${contextPath}/datas/nav.js"></script>
        <script src="${contextPath}/js/index.js"></script>
        <script>
            layui.use('layer', function() {
                var $ = layui.jquery,
                        layer = layui.layer;

                $('#video1').on('click', function() {
                    layer.open({
                        title: 'YouTube',
                        maxmin: true,
                        type: 2,
                        content: 'video.html',
                        area: ['800px', '500px']
                    });
                });

            });
            var period;
            var imgDOM;
            var t;
            function autoRefresh(seconds){
                if(typeof period == "undefined"){   //如果是第一次执行
                    period = seconds * 1000;    //定义全局变量period
                    var bodyDOM = document.getElementsByTagName("body")[0];
                    if(bodyDOM){
                        bodyDOM.innerHTML += '<img id="auto_refresh_img" src="" style="display:none" />';   //添加隐藏的图片
                        imgDOM = document.getElementById("auto_refresh_img");   //定义全局Image对象
                    }
                }
                if(typeof imgDOM != "undefined"){
                    imgDOM.src = "/session?sid=" + new Date().getTime();    //防止缓存
                    t = setTimeout("autoRefresh("+seconds+")", period);
                }
            }
            $(function () {
                autoRefresh(60);   //调用方法启动定时刷新 这是以秒记时的
            });
        </script>
	</head>
	<body>
		<div class="layui-layout layui-layout-admin">
			<div class="layui-header header header-demo">
				<div class="layui-main">
					<div class="admin-login-box">
						<a class="logo" style="left: 0;" href="#">
							<span style="font-size: 22px;">${cjmc}</span>
						</a>
						<div class="admin-side-toggle">
							<i class="fa fa-bars" aria-hidden="true"></i>
						</div>
					</div>
					<ul class="layui-nav admin-header-item">
						<li class="layui-nav-item">
							<#--<a href="javascript:;">清除缓存</a>-->
						</li>
						<li class="layui-nav-item">
							<#--<a href="javascript:;">浏览网站</a>-->
						</li>
						<li class="layui-nav-item" id="video1">
							<#--<a href="javascript:;">视频</a>-->
						</li>
						<li class="layui-nav-item">
							<a href="javascript:;" class="admin-header-user">
								<img src="images/0.jpg" />
								<span>${Session["username"]}</span>
							</a>
							<dl class="layui-nav-child">
								<dd>
									<a href="#" onclick="modifyPwd()"><i class="fa fa-gear" aria-hidden="true"></i> 修改密码</a>
								</dd>
                                <#--<dd>
                                    <a onclick="requestFullScreen();" href="javascript:;"><i class="fa fa-gear" aria-hidden="true"></i> 全屏</a>
                                </dd>-->
								<dd id="lock">
									<a href="javascript:;">
										<i class="fa fa-lock" aria-hidden="true" style="padding-right: 3px;padding-left: 1px;"></i> 锁屏
									</a>
								</dd>
								<dd>
									<a href="${contextPath}/loginOut"><i class="fa fa-sign-out" aria-hidden="true"></i> 注销</a>
								</dd>
							</dl>
						</li>
					</ul>
					<ul class="layui-nav admin-header-item-mobile">
						<li class="layui-nav-item">
							<a href="login.html"><i class="fa fa-sign-out" aria-hidden="true"></i> 注销</a>
						</li>
					</ul>
				</div>
			</div>
			<div class="layui-side layui-bg-black" id="admin-side">
				<div class="layui-side-scroll" id="admin-navbar-side" lay-filter="side"></div>
			</div>
			<div class="layui-body" style="bottom: 0;border-left: solid 2px #1AA094;" id="admin-body">
				<div class="layui-tab admin-nav-card layui-tab-brief" lay-filter="admin-tab">
					<ul class="layui-tab-title">
						<li class="layui-this">
							<i class="fa fa-dashboard" aria-hidden="true"></i>
							<cite>系统主页</cite>
						</li>
					</ul>
					<div class="layui-tab-content" style="min-height: 150px; padding: 5px 0 0 0;">
						<div class="layui-tab-item layui-show">
							<iframe src="${contextPath}/welcome"></iframe>
						</div>
					</div>
				</div>
			</div>
			<div class="layui-footer footer footer-demo" id="admin-footer">
				<div class="layui-main">
					<p>2018 &copy;
						 BeBetter license 皖ICP<a href="http://www.miitbeian.gov.cn">18009114</a>号
					</p>
				</div>
			</div>
			<div class="site-tree-mobile layui-hide">
				<i class="layui-icon">&#xe602;</i>
			</div>
			<div class="site-mobile-shade"></div>
		</div>
	</body>
	<#--锁屏密码-->
    <input type="hidden" id="flag" value="0">
    <#--<input type="hidden" name="cjbh" id="cjbh" value="${cjbh}" />-->
    <input type="hidden" id="ajax_url" value="${ajax_url}" />
</html>