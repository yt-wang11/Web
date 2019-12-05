<!DOCTYPE html>
<html lang="zh">
<head>
<#assign contextPath=request.contextPath>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>搜索界面</title>
    <link href="${contextPath}/plugins/bootstrap/css/bootstrap.min.css" rel="stylesheet" type="text/css"/>
    <link rel="stylesheet" href="${contextPath}/css/search.css"/>

</head>
<body>

<div id="top-image">
  <div id="content" class="container center-block">
    <div class="jumbotron">
      <div class="container">
          <div class="center-block">
              <h2 style="text-align: center;">${cjmc}订单查询</h2>
          </div>
          <div class="center-block" style="height: 20px">
              <#--<h2 style="text-align: center;">${cjmc}订单查询</h2>-->
          </div>

        <div class="input-group input-group-lg"> <span class="input-group-addon" id="sizing-addon1"><span class="glyphicon glyphicon-plus" aria-hidden="true"></span></span>
          <input type="text" id="orderId" class="form-control" placeholder="请输入订单号进行查询" aria-describedby="sizing-addon1"/>
          <span class="input-group-btn">
          <button id="btn" class="btn btn-default" type="button" onclick="search()">查 询</button>
          </span> </div>
      </div>
    </div>
  </div>
</div>
<input type="hidden" id="ajax_url" value="${ajax_url}" />
<input type="hidden" id="cjbh" value="${cjbh}" />
<input type="hidden" id="contextPath" value="${contextPath}" />
<script src="${contextPath}/plugins/jquery.min.js"></script>
<script type="text/javascript" src="${contextPath}/plugins/layer/layer.js"></script>
<script src="${contextPath}/js/search.js"></script>
<script type="text/javascript">
$(document).ready(function() {
    if (window.history && window.history.pushState) {
        history.pushState(null, null, document.URL);
        window.addEventListener('popstate', function (ev) {
            history.pushState(null, null, document.URL);
        });
    }
    $('#orderId').on('keypress',function(event){
        if(event.keyCode == 13) {
            $("#btn").trigger("click");
        }
    });
  // $('#top-image').iosParallax({
	// movementFactor: 50
  // });
});
</script>

</body>
</html>