---
title: 小康工具库文档
icons: [fas fa-fire red, fas fa-star green]
---

## 引入工具库

在你的主题inject处的bottom处引入此工具库，接下来自己新建一个js文件开始根据下面介绍的方法进行修改即可。

工具库地址：

- https://cdn.jsdelivr.net/gh/sviptzk/StaticFile_HEXO@latest/xkTool/1.0.0/xkTool.js

  此地址来源于GitHub仓库：https://github.com/sviptzk/StaticFile_Hexo/tree/master/xkTool，请自行检查根据仓库选择版本。

- 其他地址

  可以自行下载此工具库放到本地引用也可以

## 关于引入顺序

xkTool是基于jQuery写的，因此引入时必须保证jQuery已经引入了。对于最新版本的butterfly主题，只需要在`inject>bottom`处引入即可。

自定义的js文件必须引入在`xkTool`之后。

![image-20200630223349110](https://cdn.jsdelivr.net/gh/blogimg/HexoStaticFile2@latest/2020/06/30/49328343b2e35fd1e73b16b2fa55f801.png)

## 创建对象

这一步是下边所有修改的基础，所有修改均由此处创建的对象进行调用方法。

```javascript
var xiaokang = new xkTool(param);
```

其中参数`param`的取值：

- 留空

  对banner图不做任何处理。

  ```javascript
  var xiaokang = new xkTool();
  ```

- 传入url

  将banner图设置为url的图片（会有个小滤镜效果）

  ```javascript
  var xiaokang = new xkTool("https://ae01.alicdn.com/kf/H21b5f6b8496141a1979a33666e1074d9x.jpg");
  ```

- 传入`transparent`关键字

  会将banner图设置为透明，也就是所谓的去掉banner图。

  ```javascript
  var xiaokang = new xkTool("transparent");
  ```

**以下示例中`xiaokang`均代表此步实例化的对象。**

## 视觉修改

### 修改Banner图

可以通过创建对象时修改，也可以通过创建出来的对象调用`changeBanner`方法。

```javascript
xiaokang.changeBanner(param)
```

> 传入参数与创建对象时一致。

### 手机状态下工具栏默认不展开

```javascript
xiaokang.mobileSidebar();
```

### mac代码框绿色按钮放大

```javascript
xiaokang.codeFull();
```

### 点击目录输出锚点

```javascript
xiaokang.consoleAnchor();
```

### 背景页面

```javascript
xiaokang.bgPage();
```

须配合 [Hexo 博客之 butterfly 主题优化更换背景](https://www.antmoe.com/posts/7198453/index.html)使用，否则无效果。

### 随机背景

```javascript
xiaokang.imgList = ['这里写入你的地址，多个地址用逗号分隔']
xiaokang.randomBg(); // 调用随机背景的方法
```

代码示例：

```javascript
// 设置随机背景的图片
xiaokang.imgList = [
    "https://ae01.alicdn.com/kf/H21b5f6b8496141a1979a33666e1074d9x.jpg",
    "https://ae01.alicdn.com/kf/Hb4b6a83a124049819bd561439312edc96.jpg",
    "https://ae01.alicdn.com/kf/H146b0a3e074a4e91b11fcce994098034y.jpg",
    "https://ae03.alicdn.com/kf/H76674cd5901840be9b12f8596bb649bdP.jpg",
];
// 调用随机背景
xiaokang.randomBg();
```

如果没有设置`imgList`属性而直接调用`randomBg`方法，则会将背景设置为预设背景。

## 插入元素

### 插入阿里svg社交图标

调用`appendSocial`方法即可，参数传入一个对象，键为图标id，值为点击后跳转的地址。

```javascript
xiaokang.appendSocial({
    "icon-weizhi": "https://baidu.com",
    "icon-gouwu": "https://baidu.com",
    "icon-huiyuan": "https://baidu.com",
    "icon-youxi": "https://baidu.com",
});
```

> 不要忘记引入阿里提供的js文件。