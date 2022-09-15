var keyName = ["idx","list","title","name","hit","date"]; // 출력할 key 값
var jsonList = [
    {"idx" : 1, "list" : 1, "title" : "가나다", "name" : "김길동", "hit" : 1, "date" : "2022-09-14"}
    ,{"idx" : 2, "list" : 2, "title" : "가나다1", "name" : "거길동", "hit" : 2, "date" : "2022-09-15"}
    ,{"idx" : 3, "list" : 3, "title" : "가나다2", "name" : "이길동", "hit" : 3, "date" : "2022-09-16"}
    ,{"idx" : 4, "list" : 4, "title" : "가나다3", "name" : "고길동", "hit" : 4, "date" : "2022-09-17"}
    ,{"idx" : 5, "list" : 5, "title" : "가나다4", "name" : "태길동", "hit" : 5, "date" : "2022-09-18"}
    ,{"idx" : 6, "list" : 6, "title" : "가나다5", "name" : "박길동", "hit" : 6, "date" : "2022-09-19"}
    ,{"idx" : 7, "list" : 7, "title" : "가나다6", "name" : "정길동", "hit" : 7, "date" : "2022-09-20"}
];

$().ready(function() {
    // 하단 "선택삭제" 클릭시 체크박스에 체크가 된 목록만 삭제
    $("#btnDel").on("click",function() {
        var cnt = $("#listArea tr").length;
        // alert(cnt);

        var $list = $("#listArea tr"); // tr 값 가져오는 것
        var $chkB;

        // alert($("[name='idx']:checked").length); // 체크가 된 체크박스의 갯수 반환
        // return;

        for(var i=0;i<cnt;i++){
            // $list.eq(i).remove();
            $chkB = $list.eq(i).children("td:first-child").children("input");
            if($chkB.prop("checked")){
                $list.eq(i).remove(); // 체크된 해당 인덱스 번호 삭제
            }
        } 
            
    });

    // alert("ajax");

    //----------------목록 더보기 클릭---------------------
    // $("#btnNext").on("click",function() {
    //     // alert("#btnNext");
    //     var $dir = $("<div></div>"); //tbody
    //     var $p = $("<p></p>"); //tr
    //     var $span; // td
    //     for(var i = 0;i<7;i++){
    //         var $span = $("<span></span>"); // td
    //         $span.text("&nbsp"); // .html : 태그까지 다 가져 오는 것 .text : 텍스트만 가져오는것
    //         $p.append($span);
    //     }
    //     $dir.append($p);
    //     $("#container").append($dir);

    // });//e: $("#btnNext").on("click",function(ev)
    
    // idx, list, title, name, 1, date
    
    // console.log($jsonList[0].title);

    $("#btnNext").on("click",function() {
        var $tbody = $("#listArea"); //tbody
        var $tr; //tr
        var $td; // td
        var $chkBox;
        var key;
        var listCnt = $("#listArea tr").length; // 출력된 목록(tr)의 갯수(1~3) 출력할 데이터의 row index(1~3)와 같다.
        var jsonRowCnt = jsonList.length;
        // alert(jsonRowCnt); // 행의 갯수, 마지막 행 출력 제한
        // alert(listCnt);
        var j=listCnt;

        if(listCnt >= jsonRowCnt){
            alert("더 이상 목록이 없습니다.");
            return;
        }

        // 시작 json 데이터의 row 번호
        while(j<listCnt+3 && j<jsonRowCnt){ // 행을 3개씩 반복하되 마지막에는 마지막 행을 삽입하고 종료(3,6,9... 인덱스까지 출력);
            $tr = $("<tr></tr>");
            for(var i = 0;i<6;i++){
                $td = $("<td></td>");
                key = keyName[i];
                if(i==0){ // 맨 처음 칸 checkbox 출력
                    $chkBox = $("<input type='checkbox' name='idx' value='"+jsonList[j][key]+"' />");
                    $td.append($chkBox);
                }
                else {
                    //$td.html("&nbsp"); // .html : 태그까지 다 가져 오는 것 .text : 텍스트만 가져오는것
                    $td.html(jsonList[j][key]);
                }
                $tr.append($td);
        } //e:for()
        $delSpan = $("<span>del</span>");

        //====================del 클릭을 통해 행 삭제 ==================
        $delSpan.on("click",function() {
            // var idx = $(this).parents("td").parents("tr").children("td:first-child").children("input").val();
            // alert(idx); // 각 행의 index 값 출력
            
            // checkbox의 체크여부 확인
            var chk = $(this).parents("td").parents("tr").children("td:first-child").children("input").prop("checked");
            // alert(chk);

            if(chk==true){
                $(this).parents("td").parents("tr").remove();
            }else{
                alert("선택할 행의 체크박스를 선택하지 않았습니다.");
            }
            // alert($(this).parents("td").parents("tr").children("td:first-child").html());
            // alert($(this).get());
            // $(this).parents("td").parents("tr").remove(); // td-> tr -> remove
        }); //e:$td.on("click")
        $td = $("<td></td>");
        $td.append($delSpan);
        $tr.append($td);
        $tbody.append($tr);
        // $("#container").append($tbody);
        j++;
        } //e:while()
    });//e: $("#btnNext").on("click",function(ev)

    //====================del 클릭을 통해 행 삭제 ==================
    // $("table tbody tr td:last-child").on("click",function() {
    //     alert("asdf");
    // });// e:$("table tbody tr td:last-child").on("click",function()

    //====================chkAll 체크박스 선택시 ==================
    $("#chkAll").on("click",function() {
        // alert($("[name='dix']").length);
        // alert($("[name='dix'].eq(0)").val());
        // alert($("[name='idx']").prop("checked",true));
        alert($("[name='idx']").prop("checked",this.checked));

        if(this.checked){

        }else{ // 모두 체크 불가

        }
    });

});