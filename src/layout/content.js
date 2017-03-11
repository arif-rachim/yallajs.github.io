/**
 * Created by developer on 3/10/2017.
 */
var container = $inject('components/ui-container');
var item = $inject('components/ui-container-item');

var _basis = 300;


function $render(props) {

    var header = [item, {
        basis: _basis+'px',
        grow: '0',
        style: {
            backgroundColor: 'white',
            position : 'relative'
        }
    }, 'shit'];

    var footer = [item, {
        grow: '0',
        basis: 'auto',
        style: {
            backgroundColor: 'blue'
        }
    }, 'shit three'];


    var content = [item, {
        style: {
            position: 'relative'
        }
    }, ['div', {
        style: {
            position: 'absolute',
            top: '0',
            left: '0',
            right: '0',
            bottom: '0',
            backgroundColor: 'red',
            overflow: 'auto'
        },
        onscroll : function(e){
            resetTopPos(e.target.scrollTop);
        }
    }, ['div', {
        style: {
            height: '1000px'
        }
    }, 'shit']]];

    var shell = [container, {
        direction: 'column',
        style: {
            width: '100vw',
            height: '100vh'
        }
    }, header, content, footer];

    return ['div', {
        style: {
            position: 'fixed',
            top: '0',
            left: '0',
            width: '100vw',
            height: '100vh',
            backgroundColor: '#DDD',
            overflow: 'auto'
        }
    }, shell]
}

function resetTopPos(topPos){
    _basis = 300 - topPos;
    yalla.markAsDirty();
}
