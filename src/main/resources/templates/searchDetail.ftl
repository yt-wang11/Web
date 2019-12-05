<!DOCTYPE html>
<html>
<head lang="en">
<#assign contextPath=request.contextPath>
<link href="${contextPath}/plugins/bootstrap/css/bootstrap.min.css" rel="stylesheet" type="text/css"/>
<link href="${contextPath}/plugins/flow/css/ystep.css" rel="stylesheet" type="text/css"/>
<link href="${contextPath}/css/step.css" rel="stylesheet" type="text/css"/>
    <style>
        #div_ystep1 {
            width: 80%;
            height:auto;
            position: absolute;
            top: 50%;
            left: 50%;
            -webkit-transform:translate(-50%,-50%);
        }
        .cenhh{
            margin:0 auto;
            width: 700px;
        }
    </style>
</head>
<body>
<#--<div id="div_ystep1"></div>-->
<div class='progress'>
    <div class='progress_inner'>
        <div id="div1" class='progress_inner__step'>
            <label for='step-1'>入场</label>
        </div>
        <div id="div2" class='progress_inner__step'>
            <label for='step-2'>第一次</label>
        </div>
        <div id="div3" class='progress_inner__step'>
            <label for='step-3'>第二次</label>
        </div>
        <div id="div4" class='progress_inner__step'>
            <label for='step-4'>第三次</label>
        </div>
        <div id="div5" class='progress_inner__step'>
            <label for='step-5'>出场</label>
        </div>
        <#--<div class='progress_inner__step'>-->
            <#--<label for='step-6'>出处处场</label>-->
        <#--</div>-->
        <input checked='checked' id='step-1' name='step' type='radio'>
        <input id='step-2' name='step' type='radio'>
        <input id='step-3' name='step' type='radio'>
        <input id='step-4' name='step' type='radio'>
        <input id='step-5' name='step' type='radio'>
        <#--<input id='step-6' name='step' type='radio'>-->
        <div class='progress_inner__bar'></div>
        <#--这个是进度条-->
        <div class='progress_inner__bar--set'></div>
        <#--这个是文本框-->
        <div class='progress_inner__tabs' id="divcss5">
            <div id="div_text1" class='tab tab-0 cenhh'>
                <h1>入场</h1>
                <p>这是第一次入场 还真是有点激动呢.</p>
            </div>
            <div id="div_text2" class='tab tab-1 cenhh'>
                <h1>第一次</h1>
                <p>这是第一次入场 还真是有点激动呢</p>
            </div>
            <div id="div_text3" class='tab tab-2 cenhh'>
                <h1>第二次</h1>
                <p>这是第一次入场 还真是有点激动呢</p>
            </div>
            <div id="div_text4" class='tab tab-3 cenhh'>
                <h1>第三次</h1>
                <p>这是第一次入场 还真是有点激动呢</p>
            </div>
            <div id="div_text5" class='tab tab-4 cenhh'>
                <h1>出场</h1>
                <p>这是第一次入场 还真是有点激动呢</p>
            </div>
        </div>
        <#--这个是上面的礼物-->
        <div class='progress_inner__status'>
            <div class='box_base'></div>
            <div class='box_lid'></div>
            <div class='box_ribbon'></div>
            <div class='box_bow'>
                <div class='box_bow__left'></div>
                <div class='box_bow__right'></div>
            </div>
            <div class='box_item'></div>
            <div class='box_tag'></div>
            <div class='box_string'></div>
        </div>
    </div>
</div>
</body>


<input type="hidden" id="ajax_url" value="${ajax_url}" />
<input type="hidden" id="cjbh" value="${cjbh}" />
<input type="hidden" id="res" value="${res}" />
<input type="hidden" id="contextPath" value="${contextPath}" />
<script type="text/javascript" src="${contextPath}/plugins/jquery.min.js"></script> <script type="text/javascript"
<script src="${contextPath}/plugins/bootstrap/js/bootstrap.js" type="text/javascript"></script>
<script type="text/javascript" src="${contextPath}/plugins/flow/js/ystep.js"></script>
<script type="text/javascript" src="${contextPath}/js/detail.js"></script>
</html>
