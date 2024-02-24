let cart = JSON.parse(localStorage.getItem("cart")); //все товары в корзине

const cartSide = document.querySelector(".cart")
const cartSideprice = document.querySelector(".cart2")
const cartStorage = JSON.parse(localStorage.getItem("cart") || "[]")

//добавляем в таблицу
if (cartStorage.length) {
    cartStorage.forEach(el => {
        const { name, price, quantity, id } = el
        const newCard = document.createElement('tr')
        newCard.className = `newCarto${id}`;
        newCard.innerHTML = `<tr><td><div class="title"><h1>${name}</h1></div></td><td><div class="title"><h1>${price}</h1></div></td><td><div class="title"><h1>${quantity}</h1></div></td><td><button class="btn mbtn${id} btn-danger">Del</button><button class="btn pbtn${id} btn-primary">plus</button></td></tr>`
        cartSide.appendChild(newCard)

    });
}



//Узнаем кол-во 
function Quantity(productId){
    for(let product of cart){
        if(product.id == productId){
            return product.quantity;
        }
    }
}
//Обнова браво страс
function updateQuantity(productId, quantity){
    for(let product of cart){
        if(product.id == productId){
            product.quantity = quantity;
        }
    }
    localStorage.setItem("cart", JSON.stringify(cart));

}

let n1 = Quantity(1);
let n2 = Quantity(2);
let n3 = Quantity(3);
let n4 = Quantity(4);
let n5 = Quantity(5);
let n6 = Quantity(6);
let n7 = Quantity(7);
let n8 = Quantity(8);

//Кнопка -
mtriger = document.getElementsByClassName('mbtn1')[0];
mtriger2 = document.getElementsByClassName('mbtn1')[0];
mtriger3 = document.getElementsByClassName('mbtn1')[0];
mtriger4 = document.getElementsByClassName('mbtn1')[0];
mtriger5 = document.getElementsByClassName('mbtn1')[0];
mtriger6 = document.getElementsByClassName('mbtn1')[0];
mtriger7 = document.getElementsByClassName('mbtn1')[0];
mtriger8 = document.getElementsByClassName('mbtn1')[0];
//Кнопка +
ptriger = document.getElementsByClassName('pbtn1')[0];
ptriger2 = document.getElementsByClassName('pbtn1')[0];
ptriger3 = document.getElementsByClassName('pbtn1')[0];
ptriger4 = document.getElementsByClassName('pbtn1')[0];
ptriger5 = document.getElementsByClassName('pbtn1')[0];
ptriger6 = document.getElementsByClassName('pbtn1')[0];
ptriger7 = document.getElementsByClassName('pbtn1')[0];
ptriger8 = document.getElementsByClassName('pbtn1')[0];

mtriger.addEventListener('click', () => {
    if(n1 > 0){
        n1--;
        updateQuantity(1, n1);
    }else{
        
    }
});
ptriger.addEventListener('click', () => {
    n1++;
    updateQuantity(1, n1);
});























// Конечная сумма
function getTotal(){
    let temp = cart.map(function(item){
        return parseInt(item.price * item.quantity);
    });

    let sum = temp.reduce(function(prev, next){
        return prev + next;
    }, 0);

    console.log(sum);
}
getTotal();

trigger = document.getElementById('liveToastBtn')

function removeItemfromCart(productId){
    let temp = cart.filter(item => item.id != productId);
    localStorage.setItem("cart", JSON.stringify(temp));
}
