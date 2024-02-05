const toastTrigger = document.getElementById('liveToastBtn')
const toastLiveExample = document.getElementById('liveToast')
var header = document.getElementById("header23")
if (toastTrigger) {
    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
    toastTrigger.addEventListener('click', () => {
        header.innerText = header.textContent = "Пицца 'Сплошной сыр' добавлена в корзину!";
        toastBootstrap.show()
    })
}

const toastTrigger2 = document.getElementById('liveToastBtn2')

if (toastTrigger2) {
    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
    toastTrigger2.addEventListener('click', () => {
        header.innerText = header.textContent = "Пицца 'Карбонара' добавлена в корзину!";
        toastBootstrap.show()
    })
}

const toastTrigger3 = document.getElementById('liveToastBtn3')

if (toastTrigger3) {
    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
    toastTrigger3.addEventListener('click', () => {
        header.innerText = header.textContent = "Пирог 'Ветчина и сыр'добавлен в корзину!";
        toastBootstrap.show()
    })
}
const toastTrigger4 = document.getElementById('liveToastBtn4')

if (toastTrigger4) {
    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
    toastTrigger4.addEventListener('click', () => {
        header.innerText = header.textContent = "Пирог 'Чоризо барбекю' добавлен в корзину!";
        toastBootstrap.show()
    })
}
const toastTrigger5 = document.getElementById('liveToastBtn5')

if (toastTrigger5) {
    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
    toastTrigger5.addEventListener('click', () => {
        header.innerText = header.textContent = "Комбо от Смешариков добавлено в корзину!";
        toastBootstrap.show()
    })
}
const toastTrigger6 = document.getElementById('liveToastBtn6')

if (toastTrigger6) {
    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
    toastTrigger6.addEventListener('click', () => {
        header.innerText = header.textContent = "Комбо 'Всего по немногу' добавлено в корзину!";
        toastBootstrap.show()
    })
}
const toastTrigger7 = document.getElementById('liveToastBtn7')

if (toastTrigger7) {
    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
    toastTrigger7.addEventListener('click', () => {
        header.innerText = header.textContent = "Какао добавлено в корзину!";
        toastBootstrap.show()
    })
}
const toastTrigger8 = document.getElementById('liveToastBtn8')

if (toastTrigger8) {
    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
    toastTrigger8.addEventListener('click', () => {
        header.innerText = header.textContent = "Таежный чай, 10 сашетов добавлен в корзину!";
        toastBootstrap.show()
    })
}




const cards = document.querySelectorAll(".product__info")


cards.forEach((el, idx) => {
    console.dir(el)
    const btn = el.childNodes[7]
    const title = el.childNodes[1].innerText
    const price = el.childNodes[3].innerText

    btn.addEventListener("click", () => {
        const cartStorage = localStorage.getItem("cart") || "[]"
        const cart = JSON.parse(cartStorage)
        const card = { title, price }
        localStorage.setItem("cart", JSON.stringify([...cart, card]))
    })

})

// console.log(cards)

















