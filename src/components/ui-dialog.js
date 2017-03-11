/**
 * Created by developer on 3/9/2017.
 */
var paper = $inject('components/ui-paper');
var panel = $inject('components/ui-title-panel');
function $render(props){
    var visible = props.visible == 'true';
    return visible ? ['div',{
        style  : {
            position : 'fixed',
            top : '0',
            left : '0',
            width : '100vw',
            height : '100vh',
            backgroundColor : 'rgba(0,0,0,0.5)'
        }
    },['div',{
        style : {
            position : 'relative',
            display : 'inline-block',
            top : '50%',
            left : '50%',
            transform : 'translateX(-50%) translateY(-50%)',
            background : 'white',
            width : '300px'
        }
    },[panel].concat(props.$children)]]:['div',{style:{display:'none'}}]
}