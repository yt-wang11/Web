  $(document).ready(function() {
      // initSelect();
      formInit();
      Datetime();
});

function formInit() {
    $('#contact_form').bootstrapValidator({
        // To use feedback icons, ensure that you use Bootstrap v3.1.0 or later
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            Id: {
                // threshold :  6,
                validators: {
                    notEmpty: {
                        message: '请输入员工号'
                    },
                    /*remote: {
                        url: $("#ajax_url").val() + "/order/exist",//验证地址
                        message: '订单号已存在',//提示消息
                        delay: 500,
                        type: 'POST',//请求方式
                        data: function() {
                            return {
                                cjbh: $("#cjbh").val(),
                                ddh: $("#ddh").val()
                            };
                        }
                    }*/
                }
            },
            Name: {
                validators: {
                    notEmpty: {
                        message: '请输入员工姓名'
                    }
                }
            }
        }
    });
    $("#submitBtn").click(function () {//非submit按钮点击后进行验证，如果是submit则无需此句直接验证
        if($("#contact_form").data("bootstrapValidator").isValid()){
            var $form = $("#contact_form");
            $.ajax({
                url: $("#ajax_url").val() + "/staff/insert",
                type: "post",
                cache: false,
                async: false,
                data : $form.serialize(),
                success: function (res) {
                    // var order_id = $("#ddh").val();
                    $('#contact_form').bootstrapValidator('resetForm', true);
                    //alert($("#khbh").val());
                    // initSelect();
                    if (res == 'success'){
                        layer.msg('新增成功...', {icon : 6}, function (index) {
                            layer.close(index);
                            var index1 = parent.layer.getFrameIndex(window.name); //获取窗口索引
                            parent.layer.close(index1);
                            parent.location.reload();
                        });
                    }else {
                        layer.alert('新增失败...', {icon : 5}, function () {
                            layer.close(index);
                            parent.location.reload();
                            var index1 = parent.layer.getFrameIndex(window.name);
                            parent.layer.close(index1);
                        });
                    }
                }
            });
        }

    });

}

function initSelect() {
    //初始化客户列表
    var param = new Object();
    param["cjbh"] = $("#cjbh").val();
    $.ajax({
        url: $("#ajax_url").val() + "/client/list",
        type: "post",
        cache: false,
        async: false,
        data : param,
        success: function (res) {
            var str = '<option value="" selected >请选择客户</option>';
            $.each(res, function (n, val) {
                var mess = '<option value="'+ val.xh +'" >'+ val.khmc +'</option>';
                str += mess;
            });
            $("#khbh").empty();
            $("#khbh").html(str);
            $(".selectpicker").selectpicker({
                noneSelectedText : '请选择'
            });
            $('.selectpicker').selectpicker('val', '');
            $('.selectpicker').selectpicker('refresh');
        }
    });

    $.ajax({
        url: $("#ajax_url").val() + "/flow/list",
        type: "post",
        cache: false,
        async: false,
        data : param,
        success: function (res) {
            var cnt = 1;
            var str = '<option value="" >请选择对应的步骤</option>';
            $.each(res, function (n, val) {
                if (cnt === 1){
                    var mess = '<option selected value="'+ val.bzjb +'" >'+ val.bzmc +'</option>';
                    str += mess;
                } else {
                    var mess = '<option value="'+ val.bzjb +'" >'+ val.bzmc +'</option>';
                    str += mess;
                }
                cnt ++;
            });
            $("#bzjb").empty();
            $("#bzjb").html(str);
        }
    });
/*    $('.selectpicker').selectpicker({
        'selectedText': 'cat'
    });*/
}

  //设置日期时间控件
  function Datetime() {
      $('#datetimepicker1').datetimepicker({
          language: 'zh-CN',//显示中文
          format: 'yyyy-mm-dd',//显示格式
          minView: "month",//设置只显示到月份
          initialDate: new Date(),
          autoclose: true,//选中自动关闭
          todayBtn: true,//显示今日按钮
          locale: moment.locale('zh-cn')
      });
      //默认获取当前日期
      var today = new Date();
      var nowdate = (today.getFullYear()) + "-" + (today.getMonth() + 1) + "-" + today.getDate();
      //对日期格式进行处理
      var date = new Date(nowdate);
      var mon = date.getMonth() + 1;
      var day = date.getDate();
      var mydate = date.getFullYear() + "-" + (mon < 10 ? "0" + mon : mon) + "-" + (day < 10 ? "0" + day : day);
      document.getElementById("nowdate").value = mydate;
  }

  function submitForm() {
      var $form = $("#contact_form");
      $.ajax({
          url: $("#ajax_url").val() + "/order/insert",
          type: "post",
          cache: false,
          async: false,
          data : $form.serialize(),
          success: function (res) {
              if (res == 'success'){
                  layer.alert('新增成功', {icon : 6});
              }else {
                  layer.alert('新增失败', {icon : 6});
              }
          }
      });
  }
