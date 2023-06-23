// 运行在 Electron 主进程 下的插件入口
const { BrowserWindow, ipcMain } = require("electron");
function onLoad(plugin) {}

// 创建窗口时触发
function onBrowserWindowCreated(window, plugin) {
}

module.exports = {
    onLoad,
    onBrowserWindowCreated
};
