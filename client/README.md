# 架构说明
使用free-ng作为前端框架

### src/app
文件结构
<br/> ├── asset
<br/> │&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── css
<br/> │&nbsp;&nbsp;&nbsp;&nbsp;├── Images
<br/> │&nbsp;&nbsp;&nbsp;&nbsp;├── i18ns
<br/> │&nbsp;&nbsp;&nbsp;&nbsp;├── json
<br/> │&nbsp;&nbsp;&nbsp;&nbsp;├── sass
<br/> │     ├── themes
<br/> ├── app                                        // 前端工程目录
<br/> │&nbsp;&nbsp;&nbsp;&nbsp;├── component                           // 公共业务组件
<br/> │&nbsp;&nbsp;&nbsp;&nbsp;├── XXX(如GM-directives)                // 单个应用
<br/> │&nbsp;&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;&nbsp;├── common                       // 该应用的公共方法
<br/> │&nbsp;&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;&nbsp;├── config                       // 该应用的配置文件
<br/> │&nbsp;&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;&nbsp;├── index                        // 该应用的主页
<br/> │&nbsp;&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;&nbsp;├── XXX(如main、login、uploader) // 该应用的所有子页面
<br/> │&nbsp;&nbsp;&nbsp;&nbsp;├── app.module.ts                       // 入口
<br/> │&nbsp;&nbsp;&nbsp;&nbsp;├── app.component.ts                    // 根元素
<br/> │&nbsp;&nbsp;&nbsp;&nbsp;├── app.component.scss                  // 全局css
<br/> │&nbsp;&nbsp;&nbsp;&nbsp;├── app-routing.module.ts               // 根路由

### src/assets

### src/environments
