// 自定义一个地址选中的控件
app.directive('addressCtrl',function(){
  return{
    templateUrl:'../tpl/address_ctrl.html',
    controller:['$scope',function($scope){
      $scope.proviceData = [
        {id:1,name:'北京'},
        {id:2,name:'河北'},
        {id:3,name:'河南'},
        {id:4,name:'湖北'},
        {id:5,name:'湖南'}
      ]
      $scope.cityData = [
        {fid:1,id:101,name:'朝阳区'},
        {fid:1,id:102,name:'昌平区'},
        {fid:2,id:201,name:'石家庄'},
        {fid:2,id:202,name:'邯郸'},
        {fid:3,id:301,name:'郑州'},
        {fid:3,id:302,name:'信阳'},
        {fid:4,id:401,name:'武汉'},
        {fid:4,id:402,name:'黄冈'},
        {fid:5,id:501,name:'长沙'},
        {fid:5,id:502,name:'湘潭'}
      ]

      // 城市数据筛选后的结果
      $scope.cityDataFiltered = [];
      $scope.proviceChange = function(){
        // 当省份数据改变的时候 修改我城市数据的筛选结果
        $scope.cityDataFiltered = $scope.cityData.filter(function(item){
          if(item.fid == $scope.selProvice){
              return item;
          }
        })
      }

    }],
    scope:{
      customerInfo:'=info'
    }
  }
})
