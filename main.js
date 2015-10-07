angular.module('todoApp', [])
	.controller('todoController', function () {
		var self = this;

		self.todoList = [
			{ text: 'Learn HTML5', isDone: false },
			{ text: 'Learn JavaScript', isDone: false },
			{ text: 'Learn AngularJs', isDone: false }
		];

		self.addTodo = function () {
			if(!self.todoText ||self.todoText == '') return;
			self.todoList.push({ text: self.todoText, isDone: false });
			self.todoText = "";
		};

		self.remaining = function () {
			var count = 0;
			angular.forEach(self.todoList, function (todo) {
				count += todo.isDone ? 1 : 0;
			});
			return count;
		};

		self.archive = function () {
			var oldTodoList = self.todoList;
			self.todoList = [];
			angular.forEach(oldTodoList, function (todo) {
				if (!todo.isDone) {
					self.todoList.push(todo);
				}
			});
		};
	});