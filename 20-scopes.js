//fonksiyonlar kendi scope alanlarını oluşturur
//var ile if block içerisinde oluşturmaz
//let ve const ile block içi scope oluşumunu sağlayabilir

let kullanici= "global scope : emin";
let isim = "emin";
isim = "nur";

console.log(isim);
function isimYazdir() {
    var kullanici = "function scope :nur";
    console.log(kullanici);
}

if(true){
    let kullanici ="if scope: yasin";
console.log(kullanici);

}
console.log(kullanici);
isimYazdir();

