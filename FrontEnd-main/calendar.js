$(function() {
    $("#yearArea").html("2022");
    $("#monthArea").html("09");

    let nowDate = new Date();
    let nowYear = nowDate.getFullYear();
    let nowMonth = nowDate.getMonth();
    let nowDay = nowDate.getDate();
    nowDate = new Date(nowYear, nowMonth, 1);
    let nextDate = new Date(nowYear, nowMonth+1, 1);
    let lastDate = new Date(nowYear, nowMonth+1, 0);
    let weekNum = nowDate.getDay();
    let nextMonth = nowMonth+1;
    let lastDay = lastDate.getDate();
    let $row;
    let prtDay=1;
    let $cell;
    while(prtDay<=lastDay) {
        $row = $("tbody").append("<tr>");
        for(i=0;i<7; i++) {
            if(i<weekNum && prtDay==1) $row.append("<td> </td>");
            else $row.append("<td>"+prtDay++ +"</td>");
        }
    }
    alert($("table").html());
});