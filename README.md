## 开始
目前暂时分为dev与prod模式

### dev
分别进入server文件夹与client文件夹，使用npm run dev启动服务端和客户端，服务端使用端口默认为8081，客户端使用端口默认为8080

### prod
服务端启动app.js， 客户端进入client文件夹使用npm run build，将打包出来的dist文件夹使用nginx代理