function chooseNav($anchor) {
	$('.navbar-nav li').removeClass('active');
	$anchor.closest('li').addClass('active');
};


function goto(name) {
	var $target = $("[name='" + name + "']");
	window.$target = $target;
	if ($target.length) {
		$('html, body').stop().animate({
			scrollTop: $target.offset().top
		}, 1000, 'easeInOutExpo');
	}
}

function gotoId(id) {
	var $target = $("#" + id);
	window.$target = $target;
	if ($target.length) {
		$('html, body').stop().animate({
			scrollTop: $target.offset().top - 85
		}, 1000, 'easeInOutExpo') 
	}
}

function highlight(id){
	var $target = $("#" + id);
		window.$target = $target;
	$target.removeClass("highlight");
    setTimeout(function() {
	    $target.addClass("highlight");
    }, 200);
};
$(function() {
	$('.navbar-nav li a').bind('click', function(event) {
		event.preventDefault();
		var $anchor = $(this);
		chooseNav($anchor);
		var name = $anchor.attr('href').slice(1);

		goto(name);

		if ($('.navbar .in').length) {
			$('.navbar-toggle').click()
		}
	});

	var active = document.location.hash;
	if (active) {
		var anchor = $("[href='" + active + "']");
		chooseNav($(anchor));
	}

});