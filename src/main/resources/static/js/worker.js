
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
            field : 'grxm',
            title : '工人姓名'
        },{
            field : 'lxfs',
            title : '联系方式'
        },{
            field : 'yzje',
            title : '预支总额'
        },{
            field : 'yzsj',
            title : '下单时间',
            visible : false
        },{
            field : 'xh',
            title : '订单表序号',
            visible : false
        }];
        $table.bootstrapTable({
            url: $("#ajax_url").val() + "/worker/list",
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
            uniqueId: "grxm",
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
            var names = '';
            $.each($("#b_table tbody input:checkbox:checked"), function (value) {
                names += "'";
                names += $(this).parent().parent().find("td").eq(1).text();
                names += "',";
            });
            var param = new Object();
            param["names"] = names;
            param["cjbh"] = $("#cjbh").val();
            $.ajax({
                url: $("#ajax_url").val() + "/worker/delete",
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

function workerAdd() {
    var path = $("#contextPath").val() + "/workeradd";
    var title = "新增工人";
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

function showMessage() {
    var $chenked = $("#b_table tbody input:checkbox:checked");
    if ($chenked.length === 0){
        layer.alert("请选择一位", {icons : 5});
    }else if($chenked.length > 1) {
        layer.alert("只能选择一条查看", {icons : 5});
    }else {
        var name = $chenked.parent().parent().find('td').eq(1).text();
        var param = new Object();
        param["name"] = name;
        var path = $("#contextPath").val() + "/workerDetail?cjbh=" + $("#cjbh").val() + "&grxm=" + name;
        var title = "查看明细";
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
}

function advance() {
    var $chenked = $("#b_table tbody input:checkbox:checked");
    if ($chenked.length === 0){
        layer.alert("请选择工人", {icons : 5});
    }else if($chenked.length > 1) {
        layer.alert("只能选择一位工人", {icons : 5});
    }else {
        var xh = $("#b_table tbody input:checkbox:checked").parent().find(":hidden").val();
        var param = {};
        param["xh"] = xh;
        $.ajax({
            url: $("#ajax_url").val() + "/worker/advance",
            type: "post",
            cache: false,
            async: false,
            data : param,
            success: function (res) {
                var path = $("#contextPath").val() + "/worker_advance?grxm=" + res.grxm + "&lxfs="+ res.lxfs ;
                var title = "预支金额";
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

function calc() {
    var $chenked = $("#b_table tbody input:checkbox:checked");
    if ($chenked.length === 0){
        layer.alert("请选择工人", {icons : 5});
    }else if($chenked.length > 1) {
        layer.alert("只能选择一位工人", {icons : 5});
    }else {
        layer.confirm('确认结算?', {icon: 3, title:'提示'}, function(index){
            var name = $("#b_table tbody input:checkbox:checked").parent().parent().find("td").eq(1).text();
            var param = {};
            param["grxm"] = name;
            param["cjbh"] = $("#cjbh").val();
            $.ajax({
                url: $("#ajax_url").val() + "/worker/calc",
                type: "post",
                cache: false,
                async: false,
                data : param,
                success: function (res) {
                    layer.close(index);
                    if (res == 'success') {
                        layer.alert("结算成功", {icons : 6});
                        $table.bootstrapTable("refresh");
                    }else {
                        layer.alert("结算失败", {icons : 5});
                        $table.bootstrapTable("refresh");
                    }
                }
            });
        });
    }
}
