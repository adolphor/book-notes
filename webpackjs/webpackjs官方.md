
# 1. 四个基本概念

* 入口(entry)
* 输出(output)
* loader
* 插件(plugins)

## 1.0 预备知识

* `module.exports` 

## 1.1 入口

指示 webpack 应该使用哪个模块，来作为构建其内部依赖图的开始。进入入口起点后，webpack 会找出有哪些模块和库是入口起点（直接和间接）依赖的。
每个依赖项随即被处理，最后输出到称之为 bundles 的文件中。可以通过在 webpack 配置中配置 `entry` 属性，来指定一个入口起点（或多个入口起点）。
默认值为 `./src`。

```
// 单个入口（简写）语法
entry: './path/to/my/entry/file.js'
// 对象语法
app: './src/app.js',
vendors: './src/vendors.js'
```

## 1.2 输出

output 属性告诉 webpack 在哪里输出它所创建的 bundles，以及如何命名这些文件，默认值为 `./dist`。基本上，整个应用程序结构，
都会被编译到你指定的输出路径的文件夹中。你可以通过在配置中指定一个 `output` 字段，来配置这些处理过程：

    webpack.config.js

```javascript
const path = require('path');

module.exports = {
  entry: './path/to/my/entry/file.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'my-first-webpack.bundle.js'
  }
};
```

## 1.3 loader

loader 让 webpack 能够去处理那些非 JavaScript 文件（webpack 自身只理解 JavaScript）。loader 可以将所有类型的文件转换为 webpack 
能够处理的有效模块，然后你就可以利用 webpack 的打包能力，对它们进行处理。

本质上，webpack loader 将所有类型的文件，转换为应用程序的依赖图（和最终的 bundle）可以直接引用的模块。

在更高层面，在 webpack 的配置中 loader 有两个目标：
* `test` 属性，用于标识出应该被对应的 loader 进行转换的某个或某些文件。
* `use` 属性，表示进行转换时，应该使用哪个 loader。

    webpack.config.js

```javascript
const path = require('path');

const config = {
  output: {
    filename: 'my-first-webpack.bundle.js'
  },
  module: {
    rules: [
      { test: /\.txt$/, use: 'raw-loader' }
    ]
  }
};

module.exports = config;
```


## 1.4 插件

















