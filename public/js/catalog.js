
document.addEventListener('DOMContentLoaded', function (){
    const items = document.querySelectorAll('.shop-item');
    for (let i = 1; i <= items.length; i++) {
        let shopItem = `shop-item-` + i;
        items[i-1].classList.add(shopItem);
    }
});