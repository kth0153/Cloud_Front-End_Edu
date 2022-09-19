$().ready(function() {
    $("#btnOrder").on("click", function() {
        var menuNum;
        var menu = ["자장명", "짬뽕", "복음밥"];
        var foodCnt = [0, 0, 0, 0];
        var cost = [0, 0, 0, 0];
        var price = [6000, 7000, 8000];
        var msg="";
        while(confirm("주문하시겠습니까?")) {
            menuNum = prompt("[메뉴]\r\n1. 자장명 : 6,000원\r\n2. 짬뽕 : 7,000원\r\n3. 복음밥 : 8,000원");
            if(isNaN(menuNum) || !menuNum || menuNum=="") alert("메뉴가 선택되지 않았습니다.");
            else if(menuNum>0 && menuNum<4) {
                foodCnt[0]++;
                foodCnt[menuNum]++;
                cost[0]+=price[menuNum-1];
                cost[menuNum]+=price[menuNum-1];
            }
            else alert("없는 메뉴 입니다.");
        }
        msg = "<p><strong>주문해주셔서 감사합니다.</strong></p>";
        for(var i=1;i<=3;i++) if(foodCnt[i]>0) msg+="<p>- " + menu[i-1] + " " + foodCnt[i] + "그릇 " + cost[i] +"원</p>";
        msg += "<p>"+foodCnt[0] + "분이 주문하셨습니다. <br />총 요금은 <strong>" + cost[0] + "원</strong> 입니다.</p>";
        if(foodCnt[0]>0) $("#orderArea").html(msg);
    });//e:$("#btnOrder").on("click")
});//e:$().ready()