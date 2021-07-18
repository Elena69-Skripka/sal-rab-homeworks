function calcShipping(sum, min, shipping) {
    let productSum = sum; // сумма в корзине
    let freeShippingMinSum = min; // минимальная цена для бесплатной доставки
    let shippingPrice = shipping; // стоимость доставки
if (productSum==0 || productSum>=freeShippingMinSum){
    shippingSum=0; console.log(shippingSum);
}
else if (productSum>0 && productSum<freeShippingMinSum){shippingSum=shippingPrice; console.log(
    shippingSum);}

    // Задание №2.1. Рассчитать доставку

    // создайте переменную shippingSum

    // если productsSum равно 0,
    // то shippingSum присвоить значение 0

    // если productsSum Больше или равна freeShippingMinSum,
    // то shippingSum присвоить значение 0

    // если productsSum больше 0 и меньше freeShippingMinSum,
    // то shippingSum присвоить значение shippingPrice

    // Конец решения задания №2.1.

    return shippingSum;
}

function calcDiscount(sum, min, discount) {
    let productsSum = sum; // сумма в корзине
    let discountMinSum = min; // минимальная цена для скидки
    let discountPart = discount; // величина скидки в процентах
    let discountPrice;
    if(productsSum>=discountMinSum){
        discountPrice=discountPart*productsSum/100;
    }
    else {discountPrice=0;}

    // Задание №2.2. Рассчитать скидку

    // создайте переменную discountPrice

    // если productsSum больше или равно discountMinSum,
    // то присвойте discountSum значение discountPart процентов от productsSum,
    // иначе присвойте discountSum значение 0

    // Конец решения задания №2.2.

    return discountPrice;
}

function calcInvoice({sum, discountMinSum, discountPart, shippingFreeMinSum, shippingPrice}) {
    let productsSum = sum;
    let discountSum = calcDiscount(sum, discountMinSum, discountPart);

    // Задача №2.3. Рассчитать скидки и доставку в корзине

    // создайте переменную totalSum
    let totalSum;
    let freeShipping;
    let shippingSum;
    totalSum=productsSum;
    totalSum=totalSum-discountSum;

    // присвойте totalSum значение productsSum
    // уменьшите totalSum на discountSum

    shippingSum = calcShipping(totalSum, shippingFreeMinSum, shippingPrice); // не изменяйте эту строку!!!
    totalSum=totalSum+shippingSum;
    
   console.log(shippingSum==0 && freeShipping==true);
   

    // прибавьте к totalSum значение shippingSum

    // создайте переменную freeShipping
    // запишите без использования if или любых других условий:
    // если shippingSum равно нулю, то freeShipping должна быть равна true, иначе freeShipping должна быть равна false

    // Конец решения задачи №2.3.

    return {discount: discountSum, freeShipping, shipping: shippingSum, total: totalSum};
}
