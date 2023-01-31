# 如何调式 antd 源码

详细步骤和讲解请参考：
https://juejin.cn/post/7158430758070140942#comment

## 主要步骤

### antd 源码改造

#### 关联 sourcemap 修改编译配置

```js
//  antd/node_modules/@antd-design/tools/lib/getWebpackConfig.js

// 添加:
babelConfig.sourceMap = true;

// 修改 bebel 配置:
const config = {
    devtool: 'cheap-module-source-map',
    // ......
};
```

#### 重新 dist

```bash
# 重新执行 dist
npm run dist
```

dist 目录下会生成新的 `antd.js` 和 `antd.js.map`。

### 项目调试配置

#### 覆盖原 antd 文件

将刚刚 `antd/dist` 中新生成 `antd.js` 和 `antd.js.map` 复制到项目的 `node_modules/antd/dist` 下。

#### 清理 cache

清一下 babel-loader 的缓存，删除整个 `node_modules/.cache` 目录，并重启 dev server。

#### 创建 launch 调试配置文件

```js
// .vscode/launch.json
{
    "version": "0.2.0",
    "configurations": [
        {
            "type": "chrome", // 使用浏览器调试
            "request": "launch",
            "name": "Launch Chrome against localhost",
            "url": "http://localhost:3000", // dev server 本地服务器地址
            "webRoot": "${workspaceFolder}"
        }
    ]
}
```

#### 修改代码中的引用路径

```diff
- import { Button } from 'antd';
+ import { Button } from 'antd/dist/antd';
```

#### 打断点，启动 launch

在需要的地方添加可编辑断点
