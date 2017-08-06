$(function () {
   var mswiper=new Swiper(".swiper-container",{
   	pagination:".swiper-pagination",
   	paginationClickable:true,
   	autoplay:2000,
   });
   // 切换城市
   var state1=true;
   $("#changecity").on("click",function(){
   	// 出现城市
   	  if (state1) {
          $("#citys").css('display', 'block');
          $("#changecity").css("transform","rotate(180deg)");
          state1=false;
       }else {
    // 隐藏城市
       	  $("#citys").css('display', 'none');
       	  $("#changecity").css("transform","rotate(360deg)");
          state1=true;
       }
   });
   // 选择城市
   var mySelectCitys=$(".select-city");
   for(var i = 0; i < mySelectCitys.length; i++){
   	   mySelectCitys[i].onclick=function () {
   	            $("#city").text($(this).text());
   	            $("#citys").css('display', 'none');
   	            $("#changecity").css("transform","rotate(360deg)");
                state1=true;
   	   }
   }
   // 倒计时
    var timer=setInterval(function () {
    var free=$("#count-down").text().split("|")[1];
    var hour=free.split(":")[0];
    var minute=free.split(":")[1];
    var second=free.split(":")[2];
    if (hour.charAt(0)==0) {
        hour=hour.substring(1);
    }
    if (minute.charAt(0)==0) {
        minute=minute.substring(1);
    }
    if (second.charAt(0)==0) {
        second=second.substring(1);
    }
   	second--;
   	if (second<0) {
        minute--;
        second=59;
   	}
   	if (minute<0) {
        hour--;
        minute=59;
   	}
   	if (hour==0&&minute==0&&second==0) {
        clearInterval(timer);
   	}
   	if (hour<10) {
   		hour="0"+hour;
   	}
   	if (minute<10) {
   		minute="0"+minute;
   	}
   	if (second<10) {
   		second="0"+second;
   	}
   $("#count-down").text("距离开始:|"+hour+":"+minute+":"+second);
   }, 1000);
   // 查看更多并收回
   var state2=true;
   $(".scan-all").on("click",function () {
   	//  点击查看更多
       if (state2) {
          $(".more").css('display', 'block');
          $(".more1").slideDown(1000);
          $(".more2").slideDown(2000);
          $(".scan-all").text("收起更多...")
          state2=false;
       }else {
       	  $(".more").css('display', 'none');
          $(".more1").slideUp(2000);
          $(".more2").slideUp(1000);
          $(".scan-all").text("查看全部团购")
          state2=true;
       }
   });
});
