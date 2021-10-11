import { app, BrowserWindow } from "electron";
import path from "path";

function rotateText(document: any): void {
  console.log(document)
}

// Quit when all windows are closed. 
app.on('window-all-closed', function() 
{ 
  // On OS X it is common for applications and their 
  // menu barto stay active until the user quits  
  // explicitly with Cmd + Q if (process.platform != 'darwin') 
  { 
    app.quit(); 
  } 
}); 

app.on("ready", () => {
  console.log("App is ready");
  const win = new BrowserWindow({
    width: 600,
    height: 400,
  });
  const indexHTML = path.join(__dirname + "/index.html");
  win.loadFile(indexHTML).then((document) => {
      console.log(document);
  });
});
