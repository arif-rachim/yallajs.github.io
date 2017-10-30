'use strict';

var _templateObject = _taggedTemplateLiteral(['<div style="margin:auto;width:320px;margin-top:50px">\n                            <form class="form-inline" onsubmit="', '" >\n                                <div class="form-group row" >\n                                    <input class="form-control" type="text" name="todo" value="" placeholder="Todo item" />\n                                    <div style="text-align: right;margin-top: 10px">\n                                    <input type="submit" value="Save" class="btn btn-primary"/>\n                                    </div>\n                                </div>\n                            </form>\n\n                            <p>\n                            <ul style="margin-left: -40px">\n                                ', '\n                            </ul>\n                            </p>\n\n            </div>'], ['<div style="margin:auto;width:320px;margin-top:50px">\n                            <form class="form-inline" onsubmit="', '" >\n                                <div class="form-group row" >\n                                    <input class="form-control" type="text" name="todo" value="" placeholder="Todo item" />\n                                    <div style="text-align: right;margin-top: 10px">\n                                    <input type="submit" value="Save" class="btn btn-primary"/>\n                                    </div>\n                                </div>\n                            </form>\n\n                            <p>\n                            <ul style="margin-left: -40px">\n                                ', '\n                            </ul>\n                            </p>\n\n            </div>']),
    _templateObject2 = _taggedTemplateLiteral(['<li id="', '" style="text-decoration: ', '">\n                                        <button class="btn btn-default" onclick="', '" data-id="', '">Done</button>\n                                        <button class="close" onclick="', '" data-id="', '" style="margin-top: 7px"><span aria-hidden="true">&times;</span></button>\n                                        ', '\n                                        </li>'], ['<li id="', '" style="text-decoration: ', '">\n                                        <button class="btn btn-default" onclick="', '" data-id="', '">Done</button>\n                                        <button class="close" onclick="', '" data-id="', '" style="margin-top: 7px"><span aria-hidden="true">&times;</span></button>\n                                        ', '\n                                        </li>']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var dom = document.createElement('div');
document.getElementsByTagName('body')[0].appendChild(dom);

var todos = [{ id: Math.round(Math.random() * 1000000), todo: 'Todo app testing sample data one', done: false }, { id: Math.round(Math.random() * 1000000), todo: 'Todo app testing sample data two', done: true }, { id: Math.round(Math.random() * 1000000), todo: 'Todo app testing sample data three', done: false }];

function toggleDone(e) {
    var id = e.target.getAttribute('data-id');

    var styleBefore = document.getElementById(id).getAttribute('style');
    var selectedTodo = todos.filter(function (t) {
        return t.id == id;
    })[0];
    selectedTodo.done = !selectedTodo.done;
    update().then(function () {
        var styleAfter = document.getElementById(id).getAttribute('style');
    });
}

function deleteTodo(e) {
    var id = e.target.getAttribute('data-id');

    var selectedTodo = todos.filter(function (t) {
        return t.id == id;
    })[0];
    var index = todos.indexOf(selectedTodo);
    todos.splice(index, 1);
    update();
}

function addTodo(e) {
    todos.push({ id: Math.round(Math.random() * 1000000), todo: e.target.elements.todo.value, done: false });
    update();
    e.target.elements.todo.value = '';
    return false;
}

var context = new Context();
var html = context.html();
var htmlCollection = context.htmlCollection();

var app = function app() {
    return html(_templateObject, addTodo, htmlCollection(todos, 'id', function (todo, index) {
        return html(_templateObject2, todo.id, todo.done ? 'line-through' : '', toggleDone, todo.id, deleteTodo, todo.id, todo.todo);
    }));
};

function update() {
    return render(app(), dom);
}

update();