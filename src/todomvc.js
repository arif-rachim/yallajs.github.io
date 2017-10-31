(function (window) {
	'use strict';
	// Your starting point. Enjoy the ride!
	let {html,htmlCollection} = new Context();

	let todos = localStorage.getItem('todos');
	todos = todos ? JSON.parse(todos) : [];

	function guid() {
		function s4() {
			return Math.floor((1 + Math.random()) * 0x10000)
				.toString(16)
				.substring(1);
		}
		return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
			s4() + '-' + s4() + s4() + s4();
	}

	function saveTodo(todo){
		todos.push({
			todo : todo,
			id : guid(),
			active : true
		});
		localStorage.setItem('todos',JSON.stringify(todos));
		update();
	}

	function persistTodo(){
		localStorage.setItem('todos',JSON.stringify(todos));
		update();
	}

	function deleteTodo(todo){
		todos.splice(todos.indexOf(todo),1);
		localStorage.setItem('todos',JSON.stringify(todos));
		update();
	}

	let filter = null;
	function filterTodo(_filter) {
		filter = _filter;
		update();
	}

	function filterTodos(todos,_filter = filter){
		let _todos = todos.filter(todo =>{
			if(_filter == 'active'){
				return todo.active == true;
			}
			if(_filter == 'completed'){
				return todo.active == false;
			}
			return true;
		})
		return _todos;
	}

	function update(){
		render(html`
			<section class="todoapp">
				<header class="header">
					<h1>todos</h1>
					<input class="new-todo" placeholder="What needs to be done?" autofocus onkeyup="${e => {
						if(e.keyCode == 13){
							saveTodo(e.target.value);
							e.target.value = null;
						}
					}}">
				</header>
				<section class="main">
					<input id="toggle-all" class="toggle-all" type="checkbox" onchange="${e => {
						todos.forEach(t => t.active = !e.target.checked);
						persistTodo();
					}}">
					<label for="toggle-all">Mark all as complete</label>
					<ul class="todo-list">
					${htmlCollection(filterTodos(todos,filter),'id',(data) => {
							return html`
							<li class="${data.active ? '' : 'completed'}">
								<div class="view">
									<input class="toggle" type="checkbox" checked="${!data.active}" onchange="${e => {
										data.active = !data.active;
										persistTodo();
										
									}}">
									<label>${data.todo}</label>
									<button class="destroy" onclick="${e => {
										deleteTodo(data);
									}}"></button>
								</div>
								<input class="edit" value="Create a TodoMVC template">
							</li>
							`;
						})}
					</ul>
				</section>
				<footer class="footer">
					<span class="todo-count"><strong>${filterTodos(todos,'active').length}</strong> item${filterTodos(todos,'active').length > 1 ? 's':''} left</span>
					<ul class="filters">
						<li>
							<a class="${filter === 'all' ? 'selected' : ''}" href="#" onclick="${e => {
								filterTodo('all');
							}}">All</a>
						</li>
						<li>
							<a href="#" class="${filter === 'active' ? 'selected' : ''}" onclick="${e => {
								filterTodo('active');
							}}">Active</a>
						</li>
						<li>
							<a href="#" class="${filter === 'completed' ? 'selected' : ''}" onclick="${e => {
								filterTodo('completed');
							}}">Completed</a>
						</li>
					</ul>
					<button class="clear-completed" onclick="${e => {
						todos = todos.filter(todo => todo.active);
						persistTodo();
					}}">Clear completed</button>
				</footer>
			</section>
			<footer class="info">
				<p>Double-click to edit a todo</p>
				<p>Created with <a href="http://yallajs.io">YallaJS</a></p>
				<p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
			</footer>
		`,document.body);
	}

	update();
})(window);
