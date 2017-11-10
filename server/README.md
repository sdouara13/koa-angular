## 架构说明
主要参照 [eggjs](https://eggjs.org/zh-cn/basics/structure.html) 来构建服务端架构

### controller
1. 获取用户通过 HTTP 传递过来的请求参数。
2. 校验、组装参数。
3. 调用 service 进行业务处理，必要时处理转换 service 的返回结果，让它适应用户的需求。
4. 通过 HTTP 将结果响应给用户。

### service
与controller同名，对应该控制器的公共方法

### model
与controller同名，对应该控制器的数据模型
