jQuery(function(){
	$(".nav-tabs a").on("click", function(e) {
		e.preventDefault();
		var tab = $(this).attr("href");

		$(".tabDatos").hide();
		$(tab).show();

		$(".nav-tabs li").removeClass("active");
		$(this).parent().addClass('active');
	});
})