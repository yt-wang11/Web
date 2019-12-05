<!DOCTYPE html>
<html lang="en" >

<head>
    <meta charset="UTF-8">
    <title>修改密码</title>
    <link rel='stylesheet prefetch' href='${contextPath}/plugins/bootstrap-validator/css/bootstrap.min.css'>
    <link rel='stylesheet prefetch' href='${contextPath}/plugins/bootstrap-validator/css/bootstrap-theme.min.css'>
    <link rel='stylesheet prefetch' href='${contextPath}/plugins/bootstrap-validator/css/bootstrapValidator.min.css'>
    <link rel="stylesheet" href="${contextPath}/plugins/bootstrap-validator/css/bootstrap-select.min.css">
    <link href="${contextPath}/plugins/bootstrap-select/css/bootstrap-select.css" rel="stylesheet" type="text/css"/>
    <link href="${contextPath}/plugins/bootstrap-datetime/css/bootstrap-datetimepicker.min.css" rel="stylesheet" />
    <link href="${contextPath}/css/orderadd.css" rel="stylesheet" type="text/css"/>
    <style>
        body {
            /*background-color: #ccc;*/
        }
        .container {
            margin-top: 30px;
        }
    </style>

</head>

<body>

<div class="container">

    <form class="well form-horizontal" action=" " method="post"  id="contact_form">
        <fieldset>
            <input type="hidden" name="username" id="cjbh" value="${cjbh}" />

            <!-- Old Password -->
            <div class="row form-row">
                <div class="col col-md-6 col-md-offset-3">
                    <div class="form-group">
                        <label for="old">原密码</label>
                        <input id="old" class="form-control" placeholder="请输入原密码" type="password" name="old">
                    </div>
                </div>
            </div>

            <!-- New password -->
            <div class="row form-row">
                <div class="col col-md-6 col-md-offset-3">
                    <div class="form-group">
                        <label for="newPwd">新密码</label>
                        <input class="form-control" placeholder="请输入新密码" name="newPwd" type="password">
                    </div>
                </div>
            </div>

            <!-- New password confirm -->
            <div class="row form-row">
                <div class="col col-md-6 col-md-offset-3">
                    <div class="form-group">
                        <label for="confirmNew">密码确认</label>
                        <input class="form-control" placeholder="请确认密码" name="confirmNew" type="password">
                    </div>
                </div>
            </div>

            <div class="row form-row">
                <div class="form-group">
                    <div class="col-md-6 col-md-offset-3">
                        <button id="submitBtn" class="btn btn-md btn-success" type="button">
                            修改密码
                        </button>
                    </div>
                </div>
            </div>

        </fieldset>
    </form>
</div>
</div><!-- /.container -->
<script src='${contextPath}/plugins/bootstrap-validator/js/jquery.min.js'></script>
<script src='${contextPath}/plugins/bootstrap-validator/js/bootstrap.min.js'></script>
<script src='${contextPath}/plugins/bootstrap-validator/js/bootstrapvalidator.min.js'></script>
<script src="${contextPath}/plugins/bootstrap-validator/js/zh_CN.min.js"></script>
<script type="text/javascript" src="${contextPath}/plugins/bootstrap-select/js/bootstrap-select.js"></script>
<script type="text/javascript" src="${contextPath}/plugins/bootstrap-select/js/i18n/defaults-zh_CN.js"></script>
<script type="text/javascript" src="${contextPath}/plugins/layer/layer.js"></script>
<script type="text/javascript" src="${contextPath}/plugins/bootstrap-datetime/js/moment-with-locales.js"></script>
<script type="text/javascript" src="${contextPath}/plugins/bootstrap-datetime/js/bootstrap-datetimepicker.min.js"></script>
<script type="text/javascript" src="${contextPath}/plugins/bootstrap-datetime/js/bootstrap-datetimepicker.zh-CN.js"></script>
<script type="text/javascript" src="${contextPath}/js/modifyPwd.js"></script>
<input type="hidden" id="ajax_url" value="${ajax_url}" />
</body>

</html>
