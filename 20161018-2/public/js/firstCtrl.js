// 通过directive自定义一个指令
// 定义指令名字使用驼峰命名
// 在html代码中使用的时候使用-分割单词
// restrict
// 默认为 EA
// E 作为元素名使用
// A 作为属性使用
// C 作为类名使用
// M 作为注释使用 ,需要加入属性replace:true
app.directive('firstCtrl',function(){
  return{
    // restrict: 'M',
    // replace : true,
    // template:'<h1 ng-click="titleClick()">{{title}}</h1>',
    // 通过templateUrl指定模板文件的地址
    templateUrl:'../tpl/firstCtrl.html',
    // controller:'fcController'
    controller:['$scope','$element',function($scope,$element){
      // console.dir($scope);
      // console.dir($element);
      // $scope.title = '这里是自定义指令';
    }],
    // 当页面中同一个自定义控件出现多次的时候
    // 为了使自定义控件有各自独立的作用域
    // 可以为其指定scope属性的customerInfo值
    scope: {
      customerInfo: '=info'
    },

    // 此方法会在指定第一次创建的时候执行
    // 参数一 上下文的scope
    // 参数二 标签信息
    // 参数三 属性信息
    link:function(scope,element,attrs){
      console.log('link内部的输出开始:');
      console.dir(scope);
      console.dir(element);
      console.dir(attrs);
      scope.title = attrs.name;

      // element标签数据 是一个类jQuery的数据类型
      // bind或者on可以为控件添加事件
      element.bind('mouseover',function(e){
        console.log('鼠标移过...');
      });
    }
  }
})
// app.controller('fcController',function($scope){
//   console.dir($scope);
//   // console.dir(this);
//   $scope.title = '这个是什么呢?';
//   $scope.titleClick = function(){
//     alert($scope.title);
//   }
// })
