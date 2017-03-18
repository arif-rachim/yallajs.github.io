/**
 * Created by developer on 3/18/2017.
 */

var store = yalla.createStore(function(prevState,action){
    var state = yalla.clone(prevState);
    if(action.type == 'add'){
        state.todos.push({
            todo : action.todo,
            complete : false
        });
    }
    return state;
},{
    todos : []
});

store.subscribe(function(){
    yalla.markAsDirty();
});

$export = {
    onSubmit : function (e) {

        var todoText = e.target.elements.addText.value;
        e.target.elements.addText.value = '';
        store.dispatch({
            type : 'add',
            todo : todoText
        });
        //return false;
        return false;
    },
    getStoreState : function(){
        return store.getState();
    },
    removeItem : function(index){
        alert(index);
    }
};