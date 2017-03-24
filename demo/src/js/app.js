/**
 * Created by quauq on 2017/3/23.
 */
var library = angular.module('myApp', ['ui.router', 'ngAnimate', 'directive']);
library.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/index');
    $stateProvider
        .state('index', {
            url: '/index',
            views: {
                '': {
                    templateUrl: 'tpls/index.html'
                },
                'main@index': {
                    templateUrl: 'tpls/login.html'
                }
            }
        }).state('library', {
            url: '/{libraryType[0-9]{1,9}}',
            views: {
                '': {
                    templateUrl: 'tpls/library.html'
                },
                'libraryList@library':{
                    templateUrl: 'tpls/libraryList.html'
                },
                'libraryBody@library':{
                    templateUrl: 'tpls/libraryBody.html'
                }

            }
        }
    )
});