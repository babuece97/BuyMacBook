
// for MEMORY
document.getElementById('memory-8gb').addEventListener('click',
function(){
    //adding 8gb memory
    const memory8 =0;
    console.log(memory8);
    const memoryPrice = document.getElementById('memory');
    memoryPrice.innerText=memory8;
})
document.getElementById('memory-16gb').addEventListener('click',
function(){
    //adding 16gb memory
    const memory16 =180;
    console.log(memory16);
    const memoryPrice = document.getElementById('memory');
    memoryPrice.innerText=memory16;
})
// FOR STORAGE
        //adding 256 SSD
document.getElementById('storage-256gb').addEventListener('click',
function(){
    const ssd256= 0;
    console.log(ssd256);
    const ssdPrice = document.getElementById('storage');
    ssdPrice.innerText= ssd256;
}) 
        //adding 512 SSD
document.getElementById('storage-512gb').addEventListener('click',
function(){
    const ssd512= 100;
    console.log(ssd512);
    const ssdPrice = document.getElementById('storage');
    ssdPrice.innerText= ssd512;
})
        //adding 1TB SSD
document.getElementById('storage-1tb').addEventListener('click',
function(){
    const ssdTB= 180;
    console.log(ssdTB);
    const ssdPrice = document.getElementById('storage');
    ssdPrice.innerText= ssdTB;
})
// DELIVERY
                // free delivery
document.getElementById('delivery-free').addEventListener('click',
function(){
    const freeDelivery= 0;
    console.log(freeDelivery);
    const deliveryPrice = document.getElementById('delivery');
    deliveryPrice.innerText= freeDelivery;
})
        // Urgent Delivery
document.getElementById('delivery-urgent').addEventListener('click',
function(){
    const urgentDelivery= 20;
    console.log(urgentDelivery);
    const deliveryPrice = document.getElementById('delivery');
    deliveryPrice.innerText= urgentDelivery;
})
            /* for Promo
document.getElementById('promo').addEventListener('click',
function(){
    const promoField= document.getElementById('promocode');
    const promoCode = promoField.value;
    
    if (promoCode == 'stevekaku')
    {console.log('u will get 20 off');
}
})*/
// TOTAL Price
function calculateTotal(){
    const basicPrice= document.getElementById('basic').value;
    const extraMemoryCost= document.getElementById('memory').value;
    const extraStorageCost= document.getElementById('storage').value;
    const urgentDeliveryCost= document.getElementById('delivery').value;
    const totalPrice = parseFloat(basicPrice) + parseFloat(extraMemoryCost) +parseFloat( extraStorageCost) +parseFloat( urgentDeliveryCost);
    document.getElementById('total-price').innerText = totalPrice;
}
