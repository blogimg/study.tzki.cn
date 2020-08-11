---
title: 小康的Speak使用
icons: [fas fa-fire red, fas fa-star green]
short_title: 小康的Speak使用
---

![image-20200811184635204](https://cdn.jsdelivr.net/gh/blogimg/HexoStaticFile2@0bdc30cf733b8af36a4a42a248878eb75de8795a/2020/08/11/4e58737222b4bf0ecbb4e9040fd039ed.png)

## 前言

1. 在使用之前请先了解[小康](https://xiaokang.me/)为什么开发此项目

   {% checkbox green checked, 想要一个稳定的平台作为"说说"的展示 %}

   {% checkbox green checked, 想要自定义性高一点 %}

   {% checkbox green checked, 爱好 %}

2. 接下来在了解下此项目的定位，以此来确定自己是否适合使用。

   此项目数据来源于gitee的issue，也就是说将issue作为说说，通过前台来展示。

   想法及UI来源于[番茄大佬](https://tomotoes.com/blog/weibo/),但也有些不同。

   {% checkbox yellow checked, 此项目仅作为展示issue来使用。并未考虑加入在线发布功能。因此发布只能通过项目仓库发布。 %}

   {% checkbox yellow checked, 此项目是基于[butterfly主题](https://github.com/jerryc127/hexo-theme-butterfly)以及[小康](https://xiaokang.me/)的需求来完成的。可能某些设计并不符合你或者你所使用的主题。 %}

3. 其他

## 各部分介绍

1. 项目地址

   [https://unpkg.com/ispeak/index.js](https://unpkg.com/ispeak/index.js)

   为了方便的自动更新，因此选择了unpkg，如果你觉得慢可以自行下载上传到GitHub并使用jsd连接。

2. Speak的样式问题

   为了方便小伙伴魔改，js文件不会插入css。这就意味着css文件需要自己引入。

   以下提供一个默认css，你可以对其修改也可以直接使用。

   {% folding green, 示例CSS %}

   在线地址：[https://unpkg.com/ispeak/Speak.css](https://unpkg.com/ispeak/Speak.css)

   ```css
   
   /* speak */
   [data-theme="dark"].is-container .is-issue-content {
     box-shadow: 0 0.25em 0.75em 0 #eaeaea;
   }
   [data-theme="dark"] #article-container code {
     background: transparent;
   }
   .is-container {
     font-size: 1em;
     box-sizing: border-box;
   }
   .is-container img {
     width: 25%;
   }
   .is-container * {
     box-sizing: border-box;
   }
   .is-container:after {
     content: "";
     position: fixed;
     bottom: 100%;
     left: 0;
     right: 0;
     top: 0;
     opacity: 0;
   }
   .is-container .is-error {
     text-align: center;
     margin: 0.625em;
     margin-top: 2em;
     color: #ff3860;
   }
   .is-container .is-initing {
     padding: 1.25em 0;
     text-align: center;
   }
   .is-container .is-initing-text {
     margin: 0.625em auto;
     color: #999;
   }
   .is-container .is-issues {
     padding-top: 1.25em;
   }
   .is-container .is-issues-null {
     text-align: center;
   }
   .is-container .is-issues-controls {
     margin: 1.25em 0;
     text-align: center;
   }
   .is-container .is-issue {
     position: relative;
     padding: 0.625em 0;
     display: flex;
   }
   .is-container .is-issue-content {
     flex: 1 1;
     padding: 1em 1.5em;
     overflow: auto;
     transition: all 0.25s ease;
     border-radius: 10px;
     background: var(--global-bg);
     box-shadow: 0 0.625em 3.75em 0 #eaeaea;
     transition: all 0.25s ease 0.2s,
       transform 0.5s cubic-bezier(0.6, 0.2, 0.1, 1) 0.2s;
   }
   .is-container .is-issue-content:hover {
     box-shadow: 0 1em 4em 0.5em #d7d7d7;
     transform: translateY(-3px);
   }
   .is-container .is-issue-header {
     margin-bottom: 0.5em;
     font-size: 1em;
     position: relative;
   }
   .is-container .is-issue-header a {
     text-decoration: none;
   }
   .is-container .is-issue-block-1 {
     float: right;
     height: 1.375em;
     width: 2em;
   }
   .is-container .is-issue-block-2 {
     float: right;
     height: 1.375em;
     width: 4em;
   }
   .is-container .is-issue-username {
     font-weight: 600;
     font-size: 1.1em;
     color: var(--font-color);
     text-decoration: none;
   }
   .is-container .is-issue-text {
     margin: auto 0.3em;
     font-weight: 600;
   }
   .is-container .is-issue-date,
   .is-container .is-issue-text {
     color: #a1a1a1;
     text-shadow: #d9d9d9 0 0 1px, #fffffb 0 0 1px, #fffffb 0 0 2px;
   }
   .is-container .is-issue-body {
     color: var(--font-color);
   }
   .is-container .markdown-body {
     font-size: 1em;
     letter-spacing: 1px;
   }
   .is-container .markdown-body ol {
     list-style: decimal !important;
   }
   .is-container .markdown-body ul {
     list-style: circle !important;
   }
   
   .is-container .is-issue-label {
     /* position: absolute;
     right: 0; */
     line-height: 1;
     padding: 5px 6px;
     font-size: 0.9em;
     font-weight: 600;
     border-radius: 3px;
     box-shadow: inset 0 -1px 0 rgba(27, 31, 35, 0.12);
   }
   .is-container .is-issue-label:not(:first-child) {
     margin-left: 5px;
   }
   .is-container .is-icon {
     width: 1em;
     height: 1em;
     vertical-align: -0.15em;
     fill: currentColor;
     overflow: hidden;
     margin-right: 0.2em;
     font-size: 1.35em;
     transform: translateY(2px);
   }
   .is-container .is-verified-badge {
     margin-left: 0.2em;
     display: inline-block;
     transform: translateY(3px);
   }
   .is-container .is-issue-footer {
     position: relative;
     margin-top: 1em;
     font-size: 1.1em;
     user-select: none;
   }
   .is-container .is-issue-icon {
     margin-right: 2em;
     text-decoration: none;
     color: #666;
     border: none;
     outline: none;
     cursor: pointer;
   }
   .is-container .is-issue-icon * {
     transition: all 0.3s ease;
   }
   .is-container .is-icon-comment-wrap,
   .is-container .is-icon-reaction-wrap {
     display: inline-block;
     border-radius: 50%;
     transition: all 0.5s ease-in-out;
     border: none;
     outline: none;
     padding: 2px;
   }
   .is-container .is-icon-reaction-wrap {
     position: relative;
     transition: all 0.4s ease-out;
   }
   .is-container .is-icon-reaction-wrap:before {
     content: "â¤";
     color: #e02460;
     position: absolute;
     top: 1px;
     left: 5px;
     opacity: 0;
   }
   @keyframes heart-bump {
     .is-container 0% {
       opacity: 0.2;
     }
     .is-container 30% {
       opacity: 0.5;
       transform: rotate(20deg);
     }
     .is-container 60% {
       opacity: 0.7;
       transform: rotate(-20deg);
     }
     .is-container 100% {
       opacity: 0;
       top: -30px;
       transform: rotate(0deg);
     }
   }
   .is-container .is-issue-reaction:hover .is-icon-reaction-wrap {
     box-shadow: 0 0 20px 5px #e024603f;
     background: #e0246026;
   }
   .is-container .is-issue-reaction:hover .is-reaction-count {
     color: #e02460;
   }
   .is-container .is-reaction-count,
   .is-container .is-comment-count {
     font-weight: 600;
     display: inline-block;
   }
   .is-container .is-issue-comment:hover .is-icon-comment-wrap {
     box-shadow: 0px 0px 20px 5px #1d68f23b;
     background: #1da0f22b;
   }
   .is-container .is-issue-comment:hover .is-comment-count {
     color: #1da0f2;
   }
   .is-container .is-badge {
     height: 1em;
     width: 1em;
   }
   @keyframes bounce {
     .is-container 0% {
       transform: scale(1);
     }
     .is-container 33% {
       transform: scale(0.8);
     }
     .is-container 66% {
       transform: scale(1.2);
     }
     .is-container 100% {
       transform: scale(1);
     }
   }
   @keyframes fade {
     .is-container 10% {
       opacity: 0;
     }
     .is-container 33% {
       transform: scale(0.8);
     }
     .is-container 66% {
       transform: scale(1.2);
     }
     .is-container 100% {
       transform: scale(1);
       opacity: 0.8;
       color: #e02460;
     }
   }
   @keyframes linear {
     .is-container 0% {
       box-shadow: 0 0 20px 5px #e024603f;
       background: #e0246026;
     }
     .is-container 100% {
       box-shadow: 0px 0px 20px 2px #f3c5b385;
       background: #f3c5b342;
     }
   }
   .is-container .is-issue-liked {
     box-shadow: 0px 0px 20px 2px #f3c5b385;
     background: #f3c5b342;
   }
   .is-container .is-issue-liked .is-reaction-count {
     opacity: 0.8;
     color: #e02460;
   }
   .is-container .is-issue-like-animation {
     animation: shadows 0.3s linear;
   }
   .is-container .is-issue-like-animation .is-reaction-count {
     animation: fade 0.3s;
   }
   .is-container .is-issue-like-animation .is-icon-reaction-wrap {
     animation: bounce 0.3s;
   }
   .is-container .is-issue-like-animation .is-icon-reaction-wrap:before {
     animation: heart-bump 0.8s;
   }
   @keyframes wobble-horizontal {
     .is-container 16.65% {
       transform: translateX(8px);
     }
     .is-container 33.3% {
       transform: translateX(-6px);
     }
     .is-container 49.95% {
       transform: translateX(4px);
     }
     .is-container 66.6% {
       transform: translateX(-2px);
     }
     .is-container 83.25% {
       transform: translateX(1px);
     }
     .is-container 100% {
       transform: translateX(0);
     }
   }
   .is-container .wobble-horizontal {
     transform: translateZ(0);
     box-shadow: 0 0 1px rgba(0, 0, 0, 0);
   }
   .is-container .wobble-horizontal:hover {
     animation-name: wobble-horizontal;
     animation-duration: 1s;
     animation-timing-function: ease-in-out;
     animation-iteration-count: 1;
     transition: background 1s;
     background: #def2eb;
   }
   .is-container .is-icon-back {
     padding: 0.5em;
     border-radius: 0.5em;
     border: none;
     outline: none;
     background: #f9f9f9;
     transition: all 0.2s;
     display: block;
     width: 120px;
     text-align: center;
     margin: 0 auto;
   }
   .is-container .is-icon-back .is-back-text {
     color: #999;
     opacity: 0.8;
     font-size: 0.8 0.5em;
   }
   .is-container .is-issue-end {
     margin-top: 3em;
     font-size: 2em;
     line-height: 1.1em;
     outline: none;
     width: 20em;
     color: #ffffff;
     user-select: none;
     text-align: center;
     transform: rotate(-10deg) skewX(20deg);
     text-shadow: -1px 1px #cacaca, -2px 2px #cacaca, -3px 3px #cacaca,
       -4px 4px #cacaca, -5px 5px #cacaca, -6px 6px #cacaca, -7px 7px #cacaca,
       -8px 8px #cacaca, -9px 9px #cacaca, -10px 10px #cacaca, -11px 11px #cacaca,
       -12px 12px #cacaca, -20px 20px #f0f0f0;
   }
   .is-container .is-end-button {
     text-align: center;
     display: block;
     margin: 2em auto 0;
   }
   .is-container .is-end-button-text {
     font-size: 1em;
     padding: 0.3em;
     line-height: 1.1em;
     outline: none;
     text-align: center;
     color: #f70000;
     user-select: none;
   }
   @media (max-width: 479px) {
     .is-container .is-issue-content {
       padding: 0.625em 0.75em;
     }
     .is-container .is-issue-text {
       margin: auto 0.2em;
     }
     .is-container .is-issue-end {
       display: none;
     }
   }
   .square-loader {
     display: inline-block;
     width: 2em;
     height: 2em;
     position: relative;
     border: 4px solid #ccc;
     border-radius: 10%;
     box-shadow: inset 0px 0px 20px 20px #ebebeb33;
     animation: square 2s infinite ease;
   }
   .square-inner {
     vertical-align: top;
     display: inline-block;
     width: 100% !important;
     background-color: #ccc;
     box-shadow: 0 0 5px 0px #ccc;
     animation: loader-inner 2s infinite ease-in;
   }
   @keyframes square {
     0% {
       transform: rotate(0deg);
     }
     25% {
       transform: rotate(180deg);
     }
     50% {
       transform: rotate(180deg);
     }
     75% {
       transform: rotate(360deg);
     }
     100% {
       transform: rotate(360deg);
     }
   }
   @keyframes loader-inner {
     0% {
       height: 0%;
     }
     25% {
       height: 0%;
     }
     50% {
       height: 100%;
     }
     75% {
       height: 100%;
     }
     100% {
       height: 0%;
     }
   }
   .labels-label {
     margin: 6px;
     display: inline-block;
     line-height: 1;
     padding: 5px 6px;
     font-size: 0.9em;
     font-weight: 600;
     border-radius: 3px;
     box-shadow: inset 0 -1px 0 rgba(27, 31, 35, 0.12);
   }
   ```

   {% endfolding %}

3. 上/下一页

   为了提高自由度，Speak不会创建上/下一页按钮。需要你自己创建。创建很简单，只需要写一个元素，其中class类名包括`prev`\\`next`即可。例如：

   ```html
   <p class="prev"></p>
   <p class="next"></p>
   ```

   如上就代表创建了具有上一页下一页功能的p元素

4. 页码标签

   与翻页按钮类似，只要class名包括`page`即可

5. Speak容器

   这个获取到issue后加入到的容器。类名包括`is-container`即可。容器内可放入任何元素，例如一张图片。它的作用是当获取不到issue时，或显示容器内的元素，获取到则替换掉容器内的元素

   ```html
   <div class="is-container">
       <img src='https://cdn.jsdelivr.net/gh/sviptzk/StaticFile_HEXO@v3.3.9/butterfly/img/loading.gif' />
   </div>
   ```

6. Speak对象

   ```javascript
   new Speak({
       // 作者昵称
       nickname:'🦄Dreamy.TZK',
       // 每次显示的个数
       per_page: 3,
       // gitee的用户名
       owner: "antmoe",
       // gitee的仓库名
       reop: "speak",
       // 没有标签时的名称
       defaultLabelName: "Default",
       // 没有标签时的背景颜色
       defaultLabelColor: "#ffc107",
       // highlight代码高亮的主题   
       highlightcss:"/styles/monokai-sublime.min.css",
       // 为标签加入前缀修饰符
       emojiLabel: {
           // 标签名:修饰符
           Coder: "🎯",
           日常:"💬",
           Whoiam:'😶',
           想法:"💫",
           TODO:"🚧",
           随便说说:"🎈",
           测试:'👻',
       }
}); 
   ```
   
   

## 创建Speak页面

了解了上面各元素构成后，现在开始创建Speak页面。

首先创建一个页面`hexo new page ispeak`。创建完成后打开此页面进行编辑。

1. 引入jQuery库

   由于Speak使用了jQuery的语法，因此需要引入jQuery。

   > butterfly主题的jQuery在文章后边边引入的，因此我们需要在文章开头处再次引入。

   ```markdown
   <script src="https://cdn.jsdelivr.net/npm/jquery@latest/dist/jquery.min.js"></script>
   ```

2. 创建容器

   在上面引入的后边创建我们的Speak容器及上一页下一页按钮页码标签。

   ```html
   <div class="is-container">
       <img src='https://cdn.jsdelivr.net/gh/sviptzk/StaticFile_HEXO@v3.3.9/butterfly/img/loading.gif' />
   </div>
   <a class="btn-beautify button--animated  left larger prev red" href="#" title="上一页" style='display:none;'><i class="far fa-hand-point-left fa-fw "></i> 上一页 </a>
   <a class="btn-beautify button--animated larger next red" href="#" title="下一页" style="float: right;display: none;"><i class="far fa-hand-point-right fa-fw "></i> 下一页 </a>
   <span class="inline-tag grey page" style="position: absolute;transform: translateX(-50%);left: 50%;">Loading...</span>
   ```

3. 引入工具库并创建对象

   ```html
   <script src="https://unpkg.com/ispeak/index.js"></script>
   <script>
       if(typeof(Speak)=='undefined'){
           location.href='/speak'
       }
       new Speak({
           // 作者昵称
           nickname:'🦄Dreamy.TZK',
           // 每次显示的个数
           per_page: 3,
           // gitee的用户名
           owner: "antmoe",
           // gitee的仓库名
           reop: "speak",
           // 没有标签时的名称
           defaultLabelName: "Default",
           // 没有标签时的背景颜色
           defaultLabelColor: "#ffc107",
           // highlight代码高亮的主题   
           highlightcss:"/styles/monokai-sublime.min.css",
           // 为标签加入前缀修饰符
           emojiLabel: {
               // 标签名:修饰符
               Coder: "🎯",
               日常:"💬",
               Whoiam:'😶',
               想法:"💫",
               TODO:"🚧",
               随便说说:"🎈",
               测试:'👻',
           }
       }); 
   </script>
   ```

4. 完成

   接下来便可以显示你仓库里的issue了。

## 常见问题

1. 没有样式

   请手动引入示例样式或魔改样式，并在主题配置`inject->head`里引入。例如：

   ```yaml
   inject:
     head:
       - <link rel="stylesheet" href="https://unpkg.com/ispeak/Speak.css">
   ```

2. 小康的Speak页示例

   ```markdown
   ---
   title: Speak
   date: 2020-08-09 22:38:04
   top_img: https://tva1.sinaimg.cn/large/005B3XPgly1ghkxqgvmy0j30zk0irn2q.jpg
   aside: false
   comments: false
   
   ---
   
   <script src="https://cdn.jsdelivr.net/npm/jquery@latest/dist/jquery.min.js"></script>
   
   <center><font size='4px'>🍭 欢迎你的来访</font></center>
   
   <center ><font size='4px'>🍭 这里是小康的speak页面</font></center>
   
   ## 说明
   
   1. 这个页面是一个示例页面，因此你遇到bug，那么属于正常现象
   2. 此页逻辑虽然及其简单，但仍存在许多不足。毕竟我只是一个菜鸡😏
   3. 代码及样式会在以后优化，毕竟js写的太烂了。可优化空间很大！！
   4. speak仓库[码云](https://gitee.com/antmoe/speak)
   5. 可能会存在无法加载speak的情况，请尝试手动刷新即可！
   
   
   
   
   
   <div class="is-container"><img src='https://cdn.jsdelivr.net/gh/sviptzk/StaticFile_HEXO@v3.3.9/butterfly/img/loading.gif' /></div><a class="btn-beautify button--animated  left larger prev red" href="#" title="上一页" style='display:none;'><i class="far fa-hand-point-left fa-fw "></i> 上一页 </a><a class="btn-beautify button--animated larger next red" href="#" title="下一页" style="float: right;display: none;"><i class="far fa-hand-point-right fa-fw "></i> 下一页 </a>
   
   <span class="inline-tag grey page" style="position: absolute;transform: translateX(-50%);left: 50%;">Loading...</span>
   
   <script src="https://cdn.jsdelivr.net/gh/sviptzk/StaticFile_HEXO@2c7c0a9/butterfly/js/SpeakTool.js"></script>
   <script>
       if(typeof(Speak)=='undefined'){
           location.href='/speak'
       }
       new Speak({
           nickname:'🦄Dreamy.TZK',
           per_page: 3,
           owner: "antmoe",
           reop: "speak",
           defaultLabelName: "Default",
           defaultLabelColor: "#ffc107",
           highlightcss:"https://cdn.bootcdn.net/ajax/libs/highlight.js/10.1.1/styles/monokai-sublime.min.css",
           emojiLabel: {
               Coder: "🎯",
               日常:"💬",
               Whoiam:'😶',
               想法:"💫",
               TODO:"🚧",
               随便说说:"🎈",
               测试:'👻',
           }
       }); 
   </script>
   
   
   ```

   如果你对我上文中描述不清楚，可以参考我的页面在琢磨琢磨！

3. 其他问题

   请仔细看本文档。



## 最后

1. 此项目初衷：通过gitee发布issue，博客内获取作为说说展示。因此不会考虑在博客内容加入登陆等功能。如果一个完整的说说功能，请使用[artitalk](https://artitalk.js.org/)

