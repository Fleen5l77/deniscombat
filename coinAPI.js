
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
    'shop1.png': 5000,
    'shop2.png': 15000,
    'shop3.png': 25000,
    'shop4.png': 30000,
    'shop5.png': 40000,
    'shop6.png': 100000,
  };

  let balance = parseInt(localStorage.getItem('cookies')) || 0;
  let selectedCoin = localStorage.getItem('selectedCoin') || 'default';

  if (localStorage.getItem(coinName) === 'purchased') {
    selectedCoin = coinName;
    localStorage.setItem('selectedCoin', selectedCoin);
    updateGameCoinImage();
    return;
  }

  const coinPrice = coins[coinName];

  if (balance >= coinPrice) {
    balance -= coinPrice;
    localStorage.setItem('cookies', balance);
    localStorage.setItem(coinName, 'purchased');
    selectedCoin = coinName;
    localStorage.setItem('selectedCoin', selectedCoin);
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


setInterval(onloadcoin, 1000);