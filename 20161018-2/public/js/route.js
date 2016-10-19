var app = angular.module('app', ['ngRoute']);
// 配置路由信息
app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/list/:id', {
          templateUrl:'../tpl/list.html',
          controller:'listCtrl'
        })
        .when('/about_me',{
          templateUrl:'../tpl/about_me.html',
          controller:''
        })
        .otherwise({
          templateUrl:'../tpl/index.html',
          controller:''
        })
}])
