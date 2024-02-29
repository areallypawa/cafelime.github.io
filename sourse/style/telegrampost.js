const TOKEN = '7199612073:AAFxHrYTFe5lL5NySF3wdxrEco_8VcMS_9w';
const CHET_ID = '-1002042893703';
const URL_API = `https://api.telegram.org/bot${ TOKEN }/sendMessage`;
const SUCCESS = document.getElementById("success");

// const cartStorage2 = JSON.parse(localStorage.getItem("cart") || "[]")

// cartStorage.forEach(el => {
//     let message_zakaz = 'Заказ:\n'
//     const { name, quantity } = el
//     CART = `${ name } - ${ quantity } шт`
//     message_zakaz += `${ CART }`
// })





document.getElementById('tg').addEventListener('submit', function(e) {
    e.preventDefault();

    let message = `<b>Новый заказ с сайта!</b>\n`;
    message += `<b>ФИО: </b> ${ this.name.value }\n`;
    message += `<b>Номер телефона: </b> ${ this.number.value }\n`;
    message += `<b>Адрес: </b> ${ this.text.value }\n`;
    message += `<b>Время доставки: </b> ${ this.time.value }\n`;
    // message += `<b>Заказ: </b> ${  a }`;

    axios.post(URL_API, {
        chat_id: CHET_ID,
        parse_mode: 'html',
        text: message

    })
    .then((res) => {
        this.name.value = '';
        this.number.value = '';
        this.text.value = '';
        this.time.value = '';

        SUCCESS.style.display = "block"
    })
    .catch((err) => {
        console.warn(err);
    })
    .finally(() => {
        console.log("End");
    })
})
