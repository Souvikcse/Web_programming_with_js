const fs = require('fs');

fs.readFile(__dirname + '/file1.txt', function (err, data) {
    if (err) throw err;

    let ar= data.toString().split('\n');
    let animals = new Map();
    for (let i=0;i<ar.length;i++){
        if (!animals.has(ar[i]) ){
            animals.set(ar[i], 1);
        }
        else
            animals.set(ar[i], animals.get(ar[i]) + 1);
    }
    for (let [key, value] of animals){
        if (key!=='')
        console.log(key + ' => '+ value);
    }
})