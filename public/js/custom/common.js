$(document).ready(function() {
	
	
	$("#header div.menu-button").click(function() {
		$("#header div.menu-button.selected").removeClass("selected");
		$(this).addClass("selected");
		$("body div.section:visible").hide();
		$("body div.section").eq($(this).attr("data-section")).show();
	});
	
	$("#header div.menu-button").eq(0).click();
	
	$("#header img:first-child").click(function() {
		$("#header div.menu-button.selected").removeClass("selected");
		$("#header div.menu-button").eq(0).addClass("selected");
		$("body div.section:visible").hide();
		$("body div.section").eq(0).show();
	});
});