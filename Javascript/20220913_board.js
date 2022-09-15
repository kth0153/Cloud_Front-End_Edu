$().ready(function () {
    // 버튼 클릭시 필수 입력 확인

    var nowDate = new Date();
    var nowYear = nowDate.getFullYear();
    var nowMonth = nowDate.getMonth();
    var nowDay = nowDate.getDate();
    var strDate = nowYear + "-"+nowMonth+"-"+nowDay; // 작성일

    $("#tdate").attr("value",strDate); // document.fn.tdate.value=strDate;
    //----------------------------동작 제어------------------------------

    // 버튼 클릭시 필수 입력 확인
    $("#btnSubmit").on("click",function(ev) {
        var fn = document.fn;
        if(fn.tname.value==""){
            alert(" 이름을 입력해 주세요");
            fn.tname.focus(); // 커서를 이름 입력 텍스트 박스에 위치
            // return; // undefinded 값을 넘겨주는것 
            return false; // false 값을 넘겨주는것 위와 동작은 같으나 넘겨 주는 값이 다름
        }
        
        if(fn.ttitle.value==""){
            alert(" 제목을 입력해 주세요");
            fn.ttitle.focus(); // 커서를 이름 입력 텍스트 박스에 위치
            return false;
        }

        //-------------------------리스트 만들기------------------------------

        var $table = $("#viewList table");
        var $tr = $("<tr></tr>");
        var $td = $("<td></td>");
        var $td2 = $("<td></td>");
        var $td3 = $("<td></td>");
        var $td4 = $("<td></td>");
        var $td5 = $("<td></td>");
        var $td6 = $("<td></td>");
        var $td7 = $("<td></td>")

        var $chkBox = $("<input type='checkbox' name='tidx' value=''></input>");
        var $trIdx = $("#viewList tr").length;
        $chkBox.attr("value",$trIdx);

        $td.append($chkBox);
        $td2.append("<span>"+$trIdx+"</span>");
        $td3.append("<a href='#'>"+$("#ttitle").val()+"</a>" );
        $td4.append("<span>"+$("#tname").val()+"</span>");
        $td5.append("<span>"+$("#tdate").val()+"</span>");
        $td6.append("<span>1</span>");
        $td7.append("<span>del</span>");
        $td7.on("click",function(ev) {
            // alert($(this).text());
            // alert($(this).parents("tr").index());
            // $(this).parents("tr").remove(); // 부모 tr에 속한 td 모두 삭제
            // $(this).remove();// td 자신만 삭제
            var chkVal = $(this).parents("tr").children("td:first").children("input").val();
            alert();
        });

        $tr.append($td);
        $tr.append($td2);
        $tr.append($td3);
        $tr.append($td4);
        $tr.append($td5);
        $tr.append($td6);
        $tr.append($td7);
        
        $table.append($tr);
    });
});