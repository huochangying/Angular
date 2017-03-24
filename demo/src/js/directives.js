/**
 * Created by quauq on 2017/3/23.
 */
var directive = angular.module('directive', []);
directive.directive('resize', function ($window) {
    return {
        scope: {},
        restrict: 'AE',
        controller: function ($scope) {
            this.resizeUse = function (element) {
                var _element = angular.element(element);
                var _winowHeight = $window.innerHeight;
                var _divHeight = element[0].offsetHeight;
                var _height = ((_winowHeight - _divHeight) / 2)-20;
                _height > 0 ? _element.css('marginTop', _height + 'px') : null;
            }
        },
        link: function (scope, element, attr, ctrl) {
            var _window = angular.element($window);
            ctrl.resizeUse(element);
            _window.on('resize', function () {
                ctrl.resizeUse(element);
            });
        }
    };
});