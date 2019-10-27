
$(document).ready(function(){

    // detect scroll
	
		$(window).scroll(function(){
		
			// if the user scrolled the page more that 200 pixels, show the 'up' arrow image
			if ($(this).scrollTop() > 50) {
				$('.ninjaUp').fadeIn();
			} 
			
			// hide the 'up' arrow image
			else {
				$('.ninjaUp').fadeOut();
			}
			
		});

    // when the user clicks on the 'up' arrow image, it will scroll the page to the top
    // it will occur in a second (see 1000 value below)
    // you can change that value if you want to make the scroll faster or slower
	
		$('.ninjaUp').click(function(){
			$("html, body").animate({ scrollTop: 0}, 200);
			return false;
		});
	

		
		//vertical image moving
		
		function MoveUpDown() {
        var i=0;
		var p=1;
        function step() {
		document.getElementById("oblici").style.backgroundPosition="0 " +"-"+i+"px";
		if(i<=220)
		{
		 if(i === 0)
		 {
		 p=1;
		 }
		 i=i+p;
		}
		else
		{
		 p=-1;
		 i=i+p;
		}
        setTimeout(step,30);
         }
         step();
        }

        MoveUpDown();
		
		//First dropdown
		
		function connectWith(menu, div) {
			var timer;
			menu.mouseenter(function() {
				div.stop().slideDown(400);
				$(this).addClass("h2h");
				/*timer = setTimeout(function() {
					div.slideUp(200);
				}, 30000);*/
			});
			menu.siblings().mouseenter(function(){
				div.stop().slideUp(200);
				$('.house-menu-item2').removeClass("h2h");
			})
			
			$(".insider-div").mouseenter(function(){
				div.stop().slideUp(200);
				$('.house-menu-item2').removeClass("h2h");
			})
			
			div.mouseleave(function() {
				div.stop().slideUp(200);
				$('.house-menu-item2').removeClass("h2h");
			})
	}
	
		connectWith($('.house-menu-item2'), $('.first-dropdown'));
	
	
	//Second dropdown
	
	
		$('.house-menu-item3').mouseenter(function() {
			$('.second-dropdown').stop().slideDown(400);
			$(this).addClass("h3h");
		
		});
		$('.house-menu-item3').siblings().mouseenter(function(){
			$('.second-dropdown').stop().slideUp(200);
			$('.house-menu-item3').removeClass("h3h");
		});
		
		$(".insider-div").mouseenter(function(){
			$('.second-dropdown').stop().slideUp(200);
			$('.house-menu-item3').removeClass("h3h");
		});
		
		$('.second-dropdown').mouseleave(function() {
			$('.second-dropdown').stop().slideUp(200);
			$('.house-menu-item3').removeClass("h3h");
		});
		
		//Third dropdown
	
	
		$('.house-menu-item4').mouseenter(function() {
			$('.third-dropdown').stop().slideDown(400);
			$(this).addClass("h4h");
		
		});
		$('.house-menu-item4').siblings().mouseenter(function(){
			$('.third-dropdown').stop().slideUp(200);
			$('.house-menu-item4').removeClass("h4h");
		});
		
		$(".moving-picture-header").mouseenter(function(){
			$('.third-dropdown').stop().slideUp(200);
			$('.house-menu-item4').removeClass("h4h");
		});
		
		$(".insider-div").mouseenter(function(){
			$('.third-dropdown').stop().slideUp(200);
			$('.house-menu-item4').removeClass("h4h");
		});
		
		$('.third-dropdown').mouseleave(function() {
			$('.third-dropdown').stop().slideUp(200);
			$('.house-menu-item4').removeClass("h4h");
		});
		
		
		//Fourth dropdown
		
		$('.house-menu-item5').mouseenter(function() {
			$('.fourth-dropdown').stop().slideDown(400);
			$(this).addClass("h5h");
		
		});
		$('.house-menu-item5').siblings().mouseenter(function(){
			$('.fourth-dropdown').stop().slideUp(200);
			$('.house-menu-item5').removeClass("h5h");
		});
		
		$(".moving-picture-header").mouseenter(function(){
			$('.fourth-dropdown').stop().slideUp(200);
			$('.house-menu-item5').removeClass("h5h");
		});
		
		$(".insider-div").mouseenter(function(){
			$('.fourth-dropdown').stop().slideUp(200);
			$('.house-menu-item5').removeClass("h5h");
		});
		
		$('.fourth-dropdown').mouseleave(function() {
			$('.fourth-dropdown').stop().slideUp(200);
			$('.house-menu-item5').removeClass("h5h");
		});
		
		//Fifth dropdown
		
		$('.house-menu-item6').mouseenter(function() {
			$('.fifth-dropdown').stop().slideDown(400);
			$(this).addClass("h6h");
		
		});
		$('.house-menu-item6').siblings().mouseenter(function(){
			$('.fifth-dropdown').stop().slideUp(200);
			$('.house-menu-item6').removeClass("h6h");
		});
		
		$(".moving-picture-header").mouseenter(function(){
			$('.fifth-dropdown').stop().slideUp(200);
			$('.house-menu-item6').removeClass("h6h");
		});
		
		$(".insider-div").mouseenter(function(){
			$('.fifth-dropdown').stop().slideUp(200);
			$('.house-menu-item6').removeClass("h6h");
		});
		
		$('.fifth-dropdown').mouseleave(function() {
			$('.fifth-dropdown').stop().slideUp(200);
			$('.house-menu-item6').removeClass("h6h");
		});
		
		//Sixth dropdown
		
		$('.house-menu-item7').mouseenter(function() {
			$('.sixth-dropdown').stop().slideDown(400);
			$(this).addClass("h7h");
		
		});
		$('.house-menu-item7').siblings().mouseenter(function(){
			$('.sixth-dropdown').stop().slideUp(200);
			$('.house-menu-item7').removeClass("h7h");
		});
		
		$(".moving-picture-header").mouseenter(function(){
			$('.sixth-dropdown').stop().slideUp(200);
			$('.house-menu-item7').removeClass("h7h");
		});
		
		$(".insider-div").mouseenter(function(){
			$('.sixth-dropdown').stop().slideUp(200);
			$('.house-menu-item7').removeClass("h7h");
		});
		
		$('.sixth-dropdown').mouseleave(function() {
			$('.sixth-dropdown').stop().slideUp(200);
			$('.house-menu-item7').removeClass("h7h");
		});
		
		
		$(".left-arrow").click(function() {
		
		var cDiv  = $(".slider").find(".activerectangle");
		
		if(cDiv.hasClass("first-rectangle"))
		{
		  $(".fifth-rectangle").addClass("activerectangle");
		  cDiv.removeClass("activerectangle");
		
		}
		else
		{
		 cDiv.prev().addClass("activerectangle");
		 cDiv.removeClass("activerectangle");
		}
		
		
		
		
		var current = $('.sliderlist li.active');
		$('.sliderlist li.active').removeClass("active").addClass("passive");
		if(current.is(':first-child'))
         {
            $('.sliderlist li:last-child').removeClass("passive").addClass("active");
         }
		else
		{
		  current.prev().removeClass("passive").addClass("active");
		}
		
		resetTimer();
		timer = setInterval(slideChange,3000);
		});
		
		$(".right-arrow").click(function() {
		var cDiv  = $(".slider").find(".activerectangle");
		
		if(cDiv.hasClass("fifth-rectangle"))
		{
		  $(".first-rectangle").addClass("activerectangle");
		  cDiv.removeClass("activerectangle");
		
		}
		else
		{
		 cDiv.next().addClass("activerectangle");
		 cDiv.removeClass("activerectangle");
		}
		
		
		
		var current = $('.sliderlist li.active');
		$('.sliderlist li.active').removeClass("active").addClass("passive");
		if(current.is(':last-child'))
         {
            $('.sliderlist li:first-child').removeClass("passive").addClass("active");
         }
		else
		{
		  current.next().removeClass("passive").addClass("active");
		}
		resetTimer();
        timer = setInterval(slideChange,3000);
		
		});
		
		function slideChange() {
		
		
		var cDiv  = $(".slider").find(".activerectangle");
		
		if(cDiv.hasClass("fifth-rectangle"))
		{
		  $(".first-rectangle").addClass("activerectangle");
		  cDiv.removeClass("activerectangle");
		
		}
		else
		{
		 cDiv.next().addClass("activerectangle");
		 cDiv.removeClass("activerectangle");
		}
		
		setTimeout(300);
		clearTimeout();
		
		
		var current = $('.sliderlist li.active');
		$('.sliderlist li.active').removeClass("active").addClass("passive");
		if(current.is(':last-child'))
         {
            $('.sliderlist li:first-child').removeClass("passive").addClass("active");
         }
		else
		{
		  current.next().removeClass("passive").addClass("active");
		}
		
		
		}
		
		var timer = setInterval(slideChange,3000);
		
		function resetTimer(){
		
		clearInterval(timer);
		
		}
		
		// set rectangle background image
		
		$(".first-rectangle").addClass("activerectangle");
		
		$(".first-rectangle").click(function(){
		
		var currentdiv2 = $(".slider").find(".activerectangle");
		currentdiv2.removeClass("activerectangle");
		$(this).addClass("activerectangle");
		
		resetTimer();
		$('.sliderlist li.active').removeClass("active").addClass("passive");
		$('.sliderlist li:first-child').removeClass("passive").addClass("active");
		timer = setInterval(slideChange,3000);
		
		});
		
		$(".second-rectangle").click(function(){
		
		var currentdiv2 = $(".slider").find(".activerectangle");
		currentdiv2.removeClass("activerectangle");
		$(this).addClass("activerectangle");
		
		resetTimer();
		$('.sliderlist li.active').removeClass("active").addClass("passive");
		$('.sliderlist li:nth-child(2)').removeClass("passive").addClass("active");
		timer = setInterval(slideChange,3000);
		});
		
		$(".third-rectangle").click(function(){
		
		var currentdiv2 = $(".slider").find(".activerectangle");
		currentdiv2.removeClass("activerectangle");
		$(this).addClass("activerectangle");
		
		resetTimer();
		$('.sliderlist li.active').removeClass("active").addClass("passive");
		$('.sliderlist li:nth-child(3)').removeClass("passive").addClass("active");
		timer = setInterval(slideChange,3000);
		});
		
		$(".fourth-rectangle").click(function(){
		
		var currentdiv2 = $(".slider").find(".activerectangle");
		currentdiv2.removeClass("activerectangle");
		$(this).addClass("activerectangle");
		
		resetTimer();
		$('.sliderlist li.active').removeClass("active").addClass("passive");
		$('.sliderlist li:nth-child(4)').removeClass("passive").addClass("active");
		timer = setInterval(slideChange,3000);
		});
		
		$(".fifth-rectangle").click(function(){
		
		var currentdiv2 = $(".slider").find(".activerectangle");
		currentdiv2.removeClass("activerectangle");
		$(this).addClass("activerectangle");
		
		resetTimer();
		$('.sliderlist li.active').removeClass("active").addClass("passive");
		$('.sliderlist li:last-child').removeClass("passive").addClass("active");
		timer = setInterval(slideChange,3000);
		});
		
		

});