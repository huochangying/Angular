/**
 * Created by quauq on 2017/3/23.
 */
var directive=angular.module('directive',[]);
directive.directive('auto',function () {
    return {
        restrict: 'AE',
        template:'<div id="middle"><ng-transclude></ng-transclude></div>',
        transclude:true,
        link:function ($scope,$elem,$attr) {
            $elem.bind('scroll',function(){

            })
        }
    };
});