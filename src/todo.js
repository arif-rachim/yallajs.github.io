
let dom = document.createElement('div');
document.getElementsByTagName('body')[0].appendChild(dom);

let todos = [
    {id:Math.round(Math.random()*1000000),todo : 'Todo app testing sample data one',done : false},
    {id:Math.round(Math.random()*1000000),todo : 'Todo app testing sample data two',done : true},
    {id:Math.round(Math.random()*1000000),todo : 'Todo app testing sample data three',done : false},
];

function toggleDone(e){
    let id = e.target.getAttribute('data-id');

    let styleBefore = document.getElementById(id).getAttribute('style');
    let selectedTodo = todos.filter(t => t.id == id)[0];
    selectedTodo.done = !selectedTodo.done;
    update().then(function(){
        let styleAfter = document.getElementById(id).getAttribute('style');
    });
}

function deleteTodo(e){
    let id = e.target.getAttribute('data-id');

    let selectedTodo = todos.filter(t => t.id == id)[0];
    let index = todos.indexOf(selectedTodo);
    todos.splice(index,1);
    update();
}

function addTodo(e){
    todos.push({id:Math.round(Math.random()*1000000),todo : e.target.elements.todo.value ,done : false});
    update();
    e.target.elements.todo.value = '';
    return false;
}

let app = () => html`<div style="margin:auto;width:320px;margin-top:50px">
                            <form class="form-inline" onsubmit="${addTodo}" >
                                <div class="form-group row" >
                                    <input class="form-control" type="text" name="todo" value="" placeholder="Todo item" />
                                    <div style="text-align: right;margin-top: 10px">
                                    <input type="submit" value="Save" class="btn btn-primary"/>
                                    </div>
                                </div>
                            </form>

                            <p>
                            <ul style="margin-left: -40px">
                                ${htmlCollection(todos,'id',(todo,index)=>{
    return html`<li id="${todo.id}" style="text-decoration: ${todo.done ? 'line-through' : ''}">
                                        <button class="btn btn-default" onclick="${toggleDone}" data-id="${todo.id}">Done</button>
                                        <button class="close" onclick="${deleteTodo}" data-id="${todo.id}" style="margin-top: 7px"><span aria-hidden="true">&times;</span></button>
                                        ${todo.todo}
                                        </li>`
})}
                            </ul>
                            </p>

            </div>`;

function update(){
    return render(app(),dom);
}

update();

