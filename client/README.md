# 架构说明
使用free-ng作为前端框架

### src/app
文件结构
<br/> ├── asset
<br/> │&nbsp;├── css
<br/> │&nbsp;├── Images
<br/> │&nbsp;├── i18ns
<br/> │&nbsp;├── json
<br/> │&nbsp;├── sass
<br/> │     ├── themes
<br/> ├── app                                        // 前端工程目录
<br/> │&nbsp;├── component                           // 公共业务组件
<br/> │&nbsp;├── XXX(如GM-directives)                // 单个应用
<br/> │&nbsp;│&nbsp;├── common                       // 该应用的公共方法
<br/> │&nbsp;│&nbsp;├── config                       // 该应用的配置文件
<br/> │&nbsp;│&nbsp;├── index                        // 该应用的主页
<br/> │&nbsp;│&nbsp;├── XXX(如main、login、uploader) // 该应用的所有子页面
<br/> │&nbsp;├── app.module.ts                       // 入口
<br/> │&nbsp;├── app.component.ts                    // 根元素
<br/> │&nbsp;├── app.component.scss                  // 全局css
<br/> │&nbsp;├── app-routing.module.ts               // 根路由

### src/assets

### src/environments
