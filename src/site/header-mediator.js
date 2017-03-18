/**
 * Created by developer on 3/18/2017.
 */
var browserSize = $inject('@site/browser-size');
$export = {
    getTitleFontSize : function(){
        console.log(browserSize.getWidth());
        return '6em'
    }
}