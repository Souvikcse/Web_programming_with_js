function download_file() {
    return new Promise(function (resolve, reject) {
        console.log("Starting to download");
        setTimeout(function () {
            console.log("Download complete");
            resolve();
        }, 3000);
    })
}

let d_file=download_file();
setTimeout(function () {
    d_file.then(function () {
        console.log("After Download");
    });
}, 5000);