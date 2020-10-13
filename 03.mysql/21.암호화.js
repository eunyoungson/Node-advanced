/* const filename = process.arg[2];
const crypto =require('crypto');
const fs = require('fs');

const hash = crypto.createHash('sha256');

const input =fs.createReadStream(filename);
input.on('readable', () =>{
    var data = input.read();
    if (data)
    hash.update(data);
    else {
        console.log(`${hash.digest('hex')} ${filename}`);
    }
}); */



var crypto = require('crypto');
var shasum = crypto.createHash('sha256'); //sha512
shasum.update('crypto_hash');
//var output = shasum.digest('hex');
var output = shasum.digest('base64');

console.log('password:', output);
console.log(output.length);