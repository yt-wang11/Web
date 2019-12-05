
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
            field : 'xh',
            title : '明细号'
        },{
            field : 'yzje',
            title : '预支金额'
        },{
            field : 'yzsj',
            title : '预支时间'
        },{
            field : 'delete',
            title : '删除记录',
            formatter : function (value, row, index) {
                var xh = "'" +  row.xh + "'";
                return [
                    '<button  type="button" class="btn btn-primary btn-xs" onclick="deleteOne('+ xh +')">删除</button>', ]
                    .join('');
            }
        }];
        $table.bootstrapTable({
            url: $("#ajax_url").val() + "/worker/showMess",
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
            grxm : $("#grxm").val()
        };
    };
    return oTableInit;
};

function deleteOne(xh) {
    layer.confirm('确认删除?', {icon: 3, title:'提示'}, function(index){
        var param = new Object();
        param["xh"] = xh;
        param["cjbh"] = $("#cjbh").val();
        $.ajax({
            url: $("#ajax_url").val() + "/worker/deleteOne",
            type: "get",
            cache: false,
            async: false,
            data : param,
            success: function (res) {
                layer.close(index);
                if (res == 'true'){
                    layer.alert("删除成功", {icon : 6});
                }else {
                    layer.alert("删除失败", {icon : 5});
                }
                $table.bootstrapTable("refresh");
            }
        });
    });
}