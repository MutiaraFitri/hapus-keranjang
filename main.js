// Modules to control application life and create native browser window
const { app, BrowserWindow } = require('electron')
const path = require('path')


function createWindow() {
    console.log("Welcome Professor !")
    var x = new Date();
    // Create the browser window.
    this.mainWindow = new BrowserWindow({
        width: 1366,
        height: 800,
        webPreferences: {
            nodeIntegration: true,
        }
    })

    // and load the index.html of the app.
    // Load a remote URL
    mainWindow.loadURL('https://shopee.co.id/cart/')
    var y = new Date()
    console.log("Successfully Login " + (y - x) / 1000 + " seconds")
    this.contents = mainWindow.webContents
    contents.once('did-finish-load', () => {
        var y = new Date()
        console.log("Product Page " + (y - x) / 1000 + " seconds")
        let code = `
                setTimeout(function(){
                    document.getElementsByClassName("stardust-checkbox__input")[0].click();
                    document.getElementsByClassName("shopee-button-solid shopee-button-solid--primary")[0].click();
                },500);
                `;
        contents.executeJavaScript(code);
        setTimeout(function () {
            var y = new Date()
            console.log("Checkout " + (y - x) / 1000 + " seconds")
            let code = `
                        setTimeout(function(){
                            console.log("ASem")
                            document.getElementsByClassName("stardust-button stardust-button--primary stardust-button--large _22Ktrb")[0].click();
                        },400);
            `;
            contents.executeJavaScript(code);
        }, 3500);
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