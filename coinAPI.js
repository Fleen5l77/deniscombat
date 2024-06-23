
function updateGameCoinImage() {
  document.getElementById('cookie').src = localStorage.getItem('selectedCoin') || 'default';
  document.getElementById('minicookie').src = localStorage.getItem('selectedCoin') || 'default';
}

var balance = localStorage.getItem('cookies') || 0; 

//адаптивная монета
function adaptiveCoin(balance) {
  var newimg;
        
        if (balance >= 1000000000) {
            newimg = 'coin10.png'; //  60 000 000 +
        } else if (balance >= 60000000) {
            newimg = 'coin9.png'; //  40 00 000 +
        } else if (balance >= 40000000) {
            newimg = 'coin8.png'; //  25 00 000 +
        } else if (balance >= 25000000) {
            newimg = 'coin7.png'; //  10 00 000 +
        } else if (balance >= 1000000) {
            newimg = 'coin6.png'; //  1 000 000 +
        } else if (balance >= 500000) {
            newimg = 'coin5.png'; //  500 000 +
        } else if (balance >= 100000) {
            newimg = 'coin4.png'; //  100 000 +
        } else if (balance >= 50000) {
            newimg = 'coin3.png'; //  50 000 +
        } else if (balance >= 10000) {
            newimg = 'coin2.png'; //  10 000 +
        } else if (balance >= 5000) {
            newimg = 'coin1.png'; //  5 000 +
        } else {
            newimg = 'coin.png'; // 0 +
        }
        
        document.getElementById('cookie').src = newimg;
        document.getElementById('minicookie').src = newimg;
}

function buyCoin(coinName) {
  const coins = {
    'qshop1.png': 5000,
    'qshop2.png': 15000,
    'qshop3.png': 25000,
    'qshop4.png': 30000,
    'qshop5.png': 40000,
    'qshop6.png': 100000,
    'qshop7.png': 100000000,
    'qshop8.png': 200000,
    'qshop9.png': 50000,
  };

  let balance = parseInt(localStorage.getItem('cookies')) || 0;
  let selectedCoin = localStorage.getItem('selectedCoin') || 'default';

  if (localStorage.getItem(coinName) === 'purchased') {
    // Монета уже куплена
    selectedCoin = coinName;
    localStorage.setItem('selectedCoin', selectedCoin);
    updateGameCoinImage();
    return;
  }

  const coinPrice = coins[coinName];

  if (balance >= coinPrice) {
    // Отнимаем стоимость монеты из баланса
    balance -= coinPrice;
    
    // Сохраняем обновленный баланс
    localStorage.setItem('cookies', balance); 

    // Помечаем монету как купленную
    localStorage.setItem(coinName, 'purchased'); 
    
    // Выбираем купленную монету
    selectedCoin = coinName;
    localStorage.setItem('selectedCoin', selectedCoin);

    // Обновляем изображение монеты в игре
    updateGameCoinImage(); 
  } else {

  }
}


var selectedCoin = localStorage.getItem('selectedCoin') || 'default';


function onloadcoin() {
if (selectedCoin === 'default') {
  var balance12 = localStorage.getItem('cookies') || 0; 
  adaptiveCoin(balance12);
} else {
  updateGameCoinImage();
}
}

onloadcoin()
setInterval(onloadcoin, 1000);