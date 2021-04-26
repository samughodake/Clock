//real time clock in js
 function show_time(){
     var today = new Date();
     
     var h = today.getHours();
     var m = today.getMinutes();
     var s = today.getSeconds();
     var day = today.getUTCDay();
     var session = "AM";
     if(h==0){
         h=12;
     }
     if(h>12){
         h=h-12;
         session="PM";
     }
     h=(h<10?"0"+h:h);
     m=(m<10?"0"+m:m);
     s=(s<10?"0"+s:s);
     var time = h+" : "+m+" : "+s+" "+session;
     document.querySelector('#current_time').textContent=time;
     setTimeout(show_time,1000)
     if (day==0){
         day="Sunday";
     }
     if (day==1){
         day="Monday";
     }
     if (day==2){
         day="Tuesday";
     }
     if (day==3){
         day="Wednesday";
     }
     if (day==4){
         day="Thursday";
     }
     if (day==5){
         day="Friday";
     }
     if (day==6){
         day="Saturday";
     }
     var date = today.getDate()+"-"+(today.getMonth()+1)+"-"+today.getFullYear();
     document.querySelector('#current_day_and_date').textContent =date+" ,"+ day;
 }
 show_time();
