
var $table = $("#b_table");
var data = [];
$(document).ready(function () {
    //alert($("#ajax_url").val());
    //test();
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
            checkbox : true,
            formatter : function (value, row, index) {
                var xh =  row.xh;
                return [
                    '<input  type="hidden" value="'+ xh +'" >']
                    .join('');
            }
        },{
            field : 'xh',
            title : '序号'
        },{
            field : 'khmc',
            title : '客户姓名'
        },{
            field : 'khdz',
            title : '客户地址'
        },{
            field : 'lxfs',
            title : '联系方式'
        },{
            field : 'hzsj',
            title : '合作时间'
        }];
        $table.bootstrapTable({
            url: $("#ajax_url").val() + "/client/allList",
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
                xhs += $(this).parent().find(":hidden").val();
                xhs += ",";
            });
            // alert(xhs);
            var param = new Object();
            param["xhs"] = xhs;
            $.ajax({
                url: $("#ajax_url").val() + "/client/delete",
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
    var path = $("#contextPath").val() + "/clientadd";
    var title = "新增客户";
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

function orderModify() {
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
            url: $("#ajax_url").val() + "/client/show",
            type: "post",
            cache: false,
            async: false,
            data : param,
            success: function (res) {
                var path = $("#contextPath").val() + "/clientModify?khmc=" + res.khmc + "&khdz=" + res.khdz + "&lxfs="+ res.lxfs +"&hzsj="+ res.hzsj + "&xh=" + res.xh;
                var title = "修改客户";
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

function showOrder() {
    var $chenked = $("#b_table tbody input:checkbox:checked");
    if ($chenked.length === 0){
        layer.alert("请选择一位", {icons : 5});
    }else if($chenked.length > 1) {
        layer.alert("只能选择一条查看", {icons : 5});
    }else {
        var name = $chenked.parent().children().eq(1).val();
        var param = new Object();
        param["name"] = name;
        // alert(name);
        // alert( $("#cjbh").val());
        var path = $("#contextPath").val() + "/clientDetail?cjbh=" + $("#cjbh").val() + "&khbh=" + name;
        var title = "查看合作订单";
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
