const {BrowserWindow, app} = require("electron");
require('v8-compile-cache');

app.on("ready", () => {
  const win = new BrowserWindow({
    frame: false,
    width: 1280,
    height: 720,
    title: "Veso"
  });
  win.loadURL(`file://${__dirname}/dist/index.html`);
});

app.on("window-all-closed", () => {
  app.quit();
});
