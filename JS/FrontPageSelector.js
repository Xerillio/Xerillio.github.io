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
		var newContent = $(this).html();
		var oldContent = $('#div_overlay').html();
		var clickedObj = this;
		
		$('#div_overlay').animate({
			position: $(clickedObj).css("position"),
			top: $(clickedObj).css("top"),
			left: $(clickedObj).css("left"),
			width: $(clickedObj).css("width"),
			height: $(clickedObj).css("height")
		}, 1000, function() {
			$('#div_overlay').html(newContent);
			$(clickedObj).html(oldContent);
			
			$('#div_overlay').animate({
				position: originalStyle[0],
				top: originalStyle[1],
				left: originalStyle[2],
				width: originalStyle[3],
				height: originalStyle[4]
			}, 1000, function() {
				$('#div_overlay').removeAttr('style');
				hasClicked = false;
			});
		});
	});
	
});