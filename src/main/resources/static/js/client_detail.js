
var $table = $("#b_table");
var data = [];
$(document).ready(function () {
    var oTable = new TableInit();
    oTable.init();
    $table.bootstrapTable('hideColumn', 'xh');
});

var TableInit = function () {
    /*定义对象返回值*/
    var oTableInit = new Object();

    /*定义初始化方法*/
    oTableInit.init = function () {
        var columns = [{
            field : 'orderId',
            title : '订单号'
        },{
            field : 'customerName',
            title : '客户名称'
        },{
            field : 'flowName',
            title : '当前步骤名称'
        },{
            field : 'orderTime',
            title : '下单时间'
        }];
        $table.bootstrapTable({
            url: $("#ajax_url").val() + "/client/showOrder",
            columns: columns,
            method : 'get',
            striped: true,
            queryParams: oTableInit.queryParams,//传递参数（*）
            cache: false,
            undefinedText: '-',
            pagination: true,
            sidePagination: "client",           //分页方式：client客户端分页，server服务端分页（*）
            pageNumber:1,                       //初始化加载第一页，默认第一页
            pageSize: 10,                       //每页的记录行数（*）
            pageList: [10, 25, 50, 100]
        });
    };
    oTableInit.queryParams = function () {
        return {
            cjbh : $("#cjbh").val(),
            khbh : $("#khbh").val()
        };
    };
    return oTableInit;
};
