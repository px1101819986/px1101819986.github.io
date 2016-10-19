app.controller('listCtrl',['$scope','getDataFromServer','$routeParams',function($scope,getDataFromServer,$routeParams){
  ///定义一个空的数组表示我的data的数据类型
  $scope.data = [];

  console.dir($routeParams);

  getDataFromServer.getData(function(res){
    $scope.data = res.data.data;
  });
}])
