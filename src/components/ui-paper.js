/**
 * Created by arif on 3/1/2017.
 */

function $render(params){
    var depth = params.depth || 0.1;
    var style = params.style || {};
    var children = params.$children || ['hello'];
    var circle = params.circle || 'false';
    var type = params.type || 'default';
    var shadow = {
        boxShadow : setShadowDepth(depth),
        display : 'inline-block',
        padding : '0.5em',
        transition : 'box-shadow 0.1s ease-out',
        borderRadius : circle == 'true' ? '1000px' : '0px',
        backgroundColor : '#EEEEEE'
    };

    yalla.merge(shadow,style);
    depth = parseFloat(depth);
    return ['div',{
        style : shadow,
        setDepth : function(depth){
            this.style.boxShadow = setShadowDepth(depth);
        }
    }].concat(children);
}

function setShadowDepth(depth){
    return '0px '+depth*2+'px '+depth*5+'px 0px rgba(0,0,0,0.5)';
}