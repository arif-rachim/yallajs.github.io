/**
 * Created by developer on 3/11/2017.
 */
var header = $inject('layout/header')
var content = $inject('layout/content');
var headerHeight = 0;
var headerHeightWhenSmall = 100;
var _lastScrollPos = 0;
var _showFull = false;

var containerStyle = function (full) {
    var top = headerHeightWhenSmall - headerHeight;
    return {
        'display': '-ms-flexbox',
        'display': '-webkit-flex',
        'display': 'flex',
        '-webkit-flex-direction': 'column',
        '-ms-flex-direction': 'column',
        'flex-direction': 'column',
        '-webkit-flex-wrap': 'nowrap',
        '-ms-flex-wrap': 'nowrap',
        'flex-wrap': 'nowrap',
        '-webkit-justify-content': 'flex-start',
        '-ms-flex-pack': 'start',
        'justify-content': 'flex-start',
        '-webkit-align-content': 'stretch',
        '-ms-flex-line-pack': 'stretch',
        'align-content': 'stretch',
        '-webkit-align-items': 'flex-start',
        '-ms-flex-align': 'start',
        'align-items': 'flex-start',
        'position': 'absolute',
        'top': '0px',
        'left': '0px',
        'right': '0px',
        'bottom': '0px',
        'transition': '0.5s'
    }
};

var contentStyle = function (full) {
    return {
        '-webkit-order': '0',
        '-ms-flex-order': '0',
        'order': '0',
        '-webkit-flex': '1 1 auto',
        '-ms-flex': '1 1 auto',
        'flex': '1 1 auto',
        '-webkit-align-self': 'stretch',
        '-ms-flex-item-align': 'stretch',
        'align-self': 'stretch',
        'backgroundColor': 'white',
        'position': 'relative',
        boxShadow : full ? 'inset 0px 0px 10px 0px rgba(0,0,0,.5)' : '',
        transition : '0.5s'
    }
};

var headerStyle = function (full) {
    return {
        '-webkit-order': '0',
        '-ms-flex-order': '0',
        'order': '0',
        '-webkit-flex': '0 1 auto',
        '-ms-flex': '0 1 auto',
        'flex': '0 1 auto',
        '-webkit-align-self': 'stretch',
        '-ms-flex-item-align': 'stretch',
        'align-self': 'stretch',
        backgroundColor : '#FCFCFC',
        borderBottom : '1px solid #DDDDDD'

    };
};

var markDirty = yalla.debounce(yalla.markAsDirty,100,true);

function $render(props) {
    var full = props.full == 'true';
    return ['div', {
        style: containerStyle(_showFull)

    }, ['div', {
        style: headerStyle(_showFull),
        onload: function (e) {
            headerHeight = e.clientHeight;
        }
    }, ['div', [header,{
        showFull : _showFull
    }]]],
        ['div', {
            style: contentStyle(_showFull)
        }, ['div', {
            style: {
                position: 'absolute',
                top: '0',
                left: '0',
                right: '0',
                bottom: '0',
                overflow: 'auto'
            },
            onscroll : function(e){
                var scrollPos = e.target.scrollTop;
                if(_lastScrollPos < scrollPos){
                    if(scrollPos >= headerHeight){
                        _showFull = true;
                        markDirty();
                    }
                }else{
                    if(scrollPos <= headerHeight){
                        _showFull = false;
                        markDirty();
                    }
                }
                _lastScrollPos = scrollPos;
            }
        }, [content]]]
    ];
}