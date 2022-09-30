$().ready(function(){
    $("#btnChk").on("click", function() {
        var $form = $("<form>");
        var $chkBox;
        var $label;
        var labelText = ["낚시", "등산", "독서", "운동", "악기연주"];
        for(var i=0;i<5;i++) {
            $label = $("<label>");
            $label.prop("for","chk"+(i+1));
            $label.text(labelText[i]);
            $chkBox = $("<input type='checkbox' name='chkBox'  />");
            $chkBox.prop("id","chk"+(i+1));
            $chkBox.val(i+1);
            $chkBox.on("click",function() {
                $(":checkbox").prop("checked", false);
                $(this).prop("checked", true);
            });
            if(i==0) $chkBox.prop("checked", true);
            $form.append($chkBox, $label);
        }
        $("#formArea").append($form);
        $(this).off("click");//이벤트를 제거함.
        $(this).prop("disabled", true);
    });
    /*
    $(document).on("change", ":checkbox", function(){
        $(":checkbox").prop("checked", false);
        $(this).prop("checked", true);
    });//e:$(":checkbox").on("mousedown")
    */
});//e:$().ready()