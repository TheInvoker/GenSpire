$(document).ready(function() {
	
	
	$("#header div.menu-button").click(function() {
		$("#header div.menu-button.selected").removeClass("selected");
		$(this).addClass("selected");
		$("body div.section:visible").hide();
		$("body div.section").eq($(this).attr("data-section")).show();
	});
	
	$("#header div.menu-button").eq(0).click();
	
	
	$("#story-button").click(function(){
		$("#story-maker").show();
		$("#question-maker").hide();
	});
	$("#question-button").click(function(){
		$("#story-maker").hide();
		$("#question-maker").show();
	});
	$("#question-button input").click(function(event){
		event.stopPropagation();
	});
	$(".maker-container button").click(function() {
		$(this).closest("div").hide();
	});
});