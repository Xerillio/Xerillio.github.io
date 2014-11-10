var hasClicked = false;
jQuery(document).ready(function($) {
	
	$('.theme_box').click(function(e) {
		if (hasClicked){
			return;
		}
		hasClicked = true;
		var originalStyle = [$('#div_overlay').css("position"),
							 $('#div_overlay').css("top"),
							 $('#div_overlay').css("left"),
							 $('#div_overlay').css("width"),
							 $('#div_overlay').css("height")];
		var newContent = $(this).children(":first").html();
		var oldContent = $('#div_overlay').children(":first").html();
		var clickedObj = this;
		
		var overlayTop = $('#div_overlay').offset().top;
		var overlayHeight = $('#div_overlay').height();
		var scrollToPos = window.innerHeight < overlayHeight ? overlayTop : overlayTop - (window.innerHeight - overlayHeight) / 2;
		
		$('#div_overlay').animate({
			position: $(clickedObj).css("position"),
			top: $(clickedObj).css("top"),
			left: $(clickedObj).css("left"),
			width: $(clickedObj).css("width"),
			height: $(clickedObj).css("height")
		}, 750, function() {
			$('#div_overlay').children(":first").html(newContent);
			$(clickedObj).children(":first").html(oldContent);
			
			$('#div_overlay').animate({
				position: originalStyle[0],
				top: originalStyle[1],
				left: originalStyle[2],
				width: originalStyle[3],
				height: originalStyle[4]
			}, 750, function() {
				$('#div_overlay').removeAttr('style');
				hasClicked = false;
			});
			
			if ($(document).scrollTop() > scrollToPos){
				$('html, body').animate({
					scrollTop: scrollToPos
				}, 750);
			}
		});
	});
	
});