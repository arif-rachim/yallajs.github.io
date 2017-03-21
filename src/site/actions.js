var store = yalla.createStore(function(prevState,action){
    var newState = yalla.clone(prevState);
    if(action.type == 'openMenu'){
        newState.displayMenu = true;
    }
    if(action.type == 'closeMenu'){
        newState.displayMenu = false;
    }

    if(action.type == 'toggle'){
        newState.displayMenu = !newState.displayMenu;
    }

    return newState;
},{
    displayMenu : false
});


store.openMenu = function(){
    store.dispatch({
        type : 'openMenu'
    });
};

store.closeMenu = function(){
    store.dispatch({
        type : 'closeMenu'
    });
};

store.toggleMenu = function () {
    store.dispatch({
        type : 'toggle'
    })
};

store.openMenu = function(location){
    document.location = location;
    store.closeMenu();

}

$export = store;