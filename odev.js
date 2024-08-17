// 1.soru-ankara ve istanbul arasında 1000kmlik bir yolu ortalama 100kmde 10litrelik bir yakıtla tamamlayan bir aracın
//harcadığı yakıt kaç litredir

// 2.soru-8 elemanlı bir array oluşturulup bu arrayin elemanları 1den 8e kadar olacaktır
//bu arrayin elemanlarının sadece çift sayı olanları ekrana konsolla yazdırılacaktır

// 3.soru-boş olarak oluşturulan bir arraye 1den 50ye kadar olan sadece tek sayılar döngüyle eklenecektir
//let a=[]

// 4.soru- [0, 3, 7, 2, 11, 16, 18, 20, 9, 36, 45] 
//bu küme içerisindeki tek sayıları bulan ve yeni bir kümeye ekleyen kod yazın.

//1. soru
let yol = 1000;
let ortalamaYakıt = 10; //100km için tutulmuş bir ortalama
let harcananYakıt ; 
harcananYakıt = (yol/100) *ortalamaYakıt;
console.log(harcananYakıt);


//2.soru
const number = [1, 2, 3, 4, 5, 6, 7, 8];
for (let i=1; i<8 ; i=i+2){
console.log(number[i])
     
 }

//3.soru
let kume = [];
for (let i= 1; i<= 50; i += 2){
    kume.push(i);
 }
console.log(kume);

//4. soru
let eskisayilar =[0, 3, 7, 2, 11, 16, 18, 20, 9, 36, 45];
let teksayilar= []
let ciftsayilar= []
for (let i=0 ; i<eskisayilar.length ; i++){
if(eskisayilar[i] % 2 !=0){
teksayilar.push(eskisayilar[i])
}
else{
   
    ciftsayilar.push(eskisayilar[i])
}



}
console.log(teksayilar);

console.log(ciftsayilar);


    





