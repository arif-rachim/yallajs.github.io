/**
 * Created by developer on 3/19/2017.
 */
$export = {
    isAtIndexPage : function(){
        return location.hash.trim() === '' || location.hash.trim() === '#';
    }
}