  $(document).ready(function() {
      formInit();
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
            /*验证：规则*/
            old: {
                validators: {
                    notEmpty: {
                        message: '用户旧密码不能为空'
                    },
                    regexp: {
                        regexp: /^[^ ]+$/,
                        message: '用户旧密码不能有空格'
                    },
                    remote: {
                        url: $("#ajax_url").val() + "/account/validate1",//验证地址
                        message: '原密码不正确',//提示消息
                        delay: 500,
                        type: 'POST',//请求方式
                        data: function() {
                            return {
                                username: $("#cjbh").val(),
                                password: $("#old").val()
                            };
                        }
                    }
                }
            },
            newPwd: {
                validators: {
                    notEmpty: {
                        message: '用户新密码不能为空'
                    },
                    stringLength: {
                        min: 6,
                        max: 20,
                        message: '用户新密码长度大于6小于20'
                    },
                    regexp: {
                        regexp: /^[^ ]+$/,
                        message: '用户新密码不能有空格'
                    }

                }
            },
            confirmNew: {
                validators: {
                    identical: {
                        field: 'newPwd',
                        message: '用户新密码与确认密码不一致！'
                    },
                    notEmpty: {
                        message: '用户确认密码不能为空'
                    },
                    stringLength: {
                        min: 6,
                        max: 20,
                        message: '用户确认密码长度大于6小于20'
                    },

                    regexp: {
                        regexp: /^[^ ]+$/,
                        message: '用户确认密码不能有空格'
                    }
                }
            }
        }
    }).on('error.validator.bv', function (e, data) {//这个方法是让错误信息只显示最新的一个（有时会出现多个错误信息同时显示用这个方法解决）
            data.element
                .data('bv.messages')
                // Hide all the messages
                .find('.help-block[data-bv-for="' + data.field + '"]').hide()
            // Show only message associated with current validator
                .filter('[data-bv-validator="' + data.validator + '"]').show();
        });

    $("#submitBtn").click(function () {//非submit按钮点击后进行验证，如果是submit则无需此句直接验证

        $("#contact_form").bootstrapValidator('validate');
        var $form = $("#contact_form");
        if($("#contact_form").data("bootstrapValidator").isValid()){
            $.ajax({
                url: $("#ajax_url").val() + "/account/modify",
                type: "post",
                cache: false,
                async: false,
                data : $form.serialize(),
                success: function (res) {
                    parent.layer.closeAll();
                    window.parent.location.href ="/loginOut";
                }
            });
        }

    });

}