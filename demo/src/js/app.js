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
            'libraryList@library': {
                templateUrl: 'tpls/libraryList.html'
            }
        }
    }).state('library.l1', {
        url: '/l1',
            templateUrl: 'tpls/libraryBody.html'
    }).state('library.l2', {
        url: '/l2',
            templateUrl: 'tpls/libraryBody2.html'
    }).state('library.l3', {
        url: '/l3',
            templateUrl: 'tpls/libraryBody3.html'
    }).state('library.l4', {
        url: '/l4',
            templateUrl: 'tpls/libraryBody4.html'
    }).state('library.l5', {
        url: '/l5',
            templateUrl: 'tpls/libraryBody5.html'
    })
});