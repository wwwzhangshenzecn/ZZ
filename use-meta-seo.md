# meta 标签的作用

<pre>
	此文档介绍< meta>的作用，meta标签共有两个属性，它们分别是http-equiv属性和
name属性。
</pre>
- - -
##定义和用法
* < meta> 元素可提供有关页面的元信息（meta-information），比如针对搜索引擎和更新频度的描述和关键词。
* < meta> 标签位于文档的头部，不包含任何内容。<meta> 标签的属性定义了与文档相关联的名称/值对。
##作用
<pre>
	meta 是用来在HTML文档中模拟HTTP协议的响应头报文。meta 标签用于网页的＜head＞与＜/head＞中，meta 标签的用处很多。meta 的属性有两种：
name和http-equiv-name属性主要用于描述网页，对应于content（网页内容），以便于搜索引擎机器人查找、分类（目 前几乎所有的搜索引擎都使用网上机
器人自动查找meta值来给网页分类）。这其中最重要的是description（站点在搜索引擎上的描述）和 keywords（分类关键词），所以应该给每页加一个meta
值。 
</pre>
---
#META标签可分为两大部分：HTTP-EQUIV和NAME变量。

##http-equiv属性
*  `＜meta http-equiv="Content-Type" contect="text/html";charset=gb_2312-80"＞`
和 `＜meta http-equiv="Content-Language" contect="zh-CN"＞`用以说明主页制作所使用的文字以及语言；
又如英文是ISO-8859-1字符集，还有BIG5、utf-8、shift-Jis、Euc、Koi8-2等字符集。

* `＜meta http-equiv="Refresh" contect="n;url=http://yourlink"＞`定时让网页在指定的时间n内，跳转到页面http;//yourlink。

* `＜meta http-equiv="Expires" contect="Mon,12 May 2001 00:20:00 GMT"＞`可以用于设定网页的到期时间，一旦过期则必须到服务器上重新调用。需要注意的是必须使用GMT时间格式.

* `＜meta http-equiv="Pragma" contect="no-cache"＞`是用于设定禁止浏览器从本地机的缓存中调阅页面内容，设定后一旦离开网页就无法从Cache中再调出。
* `＜meta http-equiv="Pics-label" contect=""＞`网页等级评定，在IE的internet选项中有一项内容设置，可以防止浏览一些受限制的网站，而网站的限制级别就是通过meta属性来设置的.

* `＜meta http-equiv="windows-Target" contect="_top"＞`强制页面在当前窗口中以独立页面显示，可以防止自己的网页被别人当作`＜meta http-equiv="Page-Enter" contect="revealTrans(duration=10,transtion=50)"＞`和`＜meta http-equiv="Page-Exit"contect="revealTrans(duration=20，transtion=6)"＞`设定进入和离开页面时的特殊效果，这个功能即FrontPage中的“格式/网页过渡”，不过所加的页面不能够是一个frame页面。一个frame页调用。
***
##name属性
* `＜meta name="Generator" contect=""＞`用以说明生成工具（如Microsoft FrontPage 4.0）等
* `＜meta name="KEYWords" contect=""＞`向搜索引擎说明你的网页的关键词
* `＜meta name="DEscription" contect=""＞`告诉搜索引擎你的站点的主要内容
* `＜meta name="Author" contect="你的姓名"＞`告诉搜索引擎你的站点的制作的作者
* `＜meta name="Robots" contect="all|none|index|noindex|follow|nofollow"＞`
 
	####属性说明

	1.设定为all：文件将被检索，且页面上的链接可以被查询；  
	2.设定为none：文件将不被检索，且页面上的链接不可以被查询；  
	3.设定为index：文件将被检索；  
	4.设定为follow：页面上的链接可以被查询；  
	5.设定为noindex：文件将不被检索，但页面上的链接可以被查询；  
	6.设定为nofollow：文件将不被检索，页面上的链接可以被查询。  
____
##关于HTTP-EQUIV的补充
###关于META标签中的"description" 

    description"中的content="网页描述"，是对一个网页概况的介绍，这些信息可能会出现在搜索结果中，因此需要根据网页的实际情况来 设计，尽量避免与网页内容不相关
    的“描述”，另外，最好对每个网页有自己相应的描述（至少是同一个栏目的网页有相应的描述），而不是整个网站都采用同样的 描述内容，因为一个网站有多个网页，每个网页
	的内容肯定是不同的，如果采用同样的description，显然会有一些网页内容没有直接关系，这样不仅不 利于搜索引擎对网页的排名，也不利于用户根据搜索结果中的信息来判断
	是否点击进入网站获取进一步的信息。 
### 关于META标签中的"Keywords"
	与META标签中的"description"类似，"Keywords"也是用来描述一个网页的属性，只不过要列出的内容是“关键词”，而不是网页的介 绍。这就意味着，要根据网页的主题和
	内容选择合适的关键词。在选择关键词时，除了要考虑与网页核心内容相关之外，还应该是用户易于通过搜索引擎检索的，过 于生僻的词汇不太适合做META标签中的关键词。关于
	META标签中关键词的设计，要注意不要堆砌过多的关键词，罗列大量关键词对于搜索引擎检索没有太大 的意义，对于一些热门的领域（也就是说同类网站数量较多），甚至可能
	起到副作用。

***
#SEO介绍
[百度资料](http://baike.baidu.com/link?url=ktwpIqFVZ-g44EQGd3nNsSJ6QBub1g-nd3wgrhNPPnPbXv7h2MxF7QCcw-ocFFi8E05VArRJz_dOadCN5W7vA_)
##seo解释
SEO是指在了解搜索引擎自然排名机制的基础之上，对网站进行内部及外部的调整优化，改进网站在搜索引擎中关键词的自然排名，获得更多的展现量，吸引更多目标客户点击访问网站，从而达到互联网营销及品牌建设的目标。搜索引擎检索原则是不断更改的，检索原则的更改会直接导致网站关键字在搜索引擎上排名的变化，所以搜索引擎优化并非一劳永逸。
##特征特点
SEO全称：Search Engine Optimization，即搜索引擎优化。为了说明什么是网站对搜索引擎优化，站长搜索引擎不优化的网站分为以下特征：  
1、网页中大量采用图片或者Flash等富媒体（Rich Media）形式，没有可以检索的文本信息，而SEO最基本的就是文章SEO和图片SEO；  
2、网页没有标题，或者标题中没有包含有效的关键词；
3、网页正文中有效关键词比较少（最好自然而重点分布，不需要特别的堆砌关键词）；  
4、网站导航系统让搜索引擎“看不懂”；  
5、大量动态网页影响搜索引擎检索；  
6、没有其他被搜索引擎已经收录的网站提供的链接；  
7、网站中充斥大量欺骗搜索引擎的垃圾信息，如“桥页（也叫门页，过渡页）”、颜色与背景色相同的文字；  
8、网站中缺少原创的内容，完全照搬硬抄别人的内容等。
