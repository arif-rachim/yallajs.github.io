/**
 * Created by gal2729 on 3/1/2017.
 */

function $render(params){
    var title = params.title || 'title';
    var children = params.$children;
    var width = params.width || '100%';
    var height = params.height;
    var margin = params.margin;
    return ['div',{
        style : {
            position : 'relative',
            width : width,
            backgroundColor : 'blue',
        }
    },['div',{
        style : {
            position : 'absolute',
            backgroundColor : '#FFFFFF',
            display:'inline-block',
            border : '1px solid #CECECE',
            boxShadow : '0px 2px 2px 0px rgba(0,0,0,0.2)',
            left : '0px',
            right : '0px',
            top : '0px',
            margin : margin

        }
    },['div',{
        style : {
            borderBottom : '1px solid #CECECE'
        }
    },['div',{
        style : {
            padding : '0.5em',
            backgroundColor : '#EEEEEE'
        }
    },title]],['div',{
        style  : {
            position : 'relative',
            minHeight : '50px',
            minWidth : '100px',
            left : '0px',
            right : '0px',
            height : height,
            padding : '1em',
            overflow : 'hidden'
        }
    },['div'].concat(children)]]];
}