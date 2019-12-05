<!DOCTYPE html>
<html lang="en" >

<head>
    <meta charset="UTF-8">
    <title>新增客户</title>
    <link rel='stylesheet prefetch' href='${contextPath}/plugins/bootstrap-validator/css/bootstrap.min.css'>
    <link rel='stylesheet prefetch' href='${contextPath}/plugins/bootstrap-validator/css/bootstrap-theme.min.css'>
    <link rel='stylesheet prefetch' href='${contextPath}/plugins/bootstrap-validator/css/bootstrapValidator.min.css'>
    <link rel="stylesheet" href="${contextPath}/plugins/bootstrap-validator/css/bootstrap-select.min.css">
    <link href="${contextPath}/plugins/bootstrap-select/css/bootstrap-select.css" rel="stylesheet" type="text/css"/>
    <link href="${contextPath}/plugins/bootstrap-datetime/css/bootstrap-datetimepicker.min.css" rel="stylesheet" />
    <link href="${contextPath}/css/orderadd.css" rel="stylesheet" type="text/css"/>


</head>

<body>

<div class="container">

    <form class="well form-horizontal" action=" " method="post"  id="contact_form">
        <fieldset>
            <input type="hidden" name="cjbh" id="cjbh" value="${cjbh}" />
            <!-- Form Name -->
            <#--<legend>新增客户</legend>-->

            <div class="form-group">
                <label class="col-md-4 control-label">客户名称</label>
                <div class="col-md-4 inputGroupContainer">
                    <div class="input-group">
                        <span class="input-group-addon"><i class="glyphicon glyphicon-pencil"></i></span>
                        <input id="khmc" name="khmc" placeholder="客户名称" class="form-control"  type="text">
                    </div>
                </div>
            </div>

            <!-- Select Basic -->

            <div class="form-group">
                <label class="col-md-4 control-label">客户地址</label>
                <div class="col-md-4 inputGroupContainer">
                    <div class="input-group">
                        <span class="input-group-addon"><i class="glyphicon glyphicon-pencil"></i></span>
                        <input id="khdz" name="khdz" placeholder="客户地址" class="form-control"  type="text">
                    </div>
                </div>
            </div>

            <!-- Select Basic -->

            <div class="form-group">
                <label class="col-md-4 control-label">联系方式</label>
                <div class="col-md-4 inputGroupContainer">
                    <div class="input-group">
                        <span class="input-group-addon"><i class="glyphicon glyphicon-pencil"></i></span>
                        <input id="lxfs" name="lxfs" placeholder="联系方式" class="form-control"  type="text">
                    </div>
                </div>
            </div>

            <!-- Text input-->

            <div class="form-group">
                <label class="col-md-4 control-label" >合作时间</label>
                <div class="col-md-4 inputGroupContainer">
                        <a class='input-group date' id='datetimepicker1' >
                            <span class="input-group-addon" >
                                <i class="glyphicon glyphicon-calendar"></i>
                            </span>
                            <input name="hzsj" placeholder="请输入日期" type='text' class="form-control" id='nowdate'/>
                        </a>
                </div>
            </div>


            <!-- Success message -->
            <div class="alert alert-success" role="alert" id="success_message">Success <i class="glyphicon glyphicon-thumbs-up"></i> Thanks for contacting us, we will get back to you shortly.</div>

            <!-- Button -->
            <div class="form-group">
                <label class="col-md-4 control-label"></label>
                <div class="col-md-4">
                    <button id="submitBtn" type="button" class="btn btn-success" >新增 <span class="glyphicon glyphicon-send"></span></button>
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
<script type="text/javascript" src="${contextPath}/js/clientadd.js"></script>
<input type="hidden" id="ajax_url" value="${ajax_url}" />
</body>

</html>
