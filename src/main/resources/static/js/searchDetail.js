  $(document).ready(function() {

});

function search() {
    var param = new Object();
    param["orderId"] = $("#orderId").val();
    param["cjbh"] = $("#cjbh").val();
    $.ajax({
        url: $("#ajax_url").val() + "/search",
        type: "post",
        cache: false,
        async: false,
        data : param,
        success: function (res) {

        }
    });
}