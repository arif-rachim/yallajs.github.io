/**
 * Created by developer on 3/11/2017.
 */
var colorCombo = $inject('layout/color-combination');
function $render(props){
    var fullSize = props.fullSize;
    return ['div',{
        style : {
            position : 'absolute',
            bottom : fullSize ? '0.5em' : '-5em' ,
            left : '1em',
            right : '1em',
            opacity : fullSize ? '1' : '0',
            textAlign : 'center',
            transition : '0.5s',
            fontSize : fullSize ? '0.8em' : '1em',
            fontWeight : fullSize ? '100' : '300',
            color : colorCombo.font
        }
    },'Build unidirectional data flow web application with composite stateless components']
}