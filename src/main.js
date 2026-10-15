const { app, BrowserWindow } = require('electron/main')

const createWindow = () => 
{
    const win = new BrowserWindow(
        {
            width: 800,
            height: 600
        }
    )

    win.loadFile('layout/main.html')
}


// On Mac closing all windows doesn't close the app, just opens a new window when trying to open it again.
app.whenReady().then(() => {
    createWindow()

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})


// Windows and Linux close the app when all (main?) the windows are closed.
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})