const path = require("path");
const { app, BrowserWindow } = require("electron");
const isDev = require("electron-is-dev");

const createWindow = () => {
  const window = new BrowserWindow({
    width: 400,
    height: 200,
    webPreferences: {
      nodeIntegration: true,
    },
    frame: false
  });

  window.loadURL(
    isDev
      ? "http://localhost:3000"
      : `file://${path.join(__dirname, "../build/index.html")}`
  );

  if (isDev) {
    window.webContents.openDevTools({ mode: "detach" });
  }
};

app.commandLine.appendSwitch("disable-gpu")
app.commandLine.appendArgument("disable-gpu")
app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    createWindow();
  }
});
