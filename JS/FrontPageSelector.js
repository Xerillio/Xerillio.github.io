jQuery(document).ready(function($) {
	$('.theme_box').click(function(e) {
		var newContent = $(this).html();
		var oldContent = $('#div_overlay').html();
		$('#div_overlay').html(newContent);
		$(this).html(oldContent);
	});
});