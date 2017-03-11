/**
 * Created by developer on 3/3/2017.
 */
function $render(params){
    var size = params.size || 'small';
    var icon = params.icon|| 'face';
    return ['i',{
        style : {
            fontFamily: 'Material Icons',
            fontWeight: "normal",
            fontStyle: "normal",
            fontSize: SIZE_MAPPER[size],  /* Preferred icon size */
            display: "inline-block",
            lineHeight: "1",
            textTransform: "none",
            letterSpacing: "normal",
            wordWrap: "normal",
            whiteSpace: "nowrap",
            direction: "ltr",

            /* Support for all WebKit browsers. */
            '-webkit-font-smoothing': "antialiased",
            /* Support for Safari and Chrome. */
            textRendering: "optimizeLegibility",

            /* Support for Firefox. */
            '-moz-osx-font-smoothing': "grayscale",

            /* Support for IE. */
            fontFeatureSettings: 'liga',
            transition : 'all 1s ease'
        },
        changeIcon : function(icon){
            this.innerText = icon;
        }
    },icon]
}

var SIZE_MAPPER = {
    small : '18px',
    medium : '24px',
    large : '30px',
    xlarge : '36px'
}