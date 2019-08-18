function download(url) {
    return new Promise(function (resolve, reject) {
        if (!url.startsWith('https')){
            reject(new Error('Url does not start with https'));
        }
        else {
            console.log("Starting download: "+ url);
            setTimeout(function () {
                let downloaded_file=url.split("/").pop();
                resolve(downloaded_file);
            }, 3000);
        }
    })
}
function resize(file_name) {
    return new Promise(function (resolve, reject) {
        if (!file_name.endsWith('png')){
            reject(new Error('File type is not png'));
        }
        else {
            console.log("Starting to resize: "+ file_name);
            setTimeout(function () {
                let resized_file=file_name.split(".")[0]+"-resized.png";
                resolve(resized_file);
            },3000)
        }
    })
}

Promise.all([download('https://google.com/search?=bike/yamaha.png'),
                   download('https://google.com/search?=bike/bajaj.png'),
                   download('https://google.com/search?=bike/TVS.png')
]).then(function (download_values) {
    return Promise.all(download_values.map(resize))
}).then(function (resized_values) {
    console.log("Downloaded files: ");
    console.log(resized_values);
}).catch(function (err) {
    console.log(err);
})
    
