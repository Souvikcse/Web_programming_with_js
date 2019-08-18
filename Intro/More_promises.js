function download(url) {
   return new Promise(function (resolve , reject){
       if (!url.startsWith('http')){
           reject(new Error("Url does not start with https"))
       }
       else {
           console.log("Starting download: "+ url);
           setTimeout(function () {
               let downloaded_file=url.split("/").pop();
               resolve(downloaded_file);
           }, 2000);
       }
    })
}
function resize(filename) {
    return new Promise(function (resolve, reject) {
        if (!filename.endsWith('png')){
            reject(new Error("File is not an image"))
        }
        else {
            console.log("Starting to resize image: "+ filename);
            setTimeout(function () {
                let resizedfile=filename.split(".")[0]+"-(1).png";
                resolve(resizedfile);
            }, 2000);
        }
    })
}

download("https://Souvik-Banerjee/profile?-3001/profile-pic.png")
    .then(resize).then(function (resizedfile) {
    console.log("File resized as: "+ resizedfile);
}).catch(function (err) {
    console.log(err);
})