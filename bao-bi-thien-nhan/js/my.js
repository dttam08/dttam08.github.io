function RessetForm(action) {
    $("form input").val("");
    $("form img").attr("src", "");
    $("form textarea").val("");
    $("form select").val("");
    $("form[name=myform]").attr("action", action);
}
function SubmitForm(obj) {
    var myForm = ($(obj).attr("id"));
    var url = $(obj).attr("action");
    $(".help-block").remove();
    var Form = new FormData(obj);
    var alert_code = $(obj).attr('data-alert');
    var href = $(obj).attr('data-href');
    //console.log(Form);
    if (alert_code != "undefined") {
        $("." + alert_code).html('<img src="/img/opc-ajax-loader.gif" style="width:20px;" />');
    }
    $.ajax({
        enctype: 'multipart/form-data',
        type: 'POST',
        url: url,
        data: Form,
        dataType: 'json',
        contentType: false,
        processData: false,
        crossDomain: true,
        cache: true,
        success: function (data) {
            if (data.success == true) {
                RessetForm(obj);
                if (alert_code != "undefined") {

                    $("." + alert_code).html('Yêu cầu của bạn đã được gửi đi');
                    alert(alert_code);
                    setTimeout(function () {
                        window.location.reload();
                    }, 1000);
                }
                else {

                    if (href != "undefined") {
                        window.location.href = href;
                    }
                    else {
                        // $('body').load( window.location.reload() );
                        window.location.reload();
                    }
                }

            }

            else {
                for (var key in data.error) {
                
                    if($("#"+myForm+" input[name=" + key + "]").parent().find('.help-block').hasClass("help-block")){
                        $("#"+myForm+" input[name=" + key + "]").parent().find('.help-block').text(data.error[key] );
                    }else{
                        $("#"+myForm+" input[name=" + key + "]").parent().append('<span class="help-block" style="color: red;">'+  data.error[key] +'</span>');
                    }
                }
                 
                
            }
        }
    });
}
function Subscribe(obj) {
    var myForm = ($(obj).attr("id"));
    var url = $(obj).attr("action");
    $(".help-block").remove();
    var Form = new FormData(obj);
    var alert_code = $(obj).attr('data-alert');
    var href = $(obj).attr('data-href');
    //console.log(Form);
    if (alert_code != "undefined") {
        $("." + alert_code).html('<img src="/img/opc-ajax-loader.gif" style="width:20px;" />');
    }
    $.ajax({
        enctype: 'multipart/form-data',
        type: 'POST',
        url: url,
        data: Form,
        dataType: 'json',
        contentType: false,
        processData: false,
        crossDomain: true,
        cache: true,
        success: function (data) {
            if (data.success == true) {
                RessetForm(obj);
                if (alert_code != "undefined") {

                    $("." + alert_code).html('Đăng ký nhận tin thành công');
                    alert(alert_code);
                    setTimeout(function () {
                        window.location.reload();
                    }, 1000);
                }
                else {

                    if (href != "undefined") {
                        window.location.href = href;
                    }
                    else {
                        // $('body').load( window.location.reload() );
                        window.location.reload();
                    }
                }

            }

            else {
                for (var key in data.error) {

                    if($("#"+myForm+" input[name=" + key + "]").parent().find('.help-block').hasClass("help-block")){
                        $("#"+myForm+" input[name=" + key + "]").parent().find('.help-block').text(data.error[key] );
                    }else{
                        $("#"+myForm+" input[name=" + key + "]").parent().append('<span class="help-block" style="color: red;">'+  data.error[key] +'</span>');
                    }
                }


            }
        }
    });
}
function handlerSubmit() {

    //=============================
    $("form[name=myform]").submit(function (e) {
        e.preventDefault();
        SubmitForm(this);
    });
    $("form[name=subscribe]").submit(function (e) {
        e.preventDefault();
        Subscribe(this);
    });

}
t = {
    url: window.location.href.replace(window.location.hash, ""),
    title: $("title").text()
};
$("a.btn-facebook").click(function(event) {
    var n = "https://www.facebook.com/sharer/sharer.php?u=" + t.url + "&p[images][0]=" + t.image,
        i = window.open(n, "_blank", "menubar=no,toolbar=no,resizable=no,scrollbars=no,height=450,width=710");
    window.focus && i.focus(), event.preventDefault()
});
$("a.btn-google").click(function(event) {
    var n = "https://plus.google.com/share?url=" + t.url,
        i = window.open(n, "_blank", "menubar=no,toolbar=no,resizable=no,scrollbars=no,height=450,width=520");
    window.focus && i.focus(), event.preventDefault()
});
$("a.btn-twitter").click(function(event) {
    var n = "https://twitter.com/intent/tweet?source=webclient&text=" + t.title + "+" + t.url,
        i = window.open(n, "_blank", "menubar=no,toolbar=no,resizable=no,scrollbars=no,height=450,width=710");
    window.focus && i.focus(), event.preventDefault()
});
function loadmodal(ob){
    var data = $(ob).attr('data-iframe');
    $("#modalVideo iframe").attr("src",'https://www.youtube.com/embed/'+data);
    $("#modalVideo").modal("show");
}
handlerSubmit();