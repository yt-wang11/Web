<!doctype html>
<html lang="zh">
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"> 
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
<title>开启服务</title>
    <link href="${contextPath}/css/service-default.css" rel="stylesheet" type="text/css"/>
    <link href="${contextPath}/css/service-search-form.css" rel="stylesheet" type="text/css"/>

</head>
<body>

<form onSubmit="submitFn(this, event);">
	<div class="search-wrapper">
		<div class="input-holder">
			<input type="text" id="searchInput" onblur="reForce()" oninput="changeTo()" class="search-input" placeholder="请输入订单号" />
			<button id="btn" class="search-icon" onClick="searchToggle(this, event);"><span></span></button>
		</div>
		<span class="close" onmouseout="clearFlag()" onmouseover="addFlag()" onClick="searchToggle(this, event);"></span>
		<div class="result-container">

		</div>
	</div>
</form>

<input type="hidden" id="ajax_url" value="${ajax_url}" />
<input type="hidden" id="open_flag" value="0" />
<input type="hidden" id="alert_flag" value="0" />
<input type="hidden" id="cjbh" value="${cjbh}" />
<input type="hidden" id="contextPath" value="${contextPath}" />
<script type="text/javascript" src="${contextPath}/plugins/jquery.min.js"></script>
<script type="text/javascript" src="${contextPath}/plugins/layer/layer.js"></script>
<script type="text/javascript">
    $(function () {

    });
</script>
<script type="text/javascript">
function searchToggle(obj, evt){
	var container = $(obj).closest('.search-wrapper');

	if(!container.hasClass('active')){
		  parent.layer.confirm('是否开启服务?', {title : '提示', icon : 3, btn : ['开启','取消']},function (index) {
		      parent.layer.close(index);
              container.addClass('active');
              evt.preventDefault();
              getForce();
          });
	} else if(container.hasClass('active') && $(obj).closest('.input-holder').length == 0){
          // $("#open_flag").val('0');
		  container.removeClass('active');
		  // clear input
		  container.find('.search-input').val('');
		  // clear and hide result container when we press close
		  container.find('.result-container').fadeOut(100, function(){$(this).empty();});
	}
}

function submitFn(obj, evt){
	var value = $(obj).find('.search-input').val().trim();

	var _html = "扫描枪扫描到的订单号： ";
	if(!value.length){
	    //订单号不能为空。
		_html = "";
	}
	else{
		_html += "<b>" + value + "</b>";
        var param = new Object();
        param["str"] = value;
        param["cjbh"] = $("#cjbh").val();
        $.ajax({
            url: $("#ajax_url").val() + "/service/begin",
            type: "post",
            cache: false,
            async: false,
            data : param,
            success: function () {
                $("#searchInput").val('');
            }
        });
	}

	$(obj).find('.result-container').html('<span>' + _html + '</span>');
	$(obj).find('.result-container').fadeIn(100);

	evt.preventDefault();
}
function addFlag() {
	// layer.alert($("#searchInput").val());
	//alert("关闭按钮");
    $("#open_flag").val('1');
}
function clearFlag() {
    $("#open_flag").val('0');
}
function changeTo() {
    var str = $("#searchInput").val();
    //alert(str);
    var num =str.charCodeAt(str.length - 1);
    if (num >= 65 && num <= 90){
        $("#btn").trigger("click");
    }
}

function toReForce() {
	setTimeout('reForce()', 1000);
}

function reForce() {
    if ($("#open_flag").val() !== '1'){
        //alert("请先关闭服务");
        /*var r = confirm("请先关闭服务");
        if (r === true) {
            $(".close").trigger("click");
		}else {
            //getForce();
            // setTimeout('getForce()',300);
		}*/
        parent.layer.confirm('请先关闭服务，点击进行关闭', {icon: 3, title:'提示',
            btn: ['关闭服务','取消']
        }, function (index) {
            $(".close").trigger("click");
            parent.layer.close(index);
        },function (index) {
            getForce();
            parent.layer.close(index);
        });

	}

}
function getForce() {
    $("#searchInput").focus();
}

</script>

</body>
</html>