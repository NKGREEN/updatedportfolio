$(function () {
	$(window).scroll(function () {
		var scroll = $(window).scrollTop();
		if (scroll > 250) {
			$(".nav-link").css("padding", " 15px");
			$(".nav").css("box-shadow", " 0px 5px 10px rgba(0,0,0,.5)");
			$(".nav").css("width", "100%");
		} else {
			$(".nav-link").css("padding", " 10px");
			$(".nav").css("box-shadow", " none");
		}
	})
})
