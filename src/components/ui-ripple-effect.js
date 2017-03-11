/**
 * Created by arif on 3/1/2017.
 */

function onclick(e) {
    var x = (e.offsetX);
    var y = (e.offsetY);
    var target = e.target;

    var newDiv = document.createElement('div');
    newDiv.addEventListener('transitionend',function(e){
        if(e.target.parentNode){
            e.target.parentNode.removeChild(e.target);
        }
    });
    var style = newDiv.style;
    style.position = 'absolute';
    style.top = y+'px';
    style.left = x+'px';
    style.width = '2px';
    style.height = '2px';
    style.borderRadius = '5px';
    style.backgroundColor = 'rgba(200,200,200,0.7)';
    style.transform = 'scale(1)';
    style.transition = 'all 0.3s ease-out';
    style.pointerEvents = 'none';
    target.appendChild(newDiv);
    setTimeout(function(){
        style.transform = 'scale(100)';
        style.backgroundColor = 'rgba(255,255,255,0)';
    },0);
}

function $render(params) {
    var onmouseover = params.onmouseover || function(){};
    var onmouseout = params.onmouseout || function(){};
    var onmousedown = params.onmousedown || function(){};
    var onmouseup = params.onmouseup || function(){};
    return ['div', {
        style: {
            position : 'absolute',
            display: 'inline-block',
            top : '0px',
            left : '0px',
            right : '0px',
            bottom : '0px',
            overflow : 'hidden'
        },
        onclick: function(e){
            onclick(e);
        },
        onmouseover : function(e){
            onmouseover(e);
        },
        onmouseout : function(e){
            onmouseout(e);
        },
        onmousedown : function(e){
            onmousedown(e);
        },
        onmouseup : function(e){
            onmouseup(e);
        }
    }]
}