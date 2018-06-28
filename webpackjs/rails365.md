# 第01节 介绍

webpack 可以看做是模块打包机：它做的事情是，分析你的项目结构，找到 JavaScript 模块以及其它的一些浏览器不能直接运行的拓展语言
（Scss，TypeScript 等），并将其转换和打包为合适的格式供浏览器使用。

![webpack工作流程](./images/rails365/工作流程.svg)

用大白话可以这样说：
webpack是一个前端模块化方案，更侧重模块打包，我们可以把开发中的所有资源（图片、js 文件、css 文件等）都看成模块，通过 loader
（加载器）和 plugins（插件）对资源进行处理，打包成符合生产环境部署的前端资源。

举个例子，很多人开发了各种优秀的 JavaScript 模块或组件，我们不想重复发明轮子，而是想直接利用别人的模块，就是类似 require 或 include 
这样的机制，把别人的模块引入进来，但是 JavaScript 又没有 类或包 这样的概念，那应该如何做呢？

如何去引入别人的模块？引入之后保证各种依赖关系不出错？这就是 webpack 要解决的问题。

其实，模块化的问题解决之后，webpack 就能把各种资源模块打包合并成一个文件输出给浏览器。在打包的过程中还能对这些资源进行处理，
比如压缩减少体积，把 sass 编译成 css, coffee 编译成 js。

优势：
1.webpack 不仅仅能处理 js, 也能处理 css, 也能处理 html，甚至是图片等各种前端资源。
2.它开发便捷，仅仅使用一个配置文件，就能替代部分 grunt/gulp 的工作，比如打包、压缩混淆、图片转 base64等。
3.扩展性强，插件机制完善。

# 第02节 安装

```bash
sudo brew install nodejs
sudo npm install -g webpack
sudo npm install -g webpack-cli

node -v
webpack -v
```

# 第03节 实现 hello world

```bash
mkdir webpackDemo
cd webpackDemo
npm init 
npm install --save-dev webpack

mkdir src
echo "console.log('hello world');" >> ./src/app.js
# 打包
webpack --mode development ./src/app.js --output ./dist/app.bundle.js
# 实时更新内容变动用于开发模式调试
webpack --watch --mode development ./src/app.js --output ./dist/app.bundle.js
```

# 第04节 webpack 的配置文件

增加 `webpack.config.js`，并修改 package.json 的 scripts 部分，这样能够使用npm命令直接操作webpack方法：

    webpack.config.js

```javascript 1.8
module.exports = {
  entry: './src/app.js',
  output: {
    filename: './dist/app.bundle.js'
  }
};
```

    package.json

```json
  "scripts": {
    "dev": "webpack -d --watch",
    "prod": "webpack -p"
  },
```

则可以使用如下指令：
```bash
npm run dev
npm run prod
```
# 第05节 使用第一个 webpack 插件 html-webpack-plugin

安装插件：
```bash
sudo npm install html-webpack-plugin --save-dev
```

    webpack.config.js
    
```javascript 1.8
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/app.js',
    output: {
        path: __dirname + '/dist',
        filename: 'app.bundle.js'
    },
    plugins: [new HtmlWebpackPlugin({
        template: './src/index.html',
        filename: 'index.html',
        minify: {
            collapseWhitespace: true,
        },
        hash: true,
    })]
};
```

# 第06节 使用 loader 处理 CSS 和 Sass

loader 用于对模块的源代码进行转换。loader 可以使你在 import 或"加载"模块时预处理文件。
因此，loader 类似于其他构建工具中“任务(task)”，并提供了处理前端构建步骤的强大方法。
loader 可以将文件从不同的语言（如 TypeScript）转换为 JavaScript，或将内联图像转换为
data URL。loader 甚至允许你直接在 JavaScript 模块中 import CSS文件！

说白了，就是 loader 类似于 task，能够处理文件，比如把 Scss 转成 CSS，TypeScript 转成 JavaScript 等。

```bash
# CSS
npm install --save-dev css-loader style-loader
# SASS
npm install --save-dev sass-loader node-sass
# depart
npm install --save-dev extract-text-webpack-plugin
npm install extract-text-webpack-plugin@next
```

# 第07节 初识 webpack-dev-server

我们之前使用 webpack -d --watch 来在开发环境下编译静态文件，但是这个功能，完全可以用 webpack-dev-server 来代替。

除此之外， webpack-dev-server 还有其他的功能，比如在本地上开启服务，打开浏览器等。

```bash
# 先全局安装
npm install -g webpack-dev-server
npm install --save-dev webpack-dev-server
```

配置修改：
```javascript 1.8
devServer: {
    port: 9000,
    open: true
}
```

使用：
```bash
webpack-dev-server -d
```

# 第8节 用 webpack 和 babel 配置 react 开发环境

可能你不懂 babel 是什么，你可以把它理解为编译器，它能把 react 代码转成一般浏览器可读可执行的代码，
通常可以用它来转化 react 或 vue 这样的前端代码，或者把 es6 代码转成普通的 javascript 代码等等。

要让 babel 很好的转化 react 代码，首先要安装好 babel，再装 babel 转化 react 的包。

```
npm install --save react react-dom
npm install --save-dev babel-core babel-preset-react babel-preset-env
npm install --save-dev babel-loader
```

在module中增加如下配置：
```
{
    test: /\.js$/,
    loader: 'babel-loader',
    exclude: /node_modules/
},
{
    test: /\.jsx$/,
    loader: 'babel-loader',
    exclude: /node_modules/
}
```

# 第9节 用 clean-webpack-plugin 来清除文件

```bash
npm i clean-webpack-plugin --save-dev
```

#
