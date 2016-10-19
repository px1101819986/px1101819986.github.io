/**
 * 定义一个控制底部导航区域的controller
 */
app.controller('footerCtrl',['$scope',function($scope){
  $scope.selectedIndex = 0;
  $scope.linkTo = function(index){
    $scope.selectedIndex = index;
  }
}])
