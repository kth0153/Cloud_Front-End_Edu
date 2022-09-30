$().ready(function(){
    $("#btnChk").on("click", function() {
        var $form = $("<form></form>");
        var $chkBox;
        var $label;
        var labelText = ["낚시", "등산", "독서", "운동", "악기연주"]; // label에 들어갈 text
        for(var i=0;i<5;i++) { // checkbox 5개 생성
            $label = $("<label>");
            $label.prop("for","chk"+(i+1)); // prop(propertyName, value) , label이 checkbox를와 결합하기 위함
                                            // <label> 요소는 for 속성을 사용하여 다른 요소와 결합할 수 있으며, 
                                            // 이때 <label> 요소의 for 속성값은 결합하고자 하는 요소의 id 속성값과 같아야 합니다. 
                                            // 또한, <label> 요소를 결합하고자 하는 요소 내부에 위치시키면 for 속성을 사용하지 않더라도 
                                            // 해당 요소와 결합시킬 수 있습니다.
            $label.text(labelText[i]); // 라벨 값 가져와 라벨에 출력하는 것

            $chkBox = $("<input type='checkbox' name='chkBox'  />");
            $chkBox.prop("id","chk"+(i+1)); // checkbox의 id는 chk+(i+1)이다.
            $chkBox.val(i+1); // checkbox value 값 1 증가
            $chkBox.on("click",function() {
                $(":checkbox").prop("checked", false); // 다른 체크박스가 클릭 되어 있으면 체크 안되게 지정
                $(this).prop("checked", true); // 해당 체크박스 선택시만 체크 되게 지정(라디오 박스 역할)
            });
            if(i==0) $chkBox.prop("checked", true); // 맨처음 체크박스 선택된 상태로 지정
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