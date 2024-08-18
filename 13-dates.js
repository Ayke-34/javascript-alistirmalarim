let tarih = new Date();
let result;

//Get Methods
result = tarih.getDate(); //ayın kaçı
result = tarih.getDay(); //haftanın günü 0=pazar 6=cumartesi
result = tarih.getFullYear(); //yıl
result = tarih.getHours(); // saat
result = tarih.getMinutes(); //dakika
result = tarih.getTime(); //milisaniye

//tarihi güncelleme metotları/ Set Methods
tarih.setFullYear(2025);
tarih.setMonth(3);
tarih.setDate(15);
result = tarih;

//doğum tarihi
let DogumTarihi = new Date (1996, 8, 14);
result = tarih.getFullYear() - DogumTarihi.getFullYear();


console.log(result);


