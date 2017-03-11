/**
 * Created by gal2729 on 3/2/2017.
 */
var icon = $inject('components/ui-icon');

function $render(props){
    var propsSelected = props.selected == 'true' || false;

    var store = props.$store(reducer,{selected:propsSelected});

    var state = store.getState();
    var selected = state.selected;
    return ['div',{
        style : {
            display : 'inline-block',
            position : 'relative'
        }
    },['input',{
        type : 'checkbox',
        style : {
            width : '24px',
            height : '24px',
            margin : '0px',
            padding : '0px',
            outline: 'none',
            opacity : 0
        },
        value : selected ? 'on' : 'off',
        onchange : function(){
            store.dispatch({
                type : 'change'
            })
        }
    }],['div',{
        style : {
            position : 'absolute',
            top : '0px',
            left : '0px',
            right : '0px',
            bottom : '0px',
            pointerEvents : 'none'
        }
    },[icon,{icon : selected ? 'check_box' : 'check_box_outline_blank',size:'medium'}]],[props.$subView]]
}


var reducer = function(state,action){
    var newState = yalla.clone(state);
    if(action.type=='change'){
        newState.selected = !state.selected;
    }
    return newState;
}