var express = require('express');
var app = express();

app.use(express.static('./public'));
app.get('/api/get_data',(req,res)=>{
  var data = [];
  for(var i=0;i<50;i++){
    var obj = {};
    obj.id = i;
    obj.title = '标题-'+i;
    data.push(obj);
  }
  res.json({
    status:'y',
    msg:'获取数据成功',
    data:data
  });
})
app.listen(3000,()=>{
  console.log('服务器运行于3000端口...');
});
