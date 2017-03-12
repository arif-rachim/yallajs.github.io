/**
 * Created by developer on 3/12/2017.
 */
function $render(props){
    var showFull = props.showFull;
    return ['div',{
        style : {
            textAlign : 'center',
        }
    },['div',{
        style : {
            position : 'relative',
            fontSize: showFull ? '45px' : '200px',
            transition : '0.5s',
            bottom : showFull ? '-10px' : '0px',
            fontWeight : showFull ? '300' : '100'
        }
    },'Yalla!'],['div',{
        style : {
            fontSize : showFull ? '0':'35px',
            opacity : showFull ? '0':'1',
            transition : '0.5s',
            margin : '10px',
            fontWeight : '300'
        }
    },'Build unidirectional app with stateles components']]
}