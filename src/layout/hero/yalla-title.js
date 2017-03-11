/**
 * Created by developer on 3/11/2017.
 */
var colorCombo = $inject('layout/color-combination');
function $render(props){
    var fullSize = props.fullSize;
    return ['div',{
        style : {
            position : 'absolute',
            bottom : fullSize ? '50%' : '10px' ,
            left : fullSize ? '50%' : '10px',
            transform : fullSize ? 'translateY(25%) translateX(-50%)' : 'translateY(0) translateX(0)',
            "-webkit-transform" : fullSize ? 'translateY(25%) translateX(-50%)' : 'translateY(0) translateX(0)',
            transition : '0.5s',
            fontSize : fullSize ? '2.2em' : '0.7em',
            fontWeight : fullSize ? '100' : '300',
            color : colorCombo.font
        }
    },'Yalla JS']
}