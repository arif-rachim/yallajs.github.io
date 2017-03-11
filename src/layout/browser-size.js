/**
 * Created by developer on 3/11/2017.
 */
window.onresize = function(event) {
    yalla.markAsDirty();
};
$export = {
    width : function(){
        return Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    },
    height : function(){
        return Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    },
    platform : function(){
        var width = this.width();
        if(width > 1280){
            return 'HUGE';
        }
        if(width > 992){
            return 'DESKTOP';
        }
        if(width > 768){
            return 'TABLET';
        }
        if(width > 480){
            return 'MOBILE';
        }
        return 'TINY';
    },
    platformMap : ['TINY','MOBILE','TABLET','DESKTOP','HUGE']
}