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
            bzjb: {
                validators: {
                    notEmpty: {
                        message: '请输入步骤级别'
                    },
                    regexp: {/* 只需加此键值对，包含正则表达式，和提示 */
                        regexp: /^[A-Z]+$/,
                        message: '步骤级别只能是大写字母'
                    },
                    stringLength: {
                        max: 1,
                        message: '只能输入一位大写字母'
                    },
                    remote: {
                        url: $("#ajax_url").val() + "/flow/exist",//验证地址
                        message: '步骤级别已存在',//提示消息
                        delay: 500,
                        type: 'POST',//请求方式
                        data: function() {
                            return {
                                cjbh: $("#cjbh").val(),
                                bzjb: $("#bzjb").val()
                            };
                        }
                    }
                }
            },
            bzmc: {
                validators: {
                    stringLength: {
                        min: 2,
                        message: '输入长度过小'
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
                url: $("#ajax_url").val() + "/flow/insert",
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