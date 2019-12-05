<!DOCTYPE html>
<html lang="en" >

<head>
    <meta charset="UTF-8">
    <title>订单打印</title>
    <#assign contextPath=request.contextPath>
    <link rel='stylesheet prefetch' href='${contextPath}/plugins/bootstrap-validator/css/bootstrap.min.css'>
    <link href="${contextPath}/css/print.css" rel="stylesheet" type="text/css"/>


</head>

<body>

<div class="modal" id="detailModal" style="display:none">
    <div class="modal-dialog fingerclass">
        <div class="modal-body fingerbodyclass">
            <div class="fingerbox">
                <div class="detailContent print">
                    <img id="imgCode"/>
                </div>

                <div class="btnContainer">
                    <div class="btnBack btnCommon">
                        <span>返回</span>
                    </div>
                    <div class="btnPrint btnCommon">
                        <span>打印</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<script src='${contextPath}/plugins/bootstrap-validator/js/jquery.min.js'></script>
<script src='${contextPath}/plugins/bootstrap-validator/js/bootstrap.min.js'></script>
<script type="text/javascript" src="${contextPath}/plugins/layer/layer.js"></script>
<script type="text/javascript" src="${contextPath}/js/JsBarcode.all.js"></script>
<input type="hidden" id="ajax_url" value="${ajax_url}" />
<input type="hidden" value="${code}" id="codeMsg">
<script>
    $(function () {
        init();
    });

    $('body').on('click','.btnBack',function () {          // 返回
        $('.modal').hide();
        $('#codeMsg').val("");
        var index = parent.layer.getFrameIndex(window.name);
        parent.layer.close(index);
    }).on('click','.btnPrint',function () {
        var index1 = parent.layer.getFrameIndex(window.name);
        parent.layer.close(index1);
        // 打印
        window.print();
    })


    function init(){
        var codeText = $('#codeMsg').val();
        if(codeText.trim() == ''){
            return;
        }
        var barcode = document.getElementById('imgCode'),
                options = {
                    format:"code39",
                    displayValue:true,
                    fontSize:18,
                    height:100,
                    // background:"#eee",//设置条形码的背景
                };
        JsBarcode(barcode, codeText, options);//原生

        $('.modal').show();

    }
</script>
</body>

</html>
