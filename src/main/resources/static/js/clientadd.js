  $(document).ready(function() {
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
            khmc: {
                validators: {
                    notEmpty: {
                        message: '请输入客户名称'
                    }
                }
            },
            hzsj: {
                validators: {
                    stringLength: {
                        min: 2
                    },
                    notEmpty: {
                        message: '请输入日期'
                    }
                }
            },
            lxfs: {
                validators: {
                    notEmpty: {
                        message: '请输入联系方式'
                    },
                    stringlength:{
                        min:11,
                        max:11,
                        message:'请输入11位手机号码'
                    },
                    regexp:{
                        regexp: /^1[3|5|8]{1}[0-9]{9}$/,
                        message:'请输入正确的手机号码'
                    }
                }
            },
            khdz: {
                validators: {
                    notEmpty: {
                        message: '请输入客户地址'
                    }
                }
            }
        }
    });
    $("#submitBtn").click(function () {//非submit按钮点击后进行验证，如果是submit则无需此句直接验证

        $("#contact_form").bootstrapValidator('validate');
        var $form = $("#contact_form");
        if($("#contact_form").data("bootstrapValidator").isValid()){
            $.ajax({
                url: $("#ajax_url").val() + "/client/insert",
                type: "post",
                cache: false,
                async: false,
                data : $form.serialize(),
                success: function (res) {
                    $('#contact_form').bootstrapValidator('resetForm', true);
                    if (res == 'success'){
                        layer.alert('新增成功', {icon : 6}, function (index) {
                            layer.close(index);
                            parent.location.reload();
                            var index1 = parent.layer.getFrameIndex(window.name);
                            parent.layer.close(index1);
                        });
                    }else {
                        layer.alert('新增失败', {icon : 5}, function () {
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
      $('#contact_form').data('bootstrapValidator').resetForm();
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