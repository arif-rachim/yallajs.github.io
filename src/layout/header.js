/**
 * Created by developer on 3/11/2017.
 */
var colorCombo = $inject('layout/color-combination');
var yallaTitle = $inject('layout/hero/yalla-title');
var yallaDescription = $inject('layout/hero/yalla-description');

function $render(props){
    var _showFull = props.showFull;
    var _heroHeight = props.heroHeight;
    var _heroMinHeight = props.heroMinHeight;
    var _transitionSpeed = props.transitionSpeed;
    var header = ['div',{
        style : {
            position : 'absolute',
            top : _showFull ? '-'+(_heroHeight-_heroMinHeight)+'px' : '0px',
            left : '0',
            right : '0',
            height : _heroHeight+'px',
            backgroundColor : _showFull ? colorCombo.heading : colorCombo.base,
            boxShadow : _showFull ? '0px 0px 10px 0px rgba(0,0,0,0.5)' : '0px 0px 10px -3px rgba(0,0,0,0.5)',
            transition : _transitionSpeed
        }
    },['div',{
        style : {
            position : 'relative',
            width : '100vw',
            height : '100%',
            overflow : 'hidden'
        }
    },[yallaTitle,{fullSize : !_showFull}],[yallaDescription,{fullSize : !_showFull}]]];

    return header;
}
