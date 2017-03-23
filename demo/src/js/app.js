/**
 * Created by quauq on 2017/3/23.
 */
var myApp=angular.module('myApp',['ui.router','ngAnimate','directive']);
myApp.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/index');
    $stateProvider.state('index',{
        url: '/index',
        views:{
            '':{
                templateUrl:'tpls/index.html'
            },
            'main@index':{
                templateUrl:'tpls/login.html'
            }
        }
    })
});