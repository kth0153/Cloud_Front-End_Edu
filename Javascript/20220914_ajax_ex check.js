var keyName = ["idx","list","title","name","hit","date"]; // json 데이터(jsonList) 출력할 key 값
var jsonList = [
    {"idx" : 1, "list" : 1, "title" : "가나다", "name" : "김길동", "hit" : 1, "date" : "2022-09-14"}
    ,{"idx" : 2, "list" : 2, "title" : "가나다1", "name" : "거길동", "hit" : 2, "date" : "2022-09-15"}
    ,{"idx" : 3, "list" : 3, "title" : "가나다2", "name" : "이길동", "hit" : 3, "date" : "2022-09-16"}
    ,{"idx" : 4, "list" : 4, "title" : "가나다3", "name" : "고길동", "hit" : 4, "date" : "2022-09-17"}
    ,{"idx" : 5, "list" : 5, "title" : "가나다4", "name" : "태길동", "hit" : 5, "date" : "2022-09-18"}
    ,{"idx" : 6, "list" : 6, "title" : "가나다5", "name" : "박길동", "hit" : 6, "date" : "2022-09-19"}
    ,{"idx" : 7, "list" : 7, "title" : "가나다6", "name" : "정길동", "hit" : 7, "date" : "2022-09-20"}
]; // json 데이터

$().ready(function() { // jquery 시작

    // 하단 "선택삭제" 클릭시 체크박스에 체크가 된 목록만 삭제
    $("#btnDel").on("click",function () {
        var cnt = $("#listArea tr").length; // listArea 영역의 tr 갯수(행) 확인
        var $list = $("#listArea tr"); // tr 값 가져오는 것
        var $chkB;

        for(var i=0;i<cnt;i++){
            // $list.eq(i).remove();
            $chkB = $list.eq(i).children("td:first-child").children("input");
            if($chkB.prop("checked")){ // checkbox 속성이 checked가 된것 확인
                $list.eq(i).remove(); // 체크된 해당 인덱스 번호 삭제
            }
        } 
    });

    // 목록 더보기 클릭시 3 행씩 출력
    $('#btnNext').on("click",function() {
        var $tbody = $("#listArea"); // tbody 값
        var $tr; // tr
        var $td; // td
        var $chkBox; // checkbox
        var key; // list에 출력되는 값
        var listCnt = $('#listArea tr').length; //tr의 갯수 확인 tr의 갯수는 출력할 데이터 인덱스 값과 같다.
        var jsonRowCnt = jsonList.length; // list 한 행의 길이값(데이터 갯수)
        var j = listCnt; // 3, 6, 9씩 3개씩 list 출력하기 위한 제어

        while(j<listCnt+3 && j<jsonRowCnt){ // 행을 3개씩 반복 하지만 마지막에는 남은 행만 출력   
            $tr = $("<tr></tr>");
            for(var i=0;i<6;i++){
                $td = $("<td></td>"); // 행 생성
                key = keyName[i]; // key 값에 jsonList의 key 값 저장
                if(i==0){ // 행이 첫 번째일 경우
                    $chkBox = $("<input type='checkbox' name='idx' value='"+jsonList[j][key]+"'>"); // 행 0번째 인덱스 체크박스로 고정 생성, [0]행[0행 list]값
                    $td.append($chkBox); // <td></td>에 checkbox 추가
                }else{
                    $td.html(jsonList[j][key]); // 행의 0번 이외의 행 list 값 추가
                }
                $tr.append($td); //<tr></tr>에 td(행) 추가
            }
            $delSpan = $("<span>del</span>"); // del 속성 추가

            //====================del 클릭을 통해 행 삭제 ==================
            $delSpan.on("click",function() {
                // checkbox 체크여부 확인
                var chk = $(this).parents("td").parents("tr").children("td:first-children").children("input").prop("checked");

                if(chk==true){
                    $(this).parents("td").parents("tr").remove();// 체크된 행 전체 삭제
                }else{
                    alert("선택할 행의 체크박스를 선택하지 않았습니다.");
                }
                
            });
            $td = $("<td></td>");
            $tr.append($td);
            $tbody.append($tr);

            j++
        }
    });
    //====================chkAll 체크박스 선택시 ==================
    $("#chkAll").on("click",function() {
        alert($("[name='idx']").prop("checked",this.checked));
        if(this.checked){

        }else{ // 모두 체크 불가

        }
    });


});