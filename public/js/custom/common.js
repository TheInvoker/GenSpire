var POST = {
	
};

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
	
	setUpSockets();
});


function setUpSockets() {
	var socket = io();

	socket.on('create_question_fail', function(data){

	});
	socket.on('create_question_succeed', function(data){

	});
	socket.on('read_questions_fail', function(data){

	});
	socket.on('read_questions_succeed', function(data){

	});
	socket.on('update_question_fail', function(data){

	});
	socket.on('update_question_succeed', function(data){

	});
	socket.on('delete_question_fail', function(data){

	});
	socket.on('delete_question_succeed', function(data){

	});
	
	
	socket.on('create_question_feedback_fail', function(data){

	});
	socket.on('create_question_feedback_succeed', function(data){

	});
	socket.on('read_questions_feedback_fail', function(data){

	});
	socket.on('read_questions_feedback_succeed', function(data){

	});
	socket.on('update_question_feedback_fail', function(data){

	});
	socket.on('update_question_feedback_succeed', function(data){

	});
	socket.on('delete_question_feedback_fail', function(data){

	});
	socket.on('delete_question_feedback_succeed', function(data){

	});
	
	
	socket.on('create_answer_fail', function(data){

	});
	socket.on('create_answer_succeed', function(data){

	});
	socket.on('read_answers_fail', function(data){

	});
	socket.on('read_answers_succeed', function(data){

	});
	socket.on('update_answer_fail', function(data){

	});
	socket.on('update_answer_succeed', function(data){

	});
	socket.on('delete_answer_fail', function(data){

	});
	socket.on('delete_answer_succeed', function(data){

	});
	
	
	socket.on('create_answer_feedback_fail', function(data){

	});
	socket.on('create_answer_feedback_succeed', function(data){

	});
	socket.on('read_answers_feedback_fail', function(data){

	});
	socket.on('read_answers_feedback_succeed', function(data){

	});
	socket.on('update_answer_feedback_fail', function(data){

	});
	socket.on('update_answer_feedback_succeed', function(data){

	});
	socket.on('delete_answer_feedback_fail', function(data){

	});
	socket.on('delete_answer_feedback_succeed', function(data){

	});
	
	
	socket.on('create_story_fail', function(data){

	});
	socket.on('create_story_succeed', function(data){

	});
	socket.on('read_stories_fail', function(data){

	});
	socket.on('read_stories_succeed', function(data){

	});
	socket.on('update_story_fail', function(data){

	});
	socket.on('update_story_succeed', function(data){

	});
	socket.on('delete_story_fail', function(data){

	});
	socket.on('delete_story_succeed', function(data){

	});


	socket.on('create_story_feedback_fail', function(data){

	});
	socket.on('create_story_feedback_succeed', function(data){

	});
	socket.on('read_stories_feedback_fail', function(data){

	});
	socket.on('read_stories_feedback_succeed', function(data){

	});
	socket.on('update_story_feedback_fail', function(data){

	});
	socket.on('update_story_feedback_succeed', function(data){

	});
	socket.on('delete_story_feedback_fail', function(data){

	});
	socket.on('delete_story_feedback_succeed', function(data){

	});	
	
	
	socket.on('create_comment_fail', function(data){

	});
	socket.on('create_comment_succeed', function(data){

	});
	socket.on('read_comments_fail', function(data){

	});
	socket.on('read_comments_succeed', function(data){

	});
	socket.on('update_comment_fail', function(data){

	});
	socket.on('update_comment_succeed', function(data){

	});
	socket.on('delete_comment_fail', function(data){

	});
	socket.on('delete_comment_succeed', function(data){

	});	
	
	
	socket.on('create_comment_feedback_fail', function(data){

	});
	socket.on('create_comment_feedback_succeed', function(data){

	});
	socket.on('read_comments_feedback_fail', function(data){

	});
	socket.on('read_comments_feedback_succeed', function(data){

	});
	socket.on('update_comment_feedback_fail', function(data){

	});
	socket.on('update_comment_feedback_succeed', function(data){

	});
	socket.on('delete_comment_feedback_fail', function(data){

	});
	socket.on('delete_comment_feedback_succeed', function(data){

	});	

	
	
	
	POST.create_question = function(user_id, title, question) {
		socket.emit('create_question', {
			user_id : user_id,
			title : title,
			question : question
		});
	};
	POST.read_questions = function() {
		socket.emit('read_questions', {});
	};
	POST.update_question = function(question_id, title, question) {
		socket.emit('update_question', {
			question_id : question_id,
			title : title,
			question : question
		});
	};
	POST.delete_question = function(question_id) {
		socket.emit('delete_question', {
			question_id : question_id
		});
	};
	
	POST.create_question_feedback = function(user_id, question_id, rating) {
		socket.emit('create_question_feedback', {
			user_id : user_id,
			question_id : question_id,
			rating :rating
		});
	});
	POST.read_questions_feedback = function(question_id) {
		socket.emit('read_questions_feedback', {
			question_id : question_id
		});
	});
	POST.update_question_feedback = function(feedback_id, rating) {
		socket.emit('update_question_feedback', {
			feedback_id : feedback_id,
			rating : rating
		});
	});
	POST.delete_question_feedback = function(feedback_id) {
		socket.emit('delete_question_feedback', {
			feedback_id : feedback_id
		});
	});
		
		
		
		
		
		
		
		
		socket.emit('create_answer', {
			user_id : 
			question_id : 
			answer :
		});
		socket.emit('read_answers', {
			question_id : 
		});
		socket.emit('update_answer', {
			answer_id : 
			answer : 
		});
		socket.emit('delete_answer', {
			answer_id : 
		});
		
		socket.emit('create_answer_feedback', {
			user_id : 
			answer_id : 
			rating :
		});
		socket.emit('read_answers_feedback', {
			answer_id : 
		});
		socket.emit('update_answer_feedback', {
			feedback_id : 
			rating : 
		});
		socket.emit('delete_answer_feedback', {
			feedback_id : 
		});

		
		
		
		
		
		
		
		
		
		
		socket.emit('create_story', {
			user_id : 
			title : 
			story :
		});
		socket.emit('read_stories', {

		});
		socket.emit('update_story', {
			story_id : 
			title : 
			story : 
		});
		socket.emit('delete_story', {
			story_id : 
		});
		
		socket.emit('create_story_feedback', {
			user_id : 
			story_id : 
			rating :
		});
		socket.emit('read_stories_feedback', {
			story_id : 
		});
		socket.emit('update_story_feedback', {
			feedback_id : 
			rating : 
		});
		socket.emit('delete_story_feedback', {
			feedback_id : 
		});

		
		
		
		
		socket.emit('create_comment', {
			user_id : 
			story_id : 
			comment :
		});
		socket.emit('read_comments', {
			story_id : 
		});
		socket.emit('update_comment', {
			comment_id : 
			comment : 
		});
		socket.emit('delete_comment', {
			comment_id : 
		});
		
		socket.emit('create_comment_feedback', {
			user_id : 
			comment_id : 
			rating :
		});
		socket.emit('read_comments_feedback', {
			comment_id : 
		});
		socket.emit('update_comment_feedback', {
			feedback_id : 
			rating : 
		});
		socket.emit('delete_comment_feedback', {
			feedback_id : 
		});
}