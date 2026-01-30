import { app, BrowserWindow } from 'electron';

const createWindow = () => {
  const win = new BrowserWindow({
    width: 1280,
    height: 720
  })

  win.loadFile('./src/app.html')
}

app.on('ready', () => {
  createWindow()
})