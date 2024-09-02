let meyve = ["elma", "armut", "muz", "portakal", "karpuz"];

// console.log(meyve[0]);
// console.log(meyve[1]);
// console.log(meyve[2]);
// console.log(meyve[3]);
// console.log(meyve[4]);

// for(let i =0 ; i<meyve.length; i++){
//     console.log(meyve[i]);
    
// }

//0dan 100e kadar sayıları yazdır 
// for( let i=0; i<=100; i= i+2){
//     console.log(i);
    
// }

//sayı toplama
//let sayilar =[10, 20, 5, 50, 100, 200]
// console.log(sayilar[0] + sayilar[1] + sayilar[2] + sayilar[3] + sayilar[4] + sayilar[5]);

// let toplam = 0;
// for(let i=0 ; i<sayilar.length; i++){
//     console.log(toplam = toplam+sayilar);
    
// }

//kısayol index
// let sayilar =[10, 20, 5, 50, 100, 200];
// let toplam = 0;
// for(let i in sayilar){
//     console.log(toplam += sayilar[i]);
    
// }

//direkt sayıları alma
// let sayilar =[10, 20, 5, 50, 100, 200];
// let toplam = 0;
// for(let sayi of sayilar){
//     console.log(toplam += sayi);
    
// }

//object ile döngü
// const user ={
//     "ad": "emin",
//     "soyad": "başbayan",
//     "email": "basbyanemin@gmail.com",
//     "yas": 25
// }
// for(let key in user){
//     console.log(user[key]);
    
// }

//çoklu kullanıcı
let users=[
    {
        "id": "1",
             "ad": "emin",
             "soyad": "başbayan",
            "email": "basbyanemin@gmail.com",
             "yas": "25"
         },

         {
            "id": "2",
            "ad": "nur",
            "soyad": "başbayan",
           "email": "basbyanemin@gmail.com",
            "yas": "25"
        },

        {
            "id": "3",
            "ad": "bedirhan",
            "soyad": "başbayan",
           "email": "basbyanemin@gmail.com",
            "yas": "25"
        },


]
for(let i=0; i<users.length; i++){
    console.log(users[i].ad);
    
}








