
$(document).ready(function () {
    init();
});

function init() {
    var data = window.parent.data;
    if (data.length <5){
        var cnt = 5;
        var persent = 80;
        for (var i=0; i<5 - data.length; i++){
            var id = "div" + cnt;
            $("#" + id).hide();
            cnt--;
            persent-=20;
        }
        $("body .progress_inner__bar--set").css("width", persent+"%");
        for (var j=1; j<=cnt; j++){
            var textId = "div_text" + j;
            var divId = "div" + j;
            $("#" + divId + " label").html(data[j-1].bzmc);
            $("#" + textId + " h1").html(data[j-1].bzmc);
            $("#" + textId + " p").html(data[j-1].bzts);
        }
    //    寻找被选中的
        $.each(data, function (n, val) {
            if (val.now == 1) {
                var num = n + 1;
                var checkId = "step-" + num;
                $("#" + checkId).attr("checked", true);
            }
        });
    }else {
        $("body .progress_inner__bar--set").css("width", "80%");
        if (data.length > 5){
            var nowNum = 0;
            $.each(data, function (n, val) {
               if (val.now == 1) {
                   nowNum = n;
                   return;
               }
            });
            var start = 0;
            var end = data.length;
            if (nowNum < 3){
                start = 0;
                end = start + 5;
            } else if (nowNum > data.length - 3){
                start = data.length - 5;
                end = data.length;
            } else {
                start = nowNum - 2;
                end = nowNum + 3;
            }
            data = data.slice(start, end);
        }
        for (var j=1; j<=5; j++){
            var textId = "div_text" + j;
            var divId = "div" + j;
            $("#" + divId + " label").html(data[j-1].bzmc);
            $("#" + textId + " h1").html(data[j-1].bzmc);
            $("#" + textId + " p").html(data[j-1].bzts);
        }
        //    寻找被选中的
        $.each(data, function (n, val) {
            if (val.now == 1) {
                var num = n + 1;
                var checkId = "step-" + num;
                $("#" + checkId).attr("checked", true);
            }
        });
    }
}