$(document).ready(function() {
    let balance = parseInt(localStorage.getItem('cookie')) || 0;
  
    const bgPrices = {
        bg1: 10,
        bg2: 20
    };
  
    const coinPrices = {
        coin1: 5,
        coin2: 10
    };
  
    buyCoin(coin)

    function buyBackground(bg) {
        if (balance >= bgPrices[bg]) {
            balance -= bgPrices[bg];
            localStorage.setItem('cookie', balance);
            console.log(`Вы купили фон ${bg}.`);
        } else {
            console.log('Недостаточно средств для покупки фона.');
        }
    }
  
    function buyCoin(coin) {
        if (balance >= coinPrices[coin]) {
            balance -= coinPrices[coin];
            localStorage.setItem('cookie', balance);
            localStorage.setItem('customCoin', coin);
            applyCustomCoin();
            console.log(`Вы купили монету ${coin}.`);
        } else {
            console.log('Недостаточно средств для покупки монеты.');
        }
    }
  
    function applyCustomCoin() {
        let customCoin = localStorage.getItem('customCoin');
        if (customCoin) {
            // Здесь должен быть код для применения кастомной монеты
            document.body.style.backgroundImage = "url(" + selectedBackground + ")";
            console.log(`Применена кастомная монета ${customCoin}.`);
        }
    }
  
    applyCustomCoin(); // Применяем кастомную монету после загрузки страницы
  
  });