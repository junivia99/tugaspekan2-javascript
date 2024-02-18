const prompt = require('prompt-sync')({sigint: true});
function pangkat(a){
    return Math.sqrt(a);
}
console.log('Aplikasi Akar Pangkat 2');
const num = prompt('Masukkan angka : ');


if(num  < 0){
    console.log('Tidak bisa input bilangan negatif');
}
else if(num%2!=0){
    console.log('Tidak bisa input bilangan ganjil');
}
else{
console.log('Hasil akar pangkat 2 : ');
console.log(pangkat(num));
}

