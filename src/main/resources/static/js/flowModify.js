  $(document).ready(function() {
      formInit();
      Datetime();
      modifyDate();
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
            bzjb: {
                validators: {
                    notEmpty: {
                        message: '请输入步骤级别'
                    }
                }
            },
            bzmc: {
                validators: {
                    stringLength: {
                        min: 2
                    },
                    notEmpty: {
                        message: '请输入步骤名称'
                    }
                }
            },
            bzts: {
                validators: {
                    notEmpty: {
                        message: '请输入步骤提示'
                    },
                    stringlength:{
                        min:6,
                        message:'步骤提示长度过小'
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
                url: $("#ajax_url").val() + "/flow/update",
                type: "post",
                cache: false,
                async: false,
                data : $form.serialize(),
                success: function (res) {
                    $('#contact_form').bootstrapValidator('resetForm', true);
                    if (res == 'success'){
                        layer.alert('修改成功', {icon : 6}, function (index) {
                            layer.close(index);
                            parent.location.reload();
                            var index1 = parent.layer.getFrameIndex(window.name);
                            parent.layer.close(index1);
                        });
                    }else {
                        layer.alert('修改失败', {icon : 5}, function () {
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
