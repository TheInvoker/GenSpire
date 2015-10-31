var express = require('express');
var app = express();
var path = require('path'); 



var SQL_MODULE = {
	
	sqlDetails : {
		host     : 'localhost',
		user     : 'root',
		password : 'root',
		database : 'genspire'
	},
	
	runSQL : function(socket, callback) {
		var connection = mysql.createConnection(SQL_MODULE.sqlDetails);
		connection.connect();
		
		connection.query('USE `' + SQL_MODULE.sqlDetails["database"] + '`', function(err, results) {
			if (err) {
				socket.emit('SQL_ERROR',  err.message);
			} else {
				callback(connection);
			}
		});
	}
};


var QUESTIONS_MODULE = {

	create_post : function(socket, user_id, title, question) {
		SQL_MODULE.runSQL(socket, function(connection) {
			
			var query = "INSERT INTO question (user_id, date_created, last_modified, title, question) \
						 VALUES (" + user_id + ", NOW(), NOW(), '" + connection.escape(title) + "', '" + connection.escape(question) + "')";
						 
			connection.query(query, function(err, rows, fields) {
				if (err) {
					socket.emit('create_question_fail',  err.message);
				} else {
					socket.emit('create_question_succeed',  1);
				}
				connection.end();
			});
		});
	},
	
	get_posts : function(socket) {
		SQL_MODULE.runSQL(socket, function(connection) {
			
			var query = "SELECT q.id, q.user_id, q.date_created, q.last_modified, q.title, q.question, u.first_name, u.last_name, u.profile_page, u.avatar_link \
						 FROM question q \
						 JOIN user u ON u.id=q.user_id \
						 ORDER BY q.date_created DESC";
						 
			connection.query(query, function(err, rows, fields) {
				if (err) {
					socket.emit('create_question_fail',  err.message);
				} else {
					socket.emit('create_question_succeed',  rows);
				}
				connection.end();
			});
		});
	},
	
	update_post : function(socket, question_id, title, question) {
		SQL_MODULE.runSQL(socket, function(connection) {
			
			var query = "UPDATE question SET last_modified=NOW(), title='" + connection.escape(title) + "', \
						 question='" + connection.escape(question) + "' WHERE id=" + question_id;
						 
			connection.query(query, function(err, rows, fields) {
				if (err) {
					socket.emit('update_question_fail',  err.message);
				} else {
					socket.emit('update_question_succeed',  1);
				}
				connection.end();
			});
		});
	},
	
	delete_post : function(socket, question_id) {
		SQL_MODULE.runSQL(socket, function(connection) {
			
			var query = "DELETE FROM question WHERE id=" + question_id;

			connection.query(query, function(err, rows, fields) {
				if (err) {
					socket.emit('delete_question_fail',  err.message);
				} else {
					socket.emit('delete_question_succeed',  1);
				}
				connection.end();
			});
		});
	}
};



var ANSWER_MODULE = {

	create_post : function(socket, user_id, question_id, answer) {
		SQL_MODULE.runSQL(socket, function(connection) {
			
			var query = "INSERT INTO answer (user_id, date_created, last_modified, answer, question_id) \
						 VALUES (" + user_id + ", NOW(), NOW(), '" + connection.escape(answer) + "', " + question_id + ")";
						 
			connection.query(query, function(err, rows, fields) {
				if (err) {
					socket.emit('create_answer_fail',  err.message);
				} else {
					socket.emit('create_answer_succeed',  1);
				}
				connection.end();
			});
		});
	},
	
	get_posts : function(socket, question_id) {
		SQL_MODULE.runSQL(socket, function(connection) {
			
			var query = "SELECT a.id, a.user_id, a.date_created, a.last_modified, a.answer, u.first_name, u.last_name, u.profile_page, u.avatar_link \
						 FROM answer a \
						 JOIN user u ON u.id=a.user_id \
						 WHERE a.question_id = " + question_id + " \
						 ORDER BY a.date_created ASC";
						 
			connection.query(query, function(err, rows, fields) {
				if (err) {
					socket.emit('create_answer_fail',  err.message);
				} else {
					socket.emit('create_answer_succeed',  rows);
				}
				connection.end();
			});
		});
	},
	
	update_post : function(socket, answer_id, answer) {
		SQL_MODULE.runSQL(socket, function(connection) {
			
			var query = "UPDATE answer SET last_modified=NOW(), answer='" + connection.escape(answer) + "', \
						 WHERE id=" + answer_id;
						 
			connection.query(query, function(err, rows, fields) {
				if (err) {
					socket.emit('update_answer_fail',  err.message);
				} else {
					socket.emit('update_answer_succeed',  1);
				}
				connection.end();
			});
		});
	},
	
	delete_post : function(socket, answer_id) {
		SQL_MODULE.runSQL(socket, function(connection) {
			
			var query = "DELETE FROM answer WHERE id=" + answer_id;

			connection.query(query, function(err, rows, fields) {
				if (err) {
					socket.emit('delete_answer_fail',  err.message);
				} else {
					socket.emit('delete_answer_succeed',  1);
				}
				connection.end();
			});
		});
	}
};




var STORY_MODULE = {

	create_post : function(socket, user_id, title, story) {
		SQL_MODULE.runSQL(socket, function(connection) {
			
			var query = "INSERT INTO story (user_id, date_created, last_modified, title, story) \
						 VALUES (" + user_id + ", NOW(), NOW(), '" + connection.escape(title) + "', '" + connection.escape(story) + "')";
						 
			connection.query(query, function(err, rows, fields) {
				if (err) {
					socket.emit('create_story_fail',  err.message);
				} else {
					socket.emit('create_story_succeed',  1);
				}
				connection.end();
			});
		});
	},
	
	get_posts : function(socket) {
		SQL_MODULE.runSQL(socket, function(connection) {
			
			var query = "SELECT s.id, s.user_id, s.date_created, s.last_modified, s.title, s.story, u.first_name, u.last_name, u.profile_page, u.avatar_link \
						 FROM story s \
						 JOIN user u ON u.id=s.user_id \
						 ORDER BY s.date_created DESC";
						 
			connection.query(query, function(err, rows, fields) {
				if (err) {
					socket.emit('create_story_fail',  err.message);
				} else {
					socket.emit('create_story_succeed',  rows);
				}
				connection.end();
			});
		});
	},
	
	update_post : function(socket, story_id, title, story) {
		SQL_MODULE.runSQL(socket, function(connection) {
			
			var query = "UPDATE story SET last_modified=NOW(), title='" + connection.escape(title) + "', \
						 story='" + connection.escape(story) + "' WHERE id=" + story_id;
						 
			connection.query(query, function(err, rows, fields) {
				if (err) {
					socket.emit('update_story_fail',  err.message);
				} else {
					socket.emit('update_story_succeed',  1);
				}
				connection.end();
			});
		});
	},
	
	delete_post : function(socket, story_id) {
		SQL_MODULE.runSQL(socket, function(connection) {
			
			var query = "DELETE FROM story WHERE id=" + story_id;

			connection.query(query, function(err, rows, fields) {
				if (err) {
					socket.emit('delete_story_fail',  err.message);
				} else {
					socket.emit('delete_story_succeed',  1);
				}
				connection.end();
			});
		});
	}
};


var COMMENT_MODULE = {

	create_post : function(socket, user_id, story_id, comment) {
		SQL_MODULE.runSQL(socket, function(connection) {
			
			var query = "INSERT INTO comment (user_id, date_created, last_modified, comment, story_id) \
						 VALUES (" + user_id + ", NOW(), NOW(), '" + connection.escape(comment) + "', " + story_id + ")";
						 
			connection.query(query, function(err, rows, fields) {
				if (err) {
					socket.emit('create_comment_fail',  err.message);
				} else {
					socket.emit('create_comment_succeed',  1);
				}
				connection.end();
			});
		});
	},
	
	get_posts : function(socket, story_id) {
		SQL_MODULE.runSQL(socket, function(connection) {
			
			var query = "SELECT c.id, c.user_id, c.date_created, c.last_modified, c.comment, u.first_name, u.last_name, u.profile_page, u.avatar_link \
						 FROM comment c \
						 JOIN user u ON u.id=c.user_id \
						 WHERE c.story_id = " + story_id + " \
						 ORDER BY c.date_created ASC";
						 
			connection.query(query, function(err, rows, fields) {
				if (err) {
					socket.emit('create_comment_fail',  err.message);
				} else {
					socket.emit('create_comment_succeed',  rows);
				}
				connection.end();
			});
		});
	},
	
	update_post : function(socket, comment_id, comment) {
		SQL_MODULE.runSQL(socket, function(connection) {
			
			var query = "UPDATE comment SET last_modified=NOW(), comment='" + connection.escape(comment) + "', \
						 WHERE id=" + comment_id;
						 
			connection.query(query, function(err, rows, fields) {
				if (err) {
					socket.emit('update_comment_fail',  err.message);
				} else {
					socket.emit('update_comment_succeed',  1);
				}
				connection.end();
			});
		});
	},
	
	delete_post : function(socket, comment_id) {
		SQL_MODULE.runSQL(socket, function(connection) {
			
			var query = "DELETE FROM comment WHERE id=" + comment_id;

			connection.query(query, function(err, rows, fields) {
				if (err) {
					socket.emit('delete_comment_fail',  err.message);
				} else {
					socket.emit('delete_comment_succeed',  1);
				}
				connection.end();
			});
		});
	}
};







app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
	var dest = 'index.html';
	res.sendFile(dest, { root: __dirname });
});

var server = app.listen(3000, function () {
	var host = server.address().address;
	var port = server.address().port;

	console.log('GenSpire started at http://%s:%s', host, port);
});

var io = require('socket.io').listen(server);








io.on('connection', function(socket){
	console.log('a user connected');

	
	
	
	socket.on('create_question', function(data){
		QUESTIONS_MODULE.create_post(socket, data.user_id, data.title, data.question);
	});
	socket.on('get_questions', function(data){
		QUESTIONS_MODULE.get_posts(socket);
	});
	socket.on('update_question', function(data){
		QUESTIONS_MODULE.update_post(socket, data.post_id, data.title, data.question);
	});
	socket.on('delete_question', function(data){
		QUESTIONS_MODULE.delete_post(socket, data.post_id);
	});

	
	socket.on('create_answer', function(data){
		ANSWER_MODULE.create_post(socket, data.user_id, data.question_id, data.answer);
	});
	socket.on('get_answer', function(data){
		ANSWER_MODULE.get_posts(socket, data.question_id);
	});
	socket.on('update_answer', function(data){
		ANSWER_MODULE.update_post(socket, data.answer_id, data.answer);
	});
	socket.on('delete_answer', function(data){
		ANSWER_MODULE.delete_post(socket, data.answer_id);
	});
	
	
	socket.on('create_story', function(data){
		STORY_MODULE.create_post(socket, data.user_id, data.title, data.story);
	});
	socket.on('get_stories', function(data){
		STORY_MODULE.get_posts(socket);
	});
	socket.on('update_story', function(data){
		STORY_MODULE.update_post(socket, data.story_id, data.title, data.story);
	});
	socket.on('delete_story', function(data){
		STORY_MODULE.delete_post(socket, data.story_id);
	});
	
	
	socket.on('create_comment', function(data){
		COMMENT_MODULE.create_post(socket, data.user_id, data.story_id, data.comment);
	});
	socket.on('get_comments', function(data){
		COMMENT_MODULE.get_posts(socket, data.story_id);
	});
	socket.on('update_comment', function(data){
		COMMENT_MODULE.update_post(socket, data.comment_id, data.comment);
	});
	socket.on('delete_comment', function(data){
		COMMENT_MODULE.delete_post(socket, data.comment_id);
	});
	
	
	
	
	
	socket.on('disconnect', function() {
		console.log('a user left');
	});
});