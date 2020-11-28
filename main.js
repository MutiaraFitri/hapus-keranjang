// Modules to control application life and create native browser window
const { app, BrowserWindow } = require('electron')

function createWindow() {
    console.log("========================================\n\tWelcome Professor !\n========================================\n")

    // Create the browser window.
    this.mainWindow = new BrowserWindow({
        width: 1366,
        height: 800,
        webPreferences: {
            contextIsolation: false,
            nodeIntegration: false,
        }
    })

    // and load the index.html of the app.
    // Load a remote URL
    this.contents = mainWindow.webContents

    setInterval(function () { // Set interval for checking
        var x = new Date();
        var date = new Date(); // Create a Date object to find out what time it is

        if (date.getHours() === 16 && date.getMinutes() === 37 && date.getSeconds() === 19 && date.getMilliseconds() <= 100) { // Check the time
            mainWindow.loadURL('https://shopee.co.id/Case-for-iphone-6-6s-7-8-plus-X-Xr-Xs-Max-11-11-Pro-Max-clear-acrylic-casing-bening-transparan-i.104732272.2258258164')
            var y = new Date()
            console.log("Successfully Login " + (y - x) / 1000 + " seconds, at " + y)
            console.log("Sekarang jam : " + new Date())
            console.log("Product Page Loaded : " + (y - x) / 1000 + " seconds")
            let code = `
                        var helperButton = true;
                        var helperCheckout = true;
                        var helperPemesanan = true;

                        setInterval(function () {
                            var button = document.getElementsByClassName("btn btn-solid-primary btn--l YtgjXY")[0]
                            if(button){
                                if(helperButton){
                                    helperButton = false
                                    document.getElementsByClassName("product-variation")[0].click();
                                    document.getElementsByClassName("btn btn-solid-primary btn--l YtgjXY")[0].click();
                                }
                                
                                setInterval(function(){
                                    var buttonCheckout = document.getElementsByClassName("shopee-button-solid shopee-button-solid--primary")[0]
                                    if(buttonCheckout){
                                        if(helperCheckout){
                                            helperCheckout = false
                                            document.getElementsByClassName("shopee-button-solid shopee-button-solid--primary")[0].click();
                                        }

                                        setInterval(function(){
                                            var buatPesanan = document.getElementsByClassName("stardust-button stardust-button--primary stardust-button--large _22Ktrb")[0];
                                            if(buatPesanan && helperPemesanan){
                                                console.log(buatPesanan)
                                                buatPesanan.click();
                                                helperPemesanan=false;
                                            }
                                        },100);
                                    }
                                },100);
                            }
                        },100);
                        `;
            // Pake pilihan variant
            // let code = `
            //         setTimeout(function(){
            //             document.getElementsByClassName("product-variation")[0].click();
            //             document.getElementsByClassName("btn btn-solid-primary btn--l YtgjXY")[0].click();
            //         },200);

            //         setTimeout(function(){
            //             document.getElementsByClassName("shopee-button-solid shopee-button-solid--primary")[0].click();
            //         },1400);
            //         `;
            contents.executeJavaScript(code);
            // setTimeout(function () {
            //     var y = new Date()
            //     console.log("Checkout " + (y - x) / 1000 + " seconds")
            //     // Gapake pilih pengiriman
            //     // let code = `
            //     //             setTimeout(function(){
            //     //                     document.getElementsByClassName("stardust-button stardust-button--primary stardust-button--large _22Ktrb")[0].click();
            //     //             },300);
            //     // `;
            //     let code = `
            //                 setTimeout(function(){
            //                     document.getElementsByClassName("_3f0IkJ")[0].click();
            //                     setTimeout(function(){
            //                         document.getElementsByClassName("logistics-selection-channel-row")[2].click();
            //                         document.getElementsByClassName("stardust-button stardust-button--primary stardust-button--large _22Ktrb")[0].click();
            //                     },300);
            //                 },300);
            //     `;
            //     contents.executeJavaScript(code);
            // }, 3500);
            // }
            // )
            // });
        }
    }, 100);
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