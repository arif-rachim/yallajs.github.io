/**
 * Created by developer on 3/10/2017.
 */
var colorCombo = $inject('layout/color-combination');
var header = $inject('layout/header');

var browserSize = $inject('layout/browser-size');
var _scrollLastYPos = 0;
var _showFull = false;
var _heroHeight = browserSize.height() * 0.3;
var _heroMinHeight = 50;
var _transitionSpeed = '0.5s';

function $render(props) {

    var contentData = ['div',{
        style : {
            height : '3000px'
        }
    }
    ,'Content'];

    var content = ['div',{
        style : {
            position : 'absolute',
            top : _showFull ? _heroMinHeight+'px' : (_heroHeight)+'px',
            left : '0',
            right : '0',
            bottom : _showFull ? '0px' : '30px',
            overflow : 'auto',
            backgroundColor : 'white',
            transition : _transitionSpeed
        },
        onscroll :  yalla.debounce(function(e){
            var topPos = e.target.scrollTop;
            if(_scrollLastYPos > topPos){
                if(topPos <= _heroHeight && _showFull){
                    _showFull = false;
                    yalla.markAsDirty();
                }
            }else{
                if(topPos >= _heroHeight &&  !_showFull){
                    _showFull = true;
                    yalla.markAsDirty();
                }
            }
            _scrollLastYPos = topPos;
        },0,false)
    },contentData];

    return ['div',{
        style :{
            backgroundColor : colorCombo.base
        }
    },content,[header,{
        showFull : _showFull,
        heroHeight : _heroHeight,
        heroMinHeight : _heroMinHeight,
        transitionSpeed : _transitionSpeed
    }]]

}
