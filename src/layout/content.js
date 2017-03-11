/**
 * Created by developer on 3/10/2017.
 */
var container = $inject('components/ui-container');
var item = $inject('components/ui-container-item');

var _scrollLastYPos = 0;
var _showFull = false;
var _heroHeight = 400;
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
            top : _showFull ? '0px' : _heroHeight+'px',
            left : '0',
            right : '0',
            bottom : _showFull ? '0px' : '30px',
            backgroundColor : '#CCCCCC',
            overflow : 'auto',
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
        },100,false)
    },contentData];

    return ['div',content,['div',{
        style : {
            position : 'absolute',
            top : _showFull ? '-'+_heroHeight+'px' : '0px',
            left : '0',
            right : '0',
            height : _heroHeight+'px',
            boxShadow : '0px 0px 5px 0px rgba(0,0,0,0.5)',
            transition : _transitionSpeed
        }
    },'header']]

}
