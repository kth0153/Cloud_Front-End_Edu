const pageListCnt = 3;
$().ready(function(){
    const keyName = ["idx","list","title","name","hit","date"];
    const jsonList = [
        {
            "idx" : "1",
            "list" : 1,
            "title" : "토요일, 송호리로 오실 때 따뜻하게 하고 오세요",
            "name" : "탱그리",
            "hit" : 1,
            "date" : "2022-01-25"
        },
        {
            "idx" : 2,
            "list" : 2,
            "title" : "새만금 너울 풀치! 첫 놈부터 사이즈 좋네요!",
            "name" : "혁돌",
            "hit" : 2,
            "date" : "2022-02-05"
        },
        {
            "idx" : 3,
            "list" : 3,
            "title" : "무의도 갑오징어 쭈꾸미 가져왔습니다",
            "name" : "쭈신꿈나라",
            "hit" : 8,
            "date" : "2022-02-12"
        },
        {
            "idx" : 4,
            "list" : 4,
            "title" : "부산 동방파제 붉바리 장어",
            "name" : "최태공",
            "hit" : 3,
            "date" : "2022-03-02"
        },
        {
            "idx" : 6,
            "list" : 5,
            "title" : "부산 해운대 미포 실시간 입니다",
            "name" : "현자해운대",
            "hit" : 112,
            "date" : "2022-03-09"
        },
        {
            "idx" : 7,
            "list" : 6,
            "title" : "가족끼리 쭈갑치고갑니다",
            "name" : "어복거지",
            "hit" : 11,
            "date" : "2022-03-10"
        },
        {
            "idx" : 8,
            "list" : 7,
            "title" : "11일 백사장항에서 바라본 드르니항풍경",
            "name" : "보리봉",
            "hit" : 121,
            "date" : "2022-04-10"
        }
    ];
    

    $("#btnNext").on("click",function(ev) {
        var listCnt = jsonList.length;
        var startList = $("#listArea tr").length;;
        var i=startList;
        while(i<startList+pageListCnt && i<listCnt) {
            var $tr = $("<tr></tr>");
            for(var j=0; j<6; j++) {
                var $td = $("<td></td>");
                if(j==0) {
                    var $chkBox=$("<input type='checkbox' name='idx' />");
                    $chkBox.val(jsonList[i][keyName[j]]);
                    $td.append($chkBox);
                }
                else $td.text(jsonList[i][keyName[j]]);
                $tr.append($td);
            }
            $btnSpan = $("<td><span>del</span></td>");
            $btnSpan.on("click",function(ev) {
                var $chkBox = $(this).parents("tr").children("td:first-child").children("input");
                var chk = $chkBox.prop("checked");
                if(chk) $(this).parents("tr").remove();
                else alert("삭제할 체크박으에 체크를 해주셔야 합니다.");
            });//e:$btnSpan.on("click")
            $tr.append($btnSpan);
            $("#listArea").append($tr);
            i++;
        }
    });//e:$("btnNext").on("click");
});//e:$().ready()