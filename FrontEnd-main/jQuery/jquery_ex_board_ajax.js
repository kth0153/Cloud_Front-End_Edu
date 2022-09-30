const pageListCnt = 3;
var jsonList;
$().ready(function(){
    const keyName = ["idx","list","title","name","hit","date"];
    $.ajax({
        url: "board_data.json",
        data:{
            idx:1,
            name:"홍길동",
            title:"게시판에 작성할 제목입니다.",
            date:"2022-09-14",
            hit:1
        },
        method:"GET",
        dataType: "text",/*json / text / html / xml / csv */
        success : function(jsonData) {
            jsonList=JSON.parse(jsonData);
            console.log(jsonList[0].title);
        },
        error:function(request,status,error){
            console.log("code:"+request.status);
            console.log("message:"+request.responseText);
            console.log("error:"+error);}
    });

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