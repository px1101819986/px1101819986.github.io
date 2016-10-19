var app = angular.module('app',[]);
app.controller('mainCtrl',['$scope',function($scope){
  // 定义一个bool值 用于控制div是否显示
  $scope.divIsShow = true;
  // 定义一个按钮事件 点击后改变div的显示
  $scope.btnClickHandle = function(){
    $scope.divIsShow = !$scope.divIsShow;
  }
  // 定义下拉框的数据
  $scope.data = [];
  for(var i=0;i<10;i++){
    var obj = {};
    obj.id = i;
    obj.label = '选择项-'+i;
    $scope.data.push(obj);
  }

  // 添加一个下拉框change事件
  $scope.selChange = function(){
    // console.dir(event);
    // console.dir(this);
    console.dir($scope.sel);
    // 通过JSON.parse($scope.sel)转换为js对象
  }


}])
