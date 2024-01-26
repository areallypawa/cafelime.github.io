const toastTrigger = document.getElementById('liveToastBtn')
const toastLiveExample = document.getElementById('liveToast')

if (toastTrigger) {
    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
    toastTrigger.addEventListener('click', () => {
        toastBootstrap.show()
    })
}

const toastTrigger2 = document.getElementById('liveToastBtn2')

if (toastTrigger2) {
    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
    toastTrigger2.addEventListener('click', () => {
        toastBootstrap.show()
    })
}

const toastTrigger3 = document.getElementById('liveToastBtn3')

if (toastTrigger3) {
    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
    toastTrigger3.addEventListener('click', () => {
        toastBootstrap.show()
    })
}
const toastTrigger4 = document.getElementById('liveToastBtn4')

if (toastTrigger4) {
    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
    toastTrigger4.addEventListener('click', () => {
        toastBootstrap.show()
    })
}
const toastTrigger5 = document.getElementById('liveToastBtn5')

if (toastTrigger5) {
    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
    toastTrigger5.addEventListener('click', () => {
        toastBootstrap.show()
    })
}
const toastTrigger6 = document.getElementById('liveToastBtn6')

if (toastTrigger6) {
    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
    toastTrigger6.addEventListener('click', () => {
        toastBootstrap.show()
    })
}
const toastTrigger7 = document.getElementById('liveToastBtn7')

if (toastTrigger7) {
    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
    toastTrigger7.addEventListener('click', () => {
        toastBootstrap.show()
    })
}
const toastTrigger8 = document.getElementById('liveToastBtn8')

if (toastTrigger8) {
    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
    toastTrigger8.addEventListener('click', () => {
        toastBootstrap.show()
    })
}






var dictionary = {
    button1: 0,
    button2: 0,
    button3: 0,
    button4: 0,
    button5: 0,
    button6: 0,
    button7: 0,
    button8: 0
};

const button1 = document.getElementsByClassName('liveToastBtn1')[0];
const button2 = document.getElementsByClassName('liveToastBtn2')[0];
const button3 = document.getElementsByClassName('liveToastBtn3')[0];
const button4 = document.getElementsByClassName('liveToastBtn4')[0];
const button5 = document.getElementsByClassName('liveToastBtn5')[0];
const button6 = document.getElementsByClassName('liveToastBtn6')[0];
const button7 = document.getElementsByClassName('liveToastBtn7')[0];
const button8 = document.getElementsByClassName('liveToastBtn8')[0];

const header = document.getElementById('header');

if (button1) {
    button1.addEventListener('click', function () {
        header.textContent = 'Пицца "Сплошной сыр" добавлена в корзину.'; // Изменяем текст заголовка
        dictionary.button1++;
    });
}

if (button2) {
    button2.addEventListener('click', function () {
        header.textContent = 'Пицца "Карбонара" добавлена в корзину.';
        dictionary.button2++;
    });
}

if (button3) {
    button3.addEventListener('click', function () {
        header.textContent = 'Пирог "Ветчина и сыр" добавлен в корзину.';
        dictionary.button3++;
    });

}

if (button4) {
    button4.addEventListener('click', function () {
        header.textContent = 'Пирог "Чоризо барбекю" добавлен в корзину.';
        dictionary.button4++;
    });
}

if (button5) {
    button5.addEventListener('click', function () {
        header.textContent = 'Комбо от Смешариков добавлено в корзину.';
        dictionary.button5++;
    });
}

if (button6) {
    button6.addEventListener('click', function () {
        header.textContent = 'Комбо "Всего по немногу" добавлено в корзину.';
        dictionary.button6++;
    });
}

if (button7) {

    button7.addEventListener('click', function () {
        header.textContent = 'Какао добавлено в корзину.';
        dictionary.button7++;
    });
}

if (button8) {
    button8.addEventListener('click', function () {
        header.textContent = 'Таежный чай добавлен в корзину.';
        dictionary.button8++;
        console.log(dictionary)
    });
}























