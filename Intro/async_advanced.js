function some_async_task(callback) {
    console.log("Beginning of task");
    setTimeout(function () {
        console.log("End of task");
        callback();
    }, 2000);
}
let some_promise=function () {
    return new Promise(function (resolve, reject) {
        some_async_task(resolve);
    });
}
some_promise();



