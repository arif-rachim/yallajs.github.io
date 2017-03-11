/**
 * Created by developer on 3/11/2017.
 */

function $render(props) {

    /*
    direction : ['row','column']
     */
    var direction = props.direction || 'row';
    var style = props.style || {};

    var _style = {
        "display": "-ms-flexbox",
        "display": "-webkit-flex",
        "display": "flex",
        "-webkit-flex-direction": direction,
        "-ms-flex-direction": direction,
        "flex-direction": direction,
        "-webkit-flex-wrap": "nowrap",
        "-ms-flex-wrap": "nowrap",
        "flex-wrap": "nowrap",
        "-webkit-justify-content": "flex-start",
        "-ms-flex-pack": "start",
        "justify-content": "flex-start",
        "-webkit-align-content": "stretch",
        "-ms-flex-line-pack": "stretch",
        "align-content": "stretch",
        "-webkit-align-items": "flex-start",
        "-ms-flex-align": "start",
        "align-items": "flex-start"
    };
    yalla.merge(_style,style);

    return ['div', {
        style: _style
    }].concat(props.$children)
}

