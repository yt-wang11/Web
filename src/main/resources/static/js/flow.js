
var $table = $("#b_table");
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
            checkbox : true,
            formatter : function (value, row, index) {
                var xh =  row.xh;
                return [
                    '<input  type="hidden" value="'+ xh +'" >']
                    .join('');
            }
        },{
            field : 'bzjb',
            title : '步骤级别'
        },{
            field : 'bzmc',
            title : '步骤名称'
        },{
            field : 'bzts',
            title : '步骤提示'
        }];
        $table.bootstrapTable({
            url: $("#ajax_url").val() + "/flow/list",
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
            sidePagination: "client",           //分页方式：client客户端分页，server服务端分页（*）
            pageNumber:1,                       //初始化加载第一页，默认第一页
            pageSize: 10,                       //每页的记录行数（*）
            pageList: [10, 25, 50, 100],
            search : true,
            searchOnEnterKey: true,
            searchAlign: "right",
            showRefresh : true,
            toolbar: '#toolbar',
            toolbarAlign: 'left'
        });
    };
    oTableInit.queryParams = function () {
        return {
            cjbh : $("#cjbh").val()
        };
    };
    return oTableInit;
};


function deleteByXh() {
    if ($("#b_table tbody input:checkbox:checked").length === 0){
        layer.alert("请选择需要删除的内容", {icons : 5});
    }else {
        layer.confirm('确认删除?', {icon: 3, title:'提示'}, function(index){
            var xhs = '';
            $.each($("#b_table tbody input:checkbox:checked"), function (value) {
                xhs += "'"
                xhs += $(this).parent().find(":hidden").val();
                xhs += "',";
            });
            var param = new Object();
            param["xhs"] = xhs;
            $.ajax({
                url: $("#ajax_url").val() + "/flow/delete",
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

function flowAdd() {
    var path = $("#contextPath").val() + "/flowadd";
    var title = "新增流程";
    layer.open({
        type: 2,
        title:title,
        fix: false,
        shadeClose:false,
        maxmin:false,
        area: ['600px','460px'],
        content:path
    });
}

function flowModify() {
    var $chenked = $("#b_table tbody input:checkbox:checked");
    if ($chenked.length === 0){
        layer.alert("请选择需要修改的内容", {icons : 5});
    }else if($chenked.length > 1) {
        layer.alert("只能选择一条进行修改", {icons : 5});
    }else {
        var xh = $("#b_table tbody input:checkbox:checked").parent().find(":hidden").val();
        var param = new Object();
        param["xh"] = xh;
        $.ajax({
            url: $("#ajax_url").val() + "/flow/show",
            type: "post",
            cache: false,
            async: false,
            data : param,
            success: function (res) {
                var path = $("#contextPath").val() + "/flowModify?bzjb=" + res.bzjb + "&bzmc=" + res.bzmc + "&bzts="+ res.bzts+ "&xh=" + res.xh;
                var title = "修改流程";
                layer.open({
                    type: 2,
                    title:title,
                    fix: false,
                    shadeClose:false,
                    maxmin:false,
                    area: ['600px','460px'],
                    content:path
                });
            }
        });
    }

}
