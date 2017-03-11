/**
 * Created by developer on 3/11/2017.
 */
function $render(props){
    var fullSize = props.fullSize;
    return ['div',{
        style : {
            position : 'absolute',
            bottom : fullSize ? '50%' : '10px' ,
            left : fullSize ? '50%' : '10px',
            transform : fullSize ? 'translateY(50%) translateX(-50%)' : '',
            transition : '0.5s',
            fontSize : fullSize ? '2em' : '0.7em',
            fontWeight : fullSize ? '100' : '300',
        }
    },'Yalla JS']
}