# 架构说明
使用free-ng作为前端框架

### src/app
文件结构
├── asset
│     ├── css
│     ├── Images
│     ├── i18ns
│     ├── json
│     ├── sass
│     ├── themes
├── app                                        // 前端工程目录
│     ├── component                           // 公共业务组件
│     ├── XXX(如GM-directives)                // 单个应用
│     │     ├── common                       // 该应用的公共方法
│     │     ├── config                       // 该应用的配置文件
│     │     ├── index                        // 该应用的主页
│     │     ├── XXX(如main、login、uploader) // 该应用的所有子页面
│     ├── app.module.ts                       // 入口
│     ├── app.component.ts                    // 根元素
│     ├── app.component.scss                  // 全局css
│     ├── app-routing.module.ts               // 根路由

### src/assets

### src/environments
