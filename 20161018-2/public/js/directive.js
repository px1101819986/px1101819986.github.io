// angular.module定义一个angular.js的主入口
// 参数一 表示项目的名字,在html中的ng-app中使用
// 参数二 是此项目的依赖项
var app = angular.module('app',[]);

app.controller('firstController',['$scope',function($scope){
  // $scope用于关联上下文内容
  // 关联model和页面中的html内容
  $scope.title = '这里讲解的是自定义指定部分内容';
  $scope.people = [
    {name:'Tom',age:16},
    {name:'Jerry',age:19},
    {name:'Jack',age:46},
    {name:'Tim',age:19},
  ];
  $scope.clickHandle = function(){
    $scope.title = '当前点击的人是:'+this.person.name;
    // console.dir(event); //mouseEvent
    // console.dir(this); //当前点击内容的$scope值
    console.dir($scope); //整个app的$scope值
    // console.dir(this.person);
  }
  console.dir($scope);
}])

/**
 * 自定义一个筛选器
 * 参数一 筛选器的名字
 * 参数二 构造函数(创建筛选器的方法)
 */
app.filter('myFilter',function(){
  return function(item){
    // console.dir(item);
    var nAge = Number(item);
    var strAgeDesc = '';
    if(nAge<10){
      strAgeDesc = '儿童';
    }
    else if(nAge<18){
      strAgeDesc = '少年';
    }
    else if(nAge<45){
      strAgeDesc = '青年';
    }
    else{
      strAgeDesc = '中老年';
    }
    return item+'岁的'+strAgeDesc;
  }
})
