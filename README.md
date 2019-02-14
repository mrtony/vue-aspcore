# Creating a VueJS (with TypeScript) SPA on ASP.Net Core 2.1

[Creating a VueJS (with TypeScript) SPA on ASP.Net Core 2.1](https://medium.com/@vhanla/creating-a-vuejs-with-typescript-spa-on-asp-net-core-2-1-5efaee226154)


另一個參考: [How to Integrate Vue.JS & Typescript with ASP.NET Core Web Application](https://hackernoon.com/how-to-integrate-vue-js-typescript-with-asp-net-core-web-application-6e9aa6f2bcef)

## 安裝範本
Nuget的[Microsoft.AspNetCore.SpaTemplates](https://www.nuget.org/packages/Microsoft.AspNetCore.SpaTemplates/)提供了所有SPAhjju dm 
.

安裝所有範本
```
dotnet -v
## 安裝範本
Nuget的[Microsoft.AspNetCore.SpaTemplates](https://www.nuget.org/packages/Microsoft.AspNetCore.SpaTemplates/)提供了所有SPAhjju dm 
.

安裝所有範本
```
dotnet -v

//安裝所有範本
dotnet new --install Microsoft.AspNetCore.SpaTemplates::*

//查看有哪些範本可使用
dotnet new --help
```

在`VueDemo`目錄下建立knockout spa範本
```
dotnet new vue
```

還原package
```
npm install
npm audit fix
npm audit fix --force
```

安裝`typescript`
```
tsc -v
//沒有顯示版本時要安裝
npm i -g typescript@2.8.3
```

## 建立Login頁面
1. 新增login目錄
2. 新增login.vue
3. 修改webpack.config.js
```
from
/\.vue\.html$/
to
/(\.vue\.html|\.vue)$/
```
4. 在navmenu.vue.html加入link
5. 在boot.ts加入login的route

