const cartSide = document.querySelector(".cart")

const cartStorage = JSON.parse(localStorage.getItem("cart") || "[]")

if (cartStorage.length) {
    cartStorage.forEach(el => {
        const {title, price} = el
        let newCard = document.createElement('div')
        newCard.innerHTML = `<div class="title"><h1>${title}</h1></div><div class="price"><span>${price}</span> ₽</div><div class="description"><ul><li>30 см, традиционное тесто, 470 г</li><li>Моцарелла, сыры чеддер и пармезан, фирменный соус альфредо</li><li>Традиционное тесто</li></ul></div><button class="buy--btn liveToastBtn1" id="liveToastBtn">Удалить</button>`
        cartSide.appendChild(newCard)
    });
}

