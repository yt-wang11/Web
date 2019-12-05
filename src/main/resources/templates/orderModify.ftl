<!DOCTYPE html>
<html lang="en" >

<head>
    <meta charset="UTF-8">
    <title>订单修改</title>
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
            <div class="form-group">
                <label class="col-md-4 control-label">员工号</label>
                <div class="col-md-4 inputGroupContainer">
                    <div class="input-group">
                        <span class="input-group-addon"><i class="glyphicon glyphicon-pencil"></i></span>
                        <input id="Id" name="Id" value="${Id}" placeholder="员工号" class="form-control"  type="text">
                    </div>
                </div>
            </div>

            <div class="form-group">
                <label class="col-md-4 control-label">姓名</label>
                <div class="col-md-4 inputGroupContainer">
                    <div class="input-group">
                        <span class="input-group-addon"><i class="glyphicon glyphicon-pencil"></i></span>
                        <input id="Name" name="Name" value="${Name}" placeholder="姓名" class="form-control"  type="text">
                    </div>
                </div>
            </div>

            <div class="form-group">
                <label class="col-md-4 control-label">年龄</label>
                <div class="col-md-4 inputGroupContainer">
                    <div class="input-group">
                        <span class="input-group-addon"><i class="glyphicon glyphicon-pencil"></i></span>
                        <input id="Age" name="Age" value="${Age}"  placeholder="年龄" class="form-control"  type="text">
                    </div>
                </div>
            </div>

            <!-- Select Basic -->

            <div class="form-group" style="z-index:100;">
                <label class="col-md-4 control-label">性别</label>
                <div class="col-md-4 selectContainer">
                    <div class="input-group">
                        <span class="input-group-addon"><i class="glyphicon glyphicon-list"></i></span>
                        <select id="Sex" name="Sex" class="form-control">
                            <option value='男' selected>男</option>
                            <option value='女'>女</option>
                        </select>
                    </div>
                </div>
            </div>

            <div class="form-group">
                <label class="col-md-4 control-label">工作部门</label>
                <div class="col-md-4 inputGroupContainer">
                    <div class="input-group">
                        <span class="input-group-addon"><i class="glyphicon glyphicon-pencil"></i></span>
                        <input id="Workdepartment" name="Workdepartment" value="${Workdepartment}"  placeholder="工作部门" class="form-control"  type="text">
                    </div>
                </div>
            </div>

            <div class="form-group">
                <label class="col-md-4 control-label">身份证号</label>
                <div class="col-md-4 inputGroupContainer">
                    <div class="input-group">
                        <span class="input-group-addon"><i class="glyphicon glyphicon-pencil"></i></span>
                        <input id="Idcard" name="Idcard" value="${Idcard}"  placeholder="身份证号" class="form-control"  type="text">
                    </div>
                </div>
            </div>

            <div class="form-group" style="z-index:100;">
                <label class="col-md-4 control-label">学历</label>
                <div class="col-md-4 selectContainer">
                    <div class="input-group">
                        <span class="input-group-addon"><i class="glyphicon glyphicon-list"></i></span>
                        <select id="Education" name="Education" class="form-control">
                            <option value='' selected>--请选择--</option>
                            <option value='本科'>本科</option>
                            <option value='硕士'>硕士</option>
                            <option value='博士'>博士</option>
                        </select>
                    </div>
                </div>
            </div>

            <div class="form-group">
                <label class="col-md-4 control-label">职称</label>
                <div class="col-md-4 inputGroupContainer">
                    <div class="input-group">
                        <span class="input-group-addon"><i class="glyphicon glyphicon-pencil"></i></span>
                        <input id="Title" name="Title" value="${Title}"  placeholder="职称" class="form-control"  type="text">
                    </div>
                </div>
            </div>

            <div class="form-group">
                <label class="col-md-4 control-label" >入职时间</label>
                <div class="col-md-4 inputGroupContainer">
                <#--<div class="input-group">-->
                <#--<span class="input-group-addon"><i class="glyphicon glyphicon-envelope"></i></span>-->
                <#--<input name="last_name" placeholder="Last Name" class="form-control"  type="text">-->
                    <a class='input-group date' id='datetimepicker1' >
                            <span class="input-group-addon" >
                                <i class="glyphicon glyphicon-calendar"></i>
                            </span>
                        <input name="Entrytime" placeholder="入职时间" type='text' class="form-control" id='nowdate'/>
                    </a>
                <#--</div>-->
                </div>
            </div>

            <div class="form-group">
                <label class="col-md-4 control-label">合同年限</label>
                <div class="col-md-4 inputGroupContainer">
                    <div class="input-group">
                        <span class="input-group-addon"><i class="glyphicon glyphicon-pencil"></i></span>
                        <input id="Contractlife" name="Contractlife" value="${Contractlife}"  placeholder="合同年限" class="form-control"  type="text">
                    </div>
                </div>
            </div>

            <div class="form-group">
                <label class="col-md-4 control-label">工作变动</label>
                <div class="col-md-4 inputGroupContainer">
                    <div class="input-group">
                        <span class="input-group-addon"><i class="glyphicon glyphicon-pencil"></i></span>
                        <textarea id="Workchangerecord" name="Workchangerecord"  placeholder="工作变动" class="form-control"  type="text">${Workchangerecord}</textarea>
                    </div>
                </div>
            </div>

            <div class="form-group">
                <label class="col-md-4 control-label">奖惩记录</label>
                <div class="col-md-4 inputGroupContainer">
                    <div class="input-group">
                        <span class="input-group-addon"><i class="glyphicon glyphicon-pencil"></i></span>
                        <textarea id="Rewardsandpunishmentrecords" name="Rewardsandpunishmentrecords" placeholder="奖惩记录" class="form-control"  type="text">${Rewardsandpunishmentrecords}</textarea>
                    </div>
                </div>
            </div>

            <div class="form-group">
                <label class="col-md-4 control-label">职级评定记录</label>
                <div class="col-md-4 inputGroupContainer">
                    <div class="input-group">
                        <span class="input-group-addon"><i class="glyphicon glyphicon-pencil"></i></span>
                        <textarea id="Rankevaluationrecord" name="Rankevaluationrecord" placeholder="职级评定记录" class="form-control"  type="text">${Rankevaluationrecord}</textarea>
                    </div>
                </div>
            </div>

            <!-- Button -->
            <div class="form-group">
                <label class="col-md-4 control-label"></label>
                <div class="col-md-4">
                    <button id="submitBtn" type="button" class="btn btn-success" >修改 <span class="glyphicon glyphicon-send"></span></button>
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
<script type="text/javascript" src="${contextPath}/js/orderModify.js"></script>
<input type="hidden" id="ajax_url" value="${ajax_url}" />
<input type="hidden" id="SexTmp" value="${Sex}" />
<input type="hidden" id="EducationTmp" value="${Education}" />
<input type="hidden" id="EntrytimeTmp" value="${Entrytime}" />
<input type="hidden" id="showType" value="${showType}" />
</body>

</html>
