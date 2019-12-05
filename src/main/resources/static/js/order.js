
var $table = $("#order_table");
var data = [];
$(document).ready(function () {
    //alert($("#ajax_url").val());
    //test();
    var oTable = new TableInit();
    oTable.init();
});

var TableInit = function () {
    /*定义对象返回值*/
    var oTableInit = new Object();

    /*定义初始化方法*/
    oTableInit.init = function () {
        var columns = [{
            checkbox : true
        },{
            field : 'id',
            title : '员工号'
        },{
            field : 'name',
            title : '姓名'
        },{
            field : 'age',
            title : '年龄'
        },{
            field : 'idcard',
            title : '身份证号'
        },{
            field : 'entrytime',
            title : '入职时间'
        }];
        $table.bootstrapTable({
            url: $("#ajax_url").val() + "/staff/list",
            columns: columns,
            method : 'get',
            striped: true,
            queryParams: oTableInit.queryParams,//传递参数（*）
            clickToSelect: true,//设置checkbox
            cache: false,
            sortable: false,                     //是否启用排序
            sortOrder: "asc",
            undefinedText: '-',
            pagination: true,
            sidePagination: "server",           //分页方式：client客户端分页，server服务端分页（*）
            pageNumber:1,                       //初始化加载第一页，默认第一页
            pageSize: 10,                       //每页的记录行数（*）
            pageList: [10, 25, 50, 100],
            uniqueId: "orderId",
            search : true,
            searchOnEnterKey: true,
            searchAlign: "right",
            showRefresh : true,
            toolbar: '#toolbar',
            toolbarAlign: 'left',
            responseHandler: function (res) {
                data = res.rows;
                return res;
            }
        });
    };
    oTableInit.queryParams = function (params) {
        return {
            limit: params.limit,   //页面大小
            offset: params.offset,  //页码
            search: params.search, //搜索
        };
    };
    return oTableInit;
};


function deleteByXh() {
    if ($("#order_table tbody input:checkbox:checked").length === 0){
        layer.alert("请选择需要删除的内容", {icons : 5});
    }else {
        layer.confirm('确认删除?', {icon: 3, title:'提示'}, function(index){
            var xhs = '';
            $.each($("#order_table tbody input:checkbox:checked"), function (value) {
                xhs += data[$(this).parent().parent().index()].id;
                xhs += ",";
            });
            var param = new Object();
            param["ids"] = xhs;
            $.ajax({
                url: $("#ajax_url").val() + "/staff/delete",
                type: "get",
                cache: false,
                async: false,
                data : param,
                success: function (res) {
                    if (res == 'true'){
                        layer.alert("删除成功", {icon : 6});
                    }else {
                        layer.alert("删除失败", {icon : 5});
                    }
                    $table.bootstrapTable("refresh");
                }
            });
            layer.close(index);
        });
    }

}

function addOrder() {
    var path = $("#contextPath").val() + "/orderadd";
    var title = "新增员工信息";
    layer.open({
        type: 2,
        title:title,
        fix: false,
        shadeClose:false,
        maxmin:false,
        area: ['800px','600px'],
        content:path
    });
}

function orderModify() {
    var $chenked = $("#order_table tbody input:checkbox:checked");
    if ($chenked.length === 0){
        layer.alert("请选择需要修改的内容", {icons : 5});
    }else if($chenked.length > 1) {
        layer.alert("只能选择一条进行修改", {icons : 5});
    }else {
        var xh = data[$chenked.parent().parent().index()].id;
        var param = new Object();
        param["id"] = xh;
        $.ajax({
            url: $("#ajax_url").val() + "/staff/show",
            type: "post",
            cache: false,
            async: false,
            data : param,
            success: function (res) {
                var path = $("#contextPath").val() + "/orderModify?Id=" + res.Id + "&Name=" + res.Name +
                    "&Age="+ res.Age +"&Sex="+ res.Sex + "&Workdepartment=" + res.Workdepartment +
                    "&Idcard="+ res.Idcard +"&Education="+ res.Education + "&Title=" + res.Title +
                    "&Entrytime="+ res.Entrytime +"&Contractlife="+ res.Contractlife + "&Workchangerecord=" + res.Workchangerecord +
                    "&Rewardsandpunishmentrecords="+ res.Rewardsandpunishmentrecords +"&Rankevaluationrecord="+ res.Rankevaluationrecord
                + "&type=" + 0;
                var title = "修改员工信息";
                layer.open({
                    type: 2,
                    title:title,
                    fix: false,
                    shadeClose:false,
                    maxmin:false,
                    area: ['800px','600px'],
                    content:path
                });
            }
        });
    }

}

function show() {
    var $chenked = $("#order_table tbody input:checkbox:checked");
    if ($chenked.length === 0){
        layer.alert("请选择需要查看的员工", {icons : 5});
    }else if($chenked.length > 1) {
        layer.alert("只能选择一条进行查看", {icons : 5});
    }else {
        var xh = data[$chenked.parent().parent().index()].id;
        var param = new Object();
        param["id"] = xh;
        $.ajax({
            url: $("#ajax_url").val() + "/staff/show",
            type: "post",
            cache: false,
            async: false,
            data : param,
            success: function (res) {
                var path = $("#contextPath").val() + "/orderModify?Id=" + res.Id + "&Name=" + res.Name +
                    "&Age="+ res.Age +"&Sex="+ res.Sex + "&Workdepartment=" + res.Workdepartment +
                    "&Idcard="+ res.Idcard +"&Education="+ res.Education + "&Title=" + res.Title +
                    "&Entrytime="+ res.Entrytime +"&Contractlife="+ res.Contractlife + "&Workchangerecord=" + res.Workchangerecord +
                    "&Rewardsandpunishmentrecords="+ res.Rewardsandpunishmentrecords +"&Rankevaluationrecord="+ res.Rankevaluationrecord
                    + "&type=" + 1;
                var title = "查看员工信息";
                layer.open({
                    type: 2,
                    title:title,
                    fix: false,
                    shadeClose:false,
                    maxmin:false,
                    area: ['800px','600px'],
                    content:path
                });
            }
        });
    }

}

function printOrder() {
    if ($("#order_table tbody input:checkbox:checked").length === 0){
        layer.alert("请选择需要打印的内容", {icons : 5});
    }else if($("#order_table tbody input:checkbox:checked").length > 1){
        layer.alert("只能选择一个订单进行打印", {icons : 5});
    }else {
        var code = $("#order_table tbody input:checkbox:checked").parent().parent().find("td").eq(1).text();
        var path = $("#contextPath").val() + "/print?code=" + code ;
        var title = "打印订单";
        layer.open({
            type: 2,
            title:title,
            fix: false,
            shadeClose:false,
            maxmin:false,
            area: ['600px','400px'],
            content:path
        });
    }

}

function print_ord(code) {
    layer.closeAll();
    var path =  "/print?code=" + code ;
    var title = "打印订单";
    layer.open({
        type: 2,
        title:title,
        fix: false,
        shadeClose:false,
        maxmin:false,
        area: ['600px','400px'],
        content:path
    });
}

