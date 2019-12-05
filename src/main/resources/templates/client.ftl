<!DOCTYPE html>
<html>
<head lang="en">
<#assign contextPath=request.contextPath>
<link href="${contextPath}/plugins/bootstrap/css/bootstrap.min.css" rel="stylesheet" type="text/css"/>
<link href="${contextPath}/plugins/bootstrap-table/bootstrap-table.min.css" rel="stylesheet" type="text/css"/>
    <style>
        .table th, .table td {
            text-align: center;
            vertical-align: middle!important;
        }
    </style>
</head>
<body>
<div class="panel-body" style="padding-bottom:0px;">
    <div id="toolbar">
        <button id="btn_add" type="button" class="btn btn-default" onclick="workerAdd()">
            <span class="glyphicon glyphicon-plus" aria-hidden="true"></span>新增
        </button>
        <button id="btn_edit" type="button" class="btn btn-default" onclick="orderModify()">
            <span class="glyphicon glyphicon-pencil" aria-hidden="true"></span>修改
        </button>
        <button id="btn_delete" type="button" class="btn btn-default" onclick="deleteByXh()">
            <span class="glyphicon glyphicon-remove" aria-hidden="true"></span>删除
        </button>
        <button id="btn_delete" type="button" class="btn btn-default" onclick="showOrder()">
            <span class="glyphicon glyphicon-indent-left" aria-hidden="true"></span>合作订单
        </button>
    </div>
    <table id="b_table" class="text-center"></table>
</div>
</body>


<input type="hidden" id="ajax_url" value="${ajax_url}" />
<input type="hidden" id="cjbh" value="${cjbh}" />
<input type="hidden" id="contextPath" value="${contextPath}" />
<script type="text/javascript" src="${contextPath}/plugins/jquery.min.js"></script>
<script src="${contextPath}/plugins/bootstrap/js/bootstrap.js" type="text/javascript"></script>
<script type="text/javascript"
        src="${contextPath}/plugins/bootstrap-table/bootstrap-table.min.js"></script>
<script type="text/javascript"
        src="${contextPath}/plugins/bootstrap-table/bootstrap-table-zh-CN.min.js"></script>
<script type="text/javascript" src="${contextPath}/plugins/layer/layer.js"></script>
<script type="text/javascript" src="${contextPath}/js/client.js"></script>
</html>
