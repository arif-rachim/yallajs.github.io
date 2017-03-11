/**
 * Created by developer on 3/10/2017.
 */
var container = $inject('components/ui-container');
var item = $inject('components/ui-container-item');

var _scrollLastYPos = 0;
var _showFull = false;
var _heroHeight = 200;

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
            transition : '0.5s'
        },
        onscroll : function(e){
            var topPos = e.target.scrollTop;
            if(_scrollLastYPos > topPos){
                // its moving up
                console.log('scroll move up');
                if(_showFull){
                    console.log('We should not show full');
                    _showFull = false;
                    yalla.markAsDirty();
                }
            }else{
                // its moving down
                console.log('scroll move down');
                if(topPos > _heroHeight &&  !_showFull){
                    console.log('We should show full');
                    _showFull = true;
                    yalla.markAsDirty();
                }
            }
            _scrollLastYPos = topPos;
            console.log(_scrollLastYPos);
        }
    },contentData];

    return ['div',content,['div',{
        style : {
            position : 'absolute',
            top : _showFull ? '-'+_heroHeight+'px' : '0px',
            left : '0',
            right : '0',
            height : _heroHeight+'px',
            boxShadow : '0px 0px 5px 0px rgba(0,0,0,0.5)',
            transition : '0.5s'
        }
    },'header']]

}
