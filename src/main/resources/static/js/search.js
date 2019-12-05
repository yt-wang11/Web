
var data;
$(document).ready(function() {

});

function search() {
    var param = new Object();
    param["orderId"] = $("#orderId").val();
    param["cjbh"] = $("#cjbh").val();
    // alert($("#cjbh").val());
    // alert($("#orderId").val());
    $.ajax({
        url: $("#ajax_url").val() + "/search",
        type: "post",
        cache: false,
        async: false,
        data : param,
        success: function (res) {
           // alert(res);
            if (res.length > 0){
                var path = $("#contextPath").val() + "/searchDetail";
                data = res;
                var title = "订单查询,订单号为：" + $("#orderId").val();
                layer.open({
                    type: 2,
                    title:title,
                    fix: false,
                    shadeClose:false,
                    maxmin:false,
                    area: ['800px','460px'],
                    content:path
                });
            } else {
                layer.alert('查询订单号不存在', {icon : 5});
            }
        }
    });
}