'use strict';

var _templateObject = _taggedTemplateLiteral(['\n\t\t\t<section class="todoapp">\n\t\t\t\t<header class="header">\n\t\t\t\t\t<h1>todos</h1>\n\t\t\t\t\t<input class="new-todo" placeholder="What needs to be done?" autofocus onkeyup="', '">\n\t\t\t\t</header>\n\t\t\t\t<section class="main">\n\t\t\t\t\t<input id="toggle-all" class="toggle-all" type="checkbox" onchange="', '">\n\t\t\t\t\t<label for="toggle-all">Mark all as complete</label>\n\t\t\t\t\t<ul class="todo-list">\n\t\t\t\t\t', '\n\t\t\t\t\t</ul>\n\t\t\t\t</section>\n\t\t\t\t<footer class="footer">\n\t\t\t\t\t<span class="todo-count"><strong>', '</strong> item', ' left</span>\n\t\t\t\t\t<ul class="filters">\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<a class="', '" href="#" onclick="', '">All</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<a href="#" class="', '" onclick="', '">Active</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<a href="#" class="', '" onclick="', '">Completed</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\t\t\t\t\t<button class="clear-completed" onclick="', '">Clear completed</button>\n\t\t\t\t</footer>\n\t\t\t</section>\n\t\t\t<footer class="info">\n\t\t\t\t<p>Double-click to edit a todo</p>\n\t\t\t\t<p>Created with <a href="http://yallajs.io">YallaJS</a></p>\n\t\t\t\t<p>Part of <a href="http://todomvc.com">TodoMVC</a></p>\n\t\t\t</footer>\n\t\t'], ['\n\t\t\t<section class="todoapp">\n\t\t\t\t<header class="header">\n\t\t\t\t\t<h1>todos</h1>\n\t\t\t\t\t<input class="new-todo" placeholder="What needs to be done?" autofocus onkeyup="', '">\n\t\t\t\t</header>\n\t\t\t\t<section class="main">\n\t\t\t\t\t<input id="toggle-all" class="toggle-all" type="checkbox" onchange="', '">\n\t\t\t\t\t<label for="toggle-all">Mark all as complete</label>\n\t\t\t\t\t<ul class="todo-list">\n\t\t\t\t\t', '\n\t\t\t\t\t</ul>\n\t\t\t\t</section>\n\t\t\t\t<footer class="footer">\n\t\t\t\t\t<span class="todo-count"><strong>', '</strong> item', ' left</span>\n\t\t\t\t\t<ul class="filters">\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<a class="', '" href="#" onclick="', '">All</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<a href="#" class="', '" onclick="', '">Active</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<a href="#" class="', '" onclick="', '">Completed</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\t\t\t\t\t<button class="clear-completed" onclick="', '">Clear completed</button>\n\t\t\t\t</footer>\n\t\t\t</section>\n\t\t\t<footer class="info">\n\t\t\t\t<p>Double-click to edit a todo</p>\n\t\t\t\t<p>Created with <a href="http://yallajs.io">YallaJS</a></p>\n\t\t\t\t<p>Part of <a href="http://todomvc.com">TodoMVC</a></p>\n\t\t\t</footer>\n\t\t']),
    _templateObject2 = _taggedTemplateLiteral(['\n\t\t\t\t\t\t\t<li class="', '">\n\t\t\t\t\t\t\t\t<div class="view">\n\t\t\t\t\t\t\t\t\t<input class="toggle" type="checkbox" checked="', '" onchange="', '">\n\t\t\t\t\t\t\t\t\t<label>', '</label>\n\t\t\t\t\t\t\t\t\t<button class="destroy" onclick="', '"></button>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<input class="edit" value="Create a TodoMVC template">\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t'], ['\n\t\t\t\t\t\t\t<li class="', '">\n\t\t\t\t\t\t\t\t<div class="view">\n\t\t\t\t\t\t\t\t\t<input class="toggle" type="checkbox" checked="', '" onchange="', '">\n\t\t\t\t\t\t\t\t\t<label>', '</label>\n\t\t\t\t\t\t\t\t\t<button class="destroy" onclick="', '"></button>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<input class="edit" value="Create a TodoMVC template">\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

(function (window) {
	'use strict';
	// Your starting point. Enjoy the ride!

	var _ref = new Context(),
	    html = _ref.html,
	    htmlCollection = _ref.htmlCollection;

	var todos = localStorage.getItem('todos');
	todos = todos ? JSON.parse(todos) : [];

	function guid() {
		function s4() {
			return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
		}
		return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
	}

	function saveTodo(todo) {
		todos.push({
			todo: todo,
			id: guid(),
			active: true
		});
		localStorage.setItem('todos', JSON.stringify(todos));
		update();
	}

	function persistTodo() {
		localStorage.setItem('todos', JSON.stringify(todos));
		update();
	}

	function deleteTodo(todo) {
		todos.splice(todos.indexOf(todo), 1);
		localStorage.setItem('todos', JSON.stringify(todos));
		update();
	}

	var filter = null;
	function filterTodo(_filter) {
		filter = _filter;
		update();
	}

	function filterTodos(todos) {
		var _filter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : filter;

		var _todos = todos.filter(function (todo) {
			if (_filter == 'active') {
				return todo.active == true;
			}
			if (_filter == 'completed') {
				return todo.active == false;
			}
			return true;
		});
		return _todos;
	}

	function update() {
		render(html(_templateObject, function (e) {
			if (e.keyCode == 13) {
				saveTodo(e.target.value);
				e.target.value = null;
			}
		}, function (e) {
			todos.forEach(function (t) {
				return t.active = !e.target.checked;
			});
			persistTodo();
		}, htmlCollection(filterTodos(todos, filter), 'id', function (data) {
			return html(_templateObject2, data.active ? '' : 'completed', !data.active, function (e) {
				data.active = !data.active;
				persistTodo();
			}, data.todo, function (e) {
				deleteTodo(data);
			});
		}), filterTodos(todos, 'active').length, filterTodos(todos, 'active').length > 1 ? 's' : '', filter === 'all' ? 'selected' : '', function (e) {
			filterTodo('all');
		}, filter === 'active' ? 'selected' : '', function (e) {
			filterTodo('active');
		}, filter === 'completed' ? 'selected' : '', function (e) {
			filterTodo('completed');
		}, function (e) {
			todos = todos.filter(function (todo) {
				return todo.active;
			});
			persistTodo();
		}), document.body);
	}

	update();
})(window);