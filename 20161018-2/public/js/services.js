///在angularjs中服务是一个对象或者一个函数
///可以在被其他内容进行引用
///其内置的服务都是以$开头的
///$timeout    相当于setTimeout
///$interval   相当于setInterval
///$http       发送http请求
var app = angular.module('app', []);
app.controller('mainCtrl', ['$scope', '$location', '$timeout', '$http','getDataFromServer', function($scope, $location, $timeout, $http,getDataFromServer) {
    // console.dir($scope);
    // console.dir($location);
    // console.dir($timeout);
    // console.dir($http);
    // 向服务器端发送一个get请求
    // $http({
    //     url: '/api/get_data',
    //     method: 'get'
    // }).then(function(res) {
    //     console.dir(res);
    // }, function(err) {
    //     console.dir(err);
    // });
    $scope.data = [];
    getDataFromServer.getData(function(res){
      console.log('获取数据成功...');
      console.dir(res);
      $scope.data = res.data.data;
    })
    $timeout(function() {
        console.log('3秒已经过去了...');
    }, 3000);
    $scope.now = Date.now();
}]);
