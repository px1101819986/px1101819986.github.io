/**
 * 通过service创建一个服务
 * 然后可以在项目的任意位置进行引入使用
 */
// app.service('getDataFromServer',['$http',function($http){
//   this.getData = function(callBack){
//     $http({
//         url: '/api/get_data',
//         method: 'get'
//     }).then(function(res) {
//         // console.dir(res);
//         callBack(res);
//     }, function(err) {
//         // console.dir(err);
//         callBack({});
//     });
//   }
// }])

/**
 * 通过factory方式定义一个服务
 */
app.factory('getDataFromServer', ['$http', function($http) {
    var service = {};
    service.getData = function(callBack) {
        $http({
                url: '/api/get_data',
                method: 'get'
            })
            .then(function(res) {
                callBack(res);
            }, function(err) {
                callBack(err);
            })
    }
    return service;
}])
