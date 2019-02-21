var style = () => {
	$("#main").css("top", innerHeight / 2 - ($("#main").css("height").slice(0, -2)) / 2);
};

$(style);
$(window).on("orientationchange resize", style);