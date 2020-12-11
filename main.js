// Modules to control application life and create native browser window
const { app, BrowserWindow } = require('electron')

function createWindow() {
    console.log("Welcome Professor !")

    // Create the browser window.
    this.mainWindow = new BrowserWindow({
        width: 1366,
        height: 800,
        backgroundColor: '#2e2c29',
        webPreferences: {
            nodeIntegration: true,
        }
    })

    // and load the index.html of the app.
    // Load a remote URL
    mainWindow.loadURL('https://shopee.co.id/cart/')
    this.contents = mainWindow.webContents
    contents.once('did-finish-load', () => {
        console.log("Successfully Login")
        // console.log("First Step")
        let code = `
                    setTimeout(function(){
                        var x =  document.getElementsByClassName("cart-item__action").length
                        for(let i=0;i<x;i++){
                            setTimeout(function(){
                                document.getElementsByClassName("cart-item__action")[i].click();
                            },200)
                        }
                    },1000)
                    `;
        mainWindow.webContents.executeJavaScript(code);
        setTimeout(function () {

            app.quit()

        }, 5000)
    }
    )
    // });
    // Open the DevTools.
    // mainWindow.webContents.openDevTools()
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
    createWindow()

    app.on('activate', function () {
        // On macOS it's common to re-create a window in the app when the
        // dock icon is clicked and there are no other windows open.
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit()
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.