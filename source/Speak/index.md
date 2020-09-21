---
title: 小康的Speak使用
icons: [fas fa-fire red, fas fa-star green]
short_title: 小康的Speak使用
---

![image-20200811184635204](https://cdn.jsdelivr.net/gh/blogimg/HexoStaticFile2@0bdc30cf733b8af36a4a42a248878eb75de8795a/2020/08/11/4e58737222b4bf0ecbb4e9040fd039ed.png)

示例：

{% btns circle grid5 %}
{% cell 小康博客, https://www.antmoe.com/speak/, https://cdn.jsdelivr.net/gh/sviptzk/HexoStaticFile@latest/avatar.jpg %}
{% endbtns %}



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

## 项目说明

一个基于Gitee的“说说”，通过在gitee仓库中的issue进行说说的展示。项目灵感来自于：[微博](https://tomotoes.com/blog/weibo/)

![image-20200921161543706](https://files.alexhchu.com/2020/09/21/59c7e63d3e50c.png)

## 开坑记录

项目最早写于2020年8月9日，但当时的做法是通过外部载入各种依赖（JQuery、marked等）进行的，虽然中间还有一次试图将其并入js内部，但采用的方式仅仅是通过jQuery的getScript方式，由于同时间所用Hexo博客主题作者更新了pjax，导致出现了一些出人意料地错误。直到9月20日，最终决定通过webpack打包，将其放在一起并放弃jQuery（为了减少体积）。

## 如何使用

使用很简单，只需要一个class为`container`的容器和一个实例化的Speak对象即可。

> 由于基于某个主题开发，部分样式可能存在细微差别。

```html
<div class="is-container"></div>
<script src="main.js"></script>
<script>
    new Speak(
        {
            nickname: '🦄Dreamy.TZK',
            per_page: 5,
            owner: "antmoe",
            repo: "xiaokang.me",
            defaultLabelName: "Default",
            defaultLabelColor: "#ffc107",
            // highlight样式
            highlightcss:
            "https://cdn.bootcdn.net/ajax/libs/highlight.js/10.1.1/styles/monokai-sublime.min.css",
            emojiLabel:
            {
                Coder: "🎯",
                日常: "💬",
                Whoiam: '😶',
                想法: "💫",
                TODO: "🚧",
                随便说说: "🎈",
                测试: '👻',
            },
            prevBtn:'<a class="btn-beautify button--animated left larger prev red" href="#" title="上一页" style="display:none;float:left" data-pjax-state=""><i class="far fa-hand-point-left fa-fw"></i> 上一页</a>',
            nextBtn:'<a class="btn-beautify button--animated larger next red" href="#" title="下一页" style="float: right; display: block;" data-pjax-state=""><i class="far fa-hand-point-right fa-fw"></i> 下一页</a>',
        });
</script>
```

DEMO：[Speak](https://www.antmoe.com/speak)

## 最后

1. 此项目初衷：通过gitee发布issue，博客内获取作为说说展示。因此不会考虑在博客内容加入登陆等功能。如果一个完整的说说功能，请使用[artitalk](https://artitalk.js.org/)
