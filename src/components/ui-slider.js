
/**
 * Created by gal2729 on 3/1/2017.
 */
function $render(params){
    var open = params.open || 'true';
    open = (open == 'true');
    return ['div',{
        style : {
            position : 'absolute',
            top : 0,
            left : 0,
            right : 0,
            bottom : 0,
            transform : transformX(open),

            backgroundColor : '#FFFFFF',
            transition : 'all 0.5s ease-out'
        },
        moveSlider : function(open){
            this.style.transform = transformX(open);
        }
    }].concat(params.$children);
};

function transformX(open) {
    return open ? 'translateX(0)' : 'translateX(-100%)'
}

function getOpacity(open) {
    return open ? '1' : '0'
}
