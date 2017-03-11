/**
 * Created by gal2729 on 3/1/2017.
 */
var paper = $inject('components/ui-paper');
var ripple = $inject('components/ui-ripple-effect');

function $render(params) {
    var store = params.$store(reducer,{depth:0.1});
    var state = store.getState();
    var mouseOver = params.mouseOver;
    var onclick = params.onclick;
    var label = params.label || 'label';

    return ['div',{
        style : {
            display : 'inline-block',
            position : 'relative'
        },
        onclick : onclick
    },
        ['input',{type : 'button',style : {position : 'absolute',left : '0', top:'0',opacity:'0'},
            onfocus : function(e){
                store.dispatch({
                    type : 'move-up'
                });
            },
            onblur : function(e){
                store.dispatch({
                    type : 'move-down'
                });
            },
            onkeydown : function(e){
                store.dispatch({
                    type : 'move-down'
                });
            },
            onkeyup : function(e){
                store.dispatch({
                    type : 'move-up'
                });
            }
        }],
        [paper,{depth:state.depth},['div',label]],[ripple,{
        onmouseover : function(e){
            store.dispatch({
                type : 'move-up'
            });
        },
        onmouseout : function(e){
            store.dispatch({
                type : 'move-down'
            });
        },
        onmousedown : function(e){
            store.dispatch({
                type : 'move-down'
            });
        },
        onmouseup : function(e){
            store.dispatch({
                type : 'move-up'
            });
        }

    }]];
}

function reducer(state,action){
    var newState = yalla.clone(state);
    if(action.type == 'move-up'){
        newState.depth = 1;
    }
    if(action.type == 'move-down'){
        newState.depth = 0.1;
    }
    return newState;
}