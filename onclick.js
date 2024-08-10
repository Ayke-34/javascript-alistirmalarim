function bTnTikla(){
    //alert('butona tıklandı') ;
    var sayi1 = 5;
    var sayi2 = 11;
    var toplam = sayi1 + sayi2 ;
    var aybuke = document.getElementById('toplam').innerHTML;
    document.getElementById('toplam').innerHTML= aybuke + toplam ;
    var ilksayi=document.getElementById('sayi1').innerHTML;
     document.getElementById('sayi1').innerHTML =ilksayi+ sayi1;
     var ikincisayi= document.getElementById('sayi2').innerHTML
     document.getElementById('sayi2').innerHTML= ikincisayi + sayi2
}
