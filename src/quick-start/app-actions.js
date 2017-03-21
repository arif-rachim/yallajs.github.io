
var initialState = {
    todos : [
        {
            todo : 'Sample One',
            complete : false
        },
        {
            todo : 'Sample Two',
            complete : true
        }
    ]
};

var reducer = function(prevState,action){
    var newState = yalla.clone(prevState);
    switch (action.type){
        case 'add' : {
            newState.todos.push({
                todo : action.todo,
                complete : false
            });
            break;
        }
        case 'remove' : {
            newState.todos.splice(action.index,1);
            break;
        }
        case 'toggleMark' : {
            var todoItem = newState.todos[action.index];
            todoItem.complete = !todoItem.complete;
            break;
        }
    }
    return newState;
}

var store = yalla.createStore(reducer,initialState);

var actions = {
    addTodo : function(text){
        store.dispatch({
            type : 'add',
            todo : text
        });
    },
    submit : function(text){
        this.addTodo(text);
        return false;
    },
    removeTodo : function(index){
        store.dispatch({
            type : 'remove',
            index : index
        })
    },
    toggleTodo : function (index){
        store.dispatch({
            type : 'toggleMark',
            index : index
        })
    },
    getState : function(){
        return store.getState();
    }
}

$export = actions;