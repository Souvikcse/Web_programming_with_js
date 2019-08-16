function task(done) {
    console.log("we are doing");
    setTimeout(done, 2000);   //it calls done function after a sec but lets other parts of the program run, i.e, asynchronus call
    console.log(".......");
}
task(function () {
    console.log("task was done");
});

console.log("we did a task");

