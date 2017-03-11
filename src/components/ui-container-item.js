/**
 * Created by developer on 3/11/2017.
 */
function $render(props) {
    var basis = props.basis || 'auto';
    var grow = props.grow || '1';
    var shrink = props.shrink || '0';
    var style = props.style || {};

    var _flex = grow+" "+shrink+" "+basis;

    var _style = {
        "-webkit-order": "0",
        "-ms-flex-order": "0",
        "order": "0",
        "-webkit-flex": _flex,
        "-ms-flex": _flex,
        "flex": _flex,
        "-webkit-align-self": "stretch",
        "-ms-flex-item-align": "stretch",
        "align-self": "stretch"
    };

    yalla.merge(_style,style);

    return ['div', {
        style: _style
    }].concat(props.$children);
}