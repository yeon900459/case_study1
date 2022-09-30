$(function(){
   var sliderN=0;
   var sliderTotal=5;

   $(".slider_moving li").eq(sliderN).addClass("current");
   $(".pagination li").eq(sliderN).addClass("current");

   $(".controlls .prev").click(function(e){
      e.preventDefault();
      prevMoving();
   });
   $(".controlls .next").click(function(e){
      e.preventDefault();
      nextMoving();
   });
	$(".pagination li").click(function(e){
		e.preventDefault();
		sliderN=$(this).index();
		galleryInterface();
	});


   setInterval(function(){
      nextMoving();
   }, 7000);

   function galleryInterface(){
		$(".slider_moving li").removeClass("current");
		$(".slider_moving li").eq(sliderN).addClass("current");
		$(".pagination li").removeClass("current");
		$(".pagination li").eq(sliderN).addClass("current");
   }

   function prevMoving(){
      if(sliderN > 0){
            sliderN = sliderN-1;
      }
      else{
         sliderN=(sliderTotal-1);
      }
      galleryInterface();
   }
   function nextMoving(){
      if(sliderN < sliderTotal-1){
         sliderN = sliderN+1;
      }
      else{
         sliderN=0;
      }
      galleryInterface();
   }
});