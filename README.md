# ntqq-vconsole

BetterQQNT插件，使用vConsole进行前端调试  

使用前需要安装[BetterQQNT](https://github.com/mo-jinran/BetterQQNT)，并在QQNT新版上使用。


## 安装方法

一般情况下无需安装本插件，因为BetterQQNT会调用QQNT的DevTools  
但目前还未找到QQNT 9.8.5版本打开自身DevTools方法

clone或下载zip文件解压，将文件夹移动至`BetterQQNT数据目录/plugins/`下面，重启QQNT即可

安装插件后界面会多出一个`vConsole`浮条，点击就能弹出浮窗，和手机上微信里的`WebView`调试是一样的。

由于`vConsole`针对移动端优化，PC上效果非常不好，仅仅是能用，只能作为除了[Chii-Devtools](https://github.com/mo-jinran/chii-devtools)以外的另一种选择罢了（比Chii方便，无需npm安装包）。

自动根据判断暗黑模式，但是如果页面已经打开则无法自动切换，需要重新启动页面才可以（针对主界面，则是重启程序）。