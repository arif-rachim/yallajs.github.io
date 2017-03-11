/**
 * Created by gal2729 on 3/2/2017.
 */
function $render(params) {
    var title = params.title || 'Placeholder';
    var type = params.type || 'text';
    var value = params.value || '';
    var hasText = value.length > 0;
    var width = params.width || '100%';
    var height = params.height || '2.5em';
    var onchange = params.onchange;

    return ['div', {
        style: {
            position: 'relative',
            display: 'inline-block',
            width : width,
            height : height
        }
    }, ['input', {
        style: {
            border: 'none',
            borderBottom: '1px solid #CCCCCC',
            outline: 'none',
            padding: '0px',
            width : width,
            position : 'absolute',
            bottom : 0,
            fontSize : '1em',
            color : '#333333'
        },
        onfocus: function (e) {
            introduceFocusHighlight(e);
            movePlaceHolderAsTitle(true,e);
        },
        onblur : function(e){
            var hasText = e.target.value && e.target.value.length > 0;
            movePlaceHolderAsTitle(hasText,e);
        },
        onkeyup : function(e){
            if(e.keyCode == 9){
                return;
            }
            if(onchange){
                onchange(e.target.value);
            }
        },
        type: type,
        value : value
    }], ['div', {
        style: {
            position: 'absolute',
            bottom: getBottomPosition(hasText),
            left: '0px',
            color: 'rgba(0,0,0,0.7)',
            pointerEvents: 'none',
            transition: 'all 0.2s ease-out',
            fontSize : getFontSize(hasText)
        }
    }, title]]
}

function getFontSize(hasText){
    return hasText ? '0.7em':'1em';
}

function getBottomPosition(hasText){
    return hasText ? '20px':'0px';
}

function movePlaceHolderAsTitle(hasText,e) {
    var sibling = e.target.nextSibling;
    var style = sibling.style;
    style.fontSize = getFontSize(hasText);
    style.bottom = getBottomPosition(hasText);
}

function introduceFocusHighlight(e) {
    var div = document.createElement('div');
    div.addEventListener('transitionend', function (e) {
        if(e.target.parentNode){
            e.target.parentNode.removeChild(e.target);
        }
        //e.target.remove();
    });
    var style = div.style;
    style.position = 'absolute';
    style.height = '2px';
    style.width = '1px';
    style.bottom = '0px';
    style.left = '50%';
    style.transform = 'translateX(-50%)';
    style.transition = 'all 0.3s ease-out';
    style.backgroundColor = 'blue';
    setTimeout(function () {
        style.width = '100%';
        style.backgroundColor = 'rgba(255,255,255,0)';

    }, 0);
    e.target.parentElement.appendChild(div);

}
