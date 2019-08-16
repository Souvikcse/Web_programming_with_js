// let ob={
//     a:10,
//     b:"Souvik",
//     c: function () {
//        return (this.b + " is a "+ this.a);
//     }
// }
//console.log(ob.c());
function fun(){
    this.a=10;
    console.log(global == this);
}
console.log(new fun());
let o=fun();
console.log(o.a);