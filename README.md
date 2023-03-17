# 🎯微软CRX下载器（Microsoft CRX Downloader）
* 本脚本能使非Edge浏览器也能从微软扩展商店下载crx扩展文件
* 在0.16版本暂时(2021.10.25)解决了chromium内核浏览器点击“下载CRX”后无法下载的问题

# 📖使用流程
* **步骤一、若浏览器没有安装油猴(GM)/暴力猴(VM)/篡改猴(TM)。若已安装此类插件，请直接到（步骤二）**

>1、复制所有脚本代码<br>
>2、打开[微软扩展商店](https://microsoftedge.microsoft.com/addons/Microsoft-Edge-Extensions-Home)，搜索[“tampermonkey”（篡改猴）](https://microsoftedge.microsoft.com/addons/detail/iikmkjmpaadaobahmlepeloendndfphd)或[“violentmonkey”（暴力猴）](https://microsoftedge.microsoft.com/addons/detail/eeagobfjdenkkddmbclomhiblgggliao)，点击进入插件详情页。<br>
>3、按f12打开控制台，将1中复制的代码粘贴到控制台输入框，回车键启用代码<br>
>4、此时就可以下载篡改猴/暴力猴了<br>
>5、进入浏览器的扩展管理页面(一般为:chrome://extensions)，右上角打开“开发者模式”<br>
>6、在电脑资源管理器中找到已经下载好的插件，直接鼠标左键按住拖到浏览器扩展管理中。其他安装第三方插件方法另行百度。

* **步骤二、已安装油猴(GM)/暴力猴(VM)/篡改猴(TM)等脚本管理插件**

>1、重新回到本脚本页面，点击安装直接将脚本安装到插件里<br>
>2、后续安装其他插件就可以直接去微软插件商店，点击“下载CRX”图标或点击进入扩展详情页面后再点击“下载CRX”图标下载插件啦

# 💊问题解答

**Q1:没有出现“下载CRX”图标**

A1:请确认本脚本已启用,关闭广告拦截插件,多刷新下页面

<br>

**Q2:点击图标后没反应或提示“程序包无效”**

A2:在0.16版本暂时解决了这个问题。如果还是点击后无反应，解决办法:
>1.请多点几次。<br>
>2.如果还是不行，那可能是被浏览器屏蔽了。设置-网站设置-搜索microsoft.com-然后选择edge.microsoft.com，把“弹出式窗口和重定向”改成允许。<br>
>3.如果还是不行，那还是采用备用下载方式吧:右键图标，右键选择“链接另存为”，或者复制链接到新标签页打开/粘贴到第三方下载器中下载

<br>

**Q3:手机kiwi，启动脚本无法覆盖kiwi自带图标替换功能**

A3:暂时无法解决。kiwi内嵌了一个替换功能，无法关闭。

# 🔔特别声明

* 本脚本仅用于学习交流，请勿非法使用
* 本人业余时间开发，非专业开发者，代码质量不佳。如果有大佬愿意帮忙优化，可以通过Greasyfork/Github联系我QwQ

# 🔍参考截图
从左往右(从上往下)依次为:移动端主页、移动端详情页、PC端主页、PC端详情页

![mobile](https://user-images.githubusercontent.com/87429695/129848032-2d4489de-d830-4f5c-b9ee-932d0c69099a.png)
![mobile2](https://user-images.githubusercontent.com/87429695/129849194-303853cf-ee73-4696-bb3f-3e323b831a0c.png)
![pc](https://user-images.githubusercontent.com/87429695/129848038-8f4c7109-db79-4456-adf5-6909f89f695a.png)
![pc2](https://user-images.githubusercontent.com/87429695/129849207-1a11d60c-570c-4a58-bbd7-5f04d137089b.png)
