const username = "aybukeaksoy";
const yas = 21;

let result;

result = 21;
result = Number("21");
result = parseInt("25.7");
result = parseFloat("25.7");
result = parseInt("a27");
result = isNaN("a25");

let myNumber = 10.3456757;
result = myNumber.toPrecision(5);
result = myNumber.toFixed(2);

result = Math.round(2.6); //yuvarlar
result = Math.ceil(3.2); // yukarı yuvarlar
result = Math.floor(8.6); //bir önceki sayıya tamamlar??????
result = Math.pow(5, 3); //karesini alır(5 üssü3)
result = Math.sqrt(100); //karekökü alır
result = Math.abs(-25); //mutlak değer
result = Math.max(10, 1, 5, 7, 9, 20); //max değeri verir
result = Math.min(10, 1, 5, 7, 9, 20);

console.log(result);
