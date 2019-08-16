function add(x, y) {
    return x+y;
}

let sum1=add(4,5);
let sum2=add;
console.log(sum1);
console.log(sum2);

function creategreet(name) {
    let firstname=name.split(" ")[0];
    function greeter() {
        console.log("Hello " + firstname);
    }
    return greeter;
}

let johngreet=creategreet("John Doe");
let harrygreet=creategreet("Harry Potter");

johngreet();
harrygreet();