const {BrowserWindow, app} = require('electron');
require('v8-compile-cache');

app.on('ready', () => {
    const win = new BrowserWindow({
        frame: false,
        width: 1280,
        height: 720,
        title: 'The Lounge'
    });
    win.loadURL(`https://lg.ianon.app`);
});

app.on('window-all-closed', () => {
    app.quit();
});
