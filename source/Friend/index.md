---
title: 基于Gitee的友链创建
icons: [fas fa-fire red, fas fa-star green]
short_title: 基于Gitee的友链创建
---



示例：

{% btns circle grid5 %}
{% cell 小康博客, https://www.antmoe.com/friends/, https://cdn.jsdelivr.net/gh/sviptzk/HexoStaticFile@latest/avatar.jpg %}
{% endbtns %}

更新日志：暂无

## 前言

1. 此项目目的为了解决每次添加友链而频繁`deploy`博客的问题
2. idea参考于xaoxuu
3. 使用此方式可能会导致一些问题，请谅解。

## 各部分介绍

1. 项目地址

   [https://unpkg.com/ifriend/index.js](https://unpkg.com/ifriend/index.js)

   为了方便的自动更新，因此选择了unpkg，如果你觉得慢可以自行下载上传到GitHub并使用jsd连接。

2. Friend的样式问题

   默认主题并不自带一些花里胡哨的功能，如果需要请自行添加CSS样式。

   {% folding green, CSS样式 %}

   在线地址：[https://unpkg.com/ifriend/friend.min.css](https://unpkg.com/ifriend/friend.min.css)

   ```css
/* 
   TAG 友链页CSS
*/
   /* 边框呼吸灯效果 */
   @keyframes link_custom {
       from {
           box-shadow: 0 0 5px var(--primary-color, grey),
               inset 0 0 5px var(--primary-color, grey),
               0 1px 0 var(--primary-color, grey);
       }
   
       to {
           box-shadow: 0 0 20px var(--primary-color, grey),
               inset 0 0 10px var(--primary-color, grey),
               0 1px 0 var(--primary-color, grey);
       }
   }
   /* 边框彩色呼吸灯 */
   @keyframes link_custom1 {
       0% {
           box-shadow: 0 0 4px #ca00ff;
       }
   
       25% {
           box-shadow: 0 0 16px #00b5e5;
       }
   
       50% {
           box-shadow: 0 0 4px #00f;
       }
   
       75% {
           box-shadow: 0 0 16px #b1da21;
       }
   
       100% {
           box-shadow: 0 0 4px #f00;
       }
   }
   /* 边框闪烁 */
   @keyframes borderFlash {
       from {
           border-color: transparent;
       }
   
       to {
           border-color: var(--primary-color, grey);
       }
   }
   /* 头像自动旋转 */
   @keyframes auto_rotate_left {
       from {
           transform: rotate(0);
       }
       to {
           transform: rotate(-360deg);
       }
   }
   @keyframes auto_rotate_right {
       from {
           transform: rotate(0);
       }
       to {
           transform: rotate(360deg);
       }
   }
   .flink#article-container .flink-list > .flink-list-item a:hover {
       color: #fff;
   }
   
   .flink .flink-list > .flink-list-item a {
       color: var(--primary-color, #49b1f5);
       text-decoration: none;
   }
   
   .flink .flink-list > .flink-list-item:hover {
       box-shadow: 0 2px 20px var(--primary-color, #49b1f5);
       animation-play-state: paused;
   }
   
   .flink#article-container .flink-list > .flink-list-item:before {
       background: var(--primary-color, #49b1f5);
   }
   
   .flink .flink-list > .flink-list-item {
       border: 0px solid var(--primary-color, #49b1f5);
   }
   .flink#article-container .flink-list > .flink-list-item:hover img {
       -webkit-transform: rotate(var(--primary-rotate));
       -moz-transform: rotate(var(--primary-rotate));
       -o-transform: rotate(var(--primary-rotate));
       -ms-transform: rotate(var(--primary-rotate));
       transform: rotate(var(--primary-rotate));
   }
   /* 头像自动旋转 */
   .flink#article-container .flink-list > .flink-list-item a .lauto {
       animation: auto_rotate_left var(--autotime) linear infinite;
   }
   .flink#article-container .flink-list > .flink-list-item a .rauto {
       animation: auto_rotate_right var(--autotime) linear infinite;
   }
   /* 友联字体颜色 */
   
   /* name与desc的颜色 */
   .flink#article-container .flink-list > .flink-list-item .customcolor {
       color: var(--namecolor, #1f2d3d);
   }
   /* name与des鼠标悬停的字体颜色 */
   .flink#article-container .flink-list > .flink-list-item .customcolor:hover {
       color: #fff;
   }
   ```
   
   {% endfolding %}
   
5. Friend容器

   容器可以通过js添加到友链顶部，也可以直接在markdown里面写。如果写在markdown里那么是放在所有友链的最后边。关于具体容器名称是什么，可以通过创建对象时指定。

6. Friend对象

   ```javascript
   new Friend({
       // 需要指定的容器可以是id或者class
       el: "#friend1",
       // 你的gitee id
       owner: "antmoe",
       // 你的gitee 仓库
       repo: "friend",
   	// 排序规则 asc或desc
       direction_sort: "asc",
       // 标签排序，这样表示乐特专属在最上边，大佬们在其之后。可以不写全，未写部分则在之后按时间顺序排序
       sort_container: ["乐特专属", "大佬们"],
       // 每个分组(标签)的描述
       // 标签:描述
       labelDescr: {
           大佬们: "<span style='color:red;'>这是一群大佬哦！</span>",
           菜鸡们: "<span style='color:red;'>这是一群菜鸡哦！</span>",
       },
   });
   ```
   
   

## 修改友链页面

打开我们的友链页面。

1. 引入jQuery库

   由于Speak使用了jQuery的语法，因此需要引入jQuery。

   > butterfly主题的jQuery在文章后边边引入的，因此我们需要在文章开头处再次引入。

   ```markdown
   <script src="https://cdn.jsdelivr.net/npm/jquery@latest/dist/jquery.min.js"></script>
   ```

2. 引入Friend对象

   ```html
   
   ```
<script src='https://unpkg.com/ifriend/index.js'></script>
   ```
   
3. 创建容器并初始化对象

   ```html
   <script>
       // 使用jQuery的方法，将容器放到全局最上方
       $('.flink').prepend('<div id="friend1"></div>')
       // 解决pjax问题
       if(typeof(Friend)=='undefined'){
           location.href='/friends'
       }
       new Friend({
           el: "#friend1",
           owner: "antmoe",
           repo: "friend",
           direction_sort: "asc",
           sort_container: ["乐特专属", "大佬们"],
           labelDescr: {
               大佬们: "<span style='color:red;'>这是一群大佬哦！</span>",
               菜鸡们: "<span style='color:red;'>这是一群菜鸡哦！</span>",
           },
       });
   </script>
   ```

4. 完成

   接下来便可以显示你的码云小伙伴了

## 码云issue格式

可以将以下内容添加到你的模板

```markdown
**标题请书写你的链接，不要写其他内容**
​```yaml
# 显示名称
name: 你的名称

# 跳转地址
link: 你的链接

# 你的头像
avatar: 你的头像

# 你的描述
descr: 你的描述

# 边框及鼠标悬停的背景颜色，允许设置渐变色
--primary-color: #49b1f5

# 边框大小
border-width: 0px

# 边框样式
border-style: solid

# 鼠标悬停头像旋转角度
--primary-rotate: 0deg

# 边框动画 参考 https://developer.mozilla.org/zh-CN/docs/Web/CSS/animation
# 内置动画：borderFlash（边框闪现）、link_custom1(跑马灯)、link_custom(主颜色呼吸灯)
animation: borderFlash 0s infinite alternate

# 头像动画 参考 https://developer.mozilla.org/zh-CN/docs/Web/CSS/animation
# 内置动画：auto_rotate_left（左旋转）、auto_rotate_right（右旋转）
img_animation: auto_rotate_right 0s linear infinite
​```

**其他问题参考[Friend](https://docs.tzki.cn/Friend)**
```

## 常见问题

1. 没有样式

   请手动引入示例样式或魔改样式，并在主题配置`inject->head`里引入。例如：

   ```yaml
   inject:
     head:
       - <link rel="stylesheet" href="https://unpkg.com/ifriend/friend.min.css">
   ```

2. 小康的Friend页示例

   ```markdown
   ---
   title: 友情链接
   date: 2020-02-02 10:00:00
   type: "link"
   top_img: https://tva1.sinaimg.cn/large/832afe33ly1gbi1rf2bppj21hc0jgwmw.jpg
   aside: false
   
   ---
   
   <script src="https://cdn.jsdelivr.net/npm/jquery@latest/dist/jquery.min.js"></script><script src='https://cdn.jsdelivr.net/gh/sviptzk/StaticFile_HEXO@0f0db55/butterfly/js/Friend.js'></script>
   
   <script>
       $('.flink').prepend('<div id="friend1"></div>')
       if(typeof(Friend)=='undefined'){
           location.href='/friends'
       }
       new Friend({
           el: "#friend1",
           owner: "antmoe",
           repo: "friend",
           direction_sort: "asc",
           sort_container: ["乐特专属", "大佬们"],
           labelDescr: {
               大佬们: "<span style='color:red;'>这是一群大佬哦！</span>",
               菜鸡们: "<span style='color:red;'>这是一群菜鸡哦！</span>",
           },
       });
   </script>
   
   
   
   
   
   
   
   
   ## 申请友链格式
   
   {% tabs tab-id %}
   
   <!-- tab 申请友链 -->
   
   1. 进入[friend](https://gitee.com/antmoe/friend)仓库，并且登陆账号
   2. 阅读README文件
   3. 点击Issue，按照要求进行新建Issue
   4. 等待管理员审核
   
   > 1. 关于修改信息
   >
   >    如果你已经审核通过，但是需要更改当时的信息，那么你可以再次进入此仓库搜索你的域名即可再次编辑当时发表的Issue，这样就可以修改你的信息了！
   >
   >    如果你是在2020年8月15日之前申请的友链需要修改信息需要重新到gitee进行新建issue，等待管理员审核通过后即可修改完成。
   >
   > 2. 关于清理友链
   >
   >    我会不定期访问你的友链，如果出现网站无法访问、404、友链入口难以发现、删除本站友链等情况我会直接将你的网站在此站上移除，如需再次添加友链，请重新申请。
   
   <!-- endtab -->
   
   
   
   <!-- tab 友联须知 -->
   
   <div class="checkbox cyan checked"><input type="checkbox" checked><p>大佬可不受以下要求限制</p></div>
   <div class="checkbox green checked"><input type="checkbox" checked><p>小站是 🍤学习 or 🍥博客站</p></div>
   
   <div class="checkbox green checked"><input type="checkbox" checked><p>至少一篇原创，没有原创的内容📔📕📗📘📙📓的话很快就会死掉的呢  </p></div>
   
   <div class="checkbox minus yellow checked"><input type="checkbox" checked><p>申请友联请务必能在你的友联处看到本站链接。</p></div>
   
   <div class="checkbox minus yellow checked"><input type="checkbox" checked><p>网站要有维护，定期或不定期均可</p></div>
   
   <div class="checkbox minus yellow checked"><input type="checkbox" checked><p>如果内容含有广告会酌情处理。</p></div>
   
   <div class="checkbox times red checked"><input type="checkbox" checked><p>含有违反中国法律内容的一律不通过。</p></div>
   
   <div class="checkbox times red checked"><input type="checkbox" checked><p>网站被QQ、微信标红(不包含非官方提示)的一律不通过。</p></div>
   
   <div class="checkbox times red checked"><input type="checkbox" checked><p>3个月以上没有新文章、网站打不开、取消本站链接本站将直接移除你的链接。</p></div>
   
   <div class="checkbox times red checked"><input type="checkbox" checked><p>新站请过段时间再来申请。</p></div>
   
   <!-- endtab -->
   
   <!-- tab 清理记录 -->
   
   {% timeline 友链清理记录 %}
   
   如果出现误清理请到<a href='https://gitee.com/antmoe/friend' target="_blank">friend</a>重新申请即可。
   
   {% timenode 2020年8月15日 %}
   
   - Royce--www.roy\*\*\*\*03.top
   
     取消本站友链
   
   - 雾时之森--m1**4\.cn
   
     网站打不开
   
   - 鬼鬼的博客--ssy\*\*\*\*\*ove\.me
   
     域名加速到期
   
   - Andu博客站--www.xo\*\*\*un\.cn
   
     网站404
   
   - Learm--blog.le\*\*m.top
   
     取消本站链接
   
   - TanHua’s Blog--tu\*\*\*\*\*an\.top
   
     疑似改版
   
   - SvnYang-\-www\.sv\*\*\*ng\.cn
   
     找不到友链入口
   
   以上用户如果出现误清理请到[friend](https://gitee.com/antmoe/friend)重新申请即可。
   
   {% endtimenode %}
   
   
   
   {% endtimeline %}
   
   <!-- endtab -->
   
   {% endtabs %}
   
   <div class="note danger icon">
       <p>注意：添加友链请到<a href='https://gitee.com/antmoe/friend' target="_blank">friend</a>参照README文件进行添加。在此留言进行申请友链直接忽略！！！</p>
   </div>
   
   
   
   
   ## 我的信息
   
   ​```yaml
   name: 小康博客
   link: https://www.antmoe.com/
   avatar: https://cdn.jsdelivr.net/gh/sviptzk/HexoStaticFile@latest/avatar.jpg
   descr: 一个收藏回忆与分享技术的地方！
   #以下内容如果存在的情况下
   width: 1px (代表边框的大小border-width)
   color: "#881B12" 
   ​```
   
   
   ```
   

如果你对我上文中描述不清楚，可以参考我的页面在琢磨琢磨！

3. 其他问题

   请仔细看本文档。


