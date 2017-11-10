# 架构说明
使用free-ng作为前端框架

### src/app
文件结构
<br/> ├── asset
<br/> │     ├── css
<br/> │     ├── Images
<br/> │     ├── i18ns
<br/> │     ├── json
<br/> │     ├── sass
<br/> │     ├── themes
<br/> ├── app                                        // 前端工程目录
<br/> │     ├── component                           // 公共业务组件
<br/> │     ├── XXX(如GM-directives)                // 单个应用
<br/> │     │     ├── common                       // 该应用的公共方法
<br/> │     │     ├── config                       // 该应用的配置文件
<br/> │     │     ├── index                        // 该应用的主页
<br/> │     │     ├── XXX(如main、login、uploader) // 该应用的所有子页面
<br/> │     ├── app.module.ts                       // 入口
<br/> │     ├── app.component.ts                    // 根元素
<br/> │     ├── app.component.scss                  // 全局css
<br/> │     ├── app-routing.module.ts               // 根路由

### src/assets

### src/environments
