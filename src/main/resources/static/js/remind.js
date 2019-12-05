var $table = $("#remind_table");
var data = [];
$(document).ready(function () {
    var oTable = new TableInit();
    oTable.init();
});

var TableInit = function () {
    /*定义对象返回值*/
    var oTableInit = new Object();

    /*定义初始化方法*/
    oTableInit.init = function () {
        var columns = [{
            field : 'id',
            title : '员工号'
        },{
            field : 'name',
            title : '姓名'
        },{
            field : 'time',
            title : '合同期限'
        }];
        $table.bootstrapTable({
            url: $("#ajax_url").val() + "/staff/remind",
            columns: columns,
            method : 'get',
            striped: true,
            queryParams: oTableInit.queryParams,//传递参数（*）
            clickToSelect: true,//设置checkbox
            cache: false,
            sortable: true,                     //是否启用排序
            sortOrder: "asc",
            undefinedText: '-',
            pagination: true,
            sidePagination: "server",           //分页方式：client客户端分页，server服务端分页（*）
            pageNumber:1,                       //初始化加载第一页，默认第一页
            pageSize: 10,                       //每页的记录行数（*）
            pageList: [10, 25, 50, 100],
            uniqueId: "id",
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
            ids: $("#ids").val()
        };
    };

    return oTableInit;
};