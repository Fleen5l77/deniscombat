let lastLogin = localStorage.getItem('lastLogin') || Date.now();

let minerLevel = parseInt(localStorage.getItem('minerLevel')) || 1;

function getUpgradeCost(level) {
  return Math.floor(10000 * Math.pow(1.2, level - 1)); 
}

function getMiningRate(level) {
  return Math.pow(1.3, level - 1); 
}

function mineMoney(secondsOffline) {
  // Переводим секунды в минуты
  let minutesOffline = Math.floor(secondsOffline / 60); 
  
  // Считаем заработок за минуты
  let earnedMoney = Math.floor(getMiningRate(minerLevel) * minutesOffline); 

  let currentMoney = parseInt(localStorage.getItem('cookies')) || 0;
  localStorage.setItem('cookies', currentMoney + earnedMoney);

  // Выводим сообщение с минутами
  document.getElementById("uptxt").innerHTML = `Заработано ${earnedMoney} Dencoin за ${minutesOffline} минут(-ы)`;
  console.log(`Заработано ${earnedMoney} Dencoin за ${minutesOffline} минут`); 
}


function buyUpgrade() {
  // Получаем текущее количество денег игрока
  let currentMoney = parseInt(localStorage.getItem('cookies')) || 0;

  let upgradeCost = getUpgradeCost(minerLevel + 1); 

  if (currentMoney >= upgradeCost) {
    // Списываем деньги
    localStorage.setItem('cookies', currentMoney - upgradeCost);

    // Увеличиваем уровень майнера
    minerLevel++;
    localStorage.setItem('minerLevel', minerLevel);

    // Выводим сообщение об успешной покупке (можно заменить на свою логику)
    console.log('Майнер улучшен до уровня', minerLevel); 
    document.getElementById("upbtn").innerHTML = `${getUpgradeCost(minerLevel + 1)} Dencoin`;
    document.getElementById("balance").innerHTML = `Доход в минуту: ${getMiningRate(minerLevel)} Dencoin`;
  } else {
    // Выводим сообщение о нехватке денег (можно заменить на свою логику)
    console.log('Недостаточно средств для улучшения!'); 
  }
}

// Функция, которая вызывается при загрузке страницы
  function onGameLoad() {
    let currentTime = Date.now();
    let secondsOffline = Math.floor((currentTime - lastLogin) / 1000);
  
    //  Убираем условие, чтобы обновлять lastLogin в любом случае
    //if (secondsOffline >= 60) { 
      mineMoney(secondsOffline); 
    //} 
  
    // Обновляем lastLogin после начисления
    localStorage.setItem('lastLogin', currentTime);
  
  document.getElementById("upbtn").innerHTML = `${getUpgradeCost(minerLevel + 1)} Dencoin`;
  document.getElementById("balance").innerHTML = `Доход в минуту: ${getMiningRate(minerLevel)} Dencoin`;
  console.log(`Текущая доходность: ${getMiningRate(minerLevel)} монет в секунду`);
  console.log(`Стоимость улучшения: ${getUpgradeCost(minerLevel + 1)} монет`);

}

// Вызываем функцию при загрузке страницы
window.onload = onGameLoad; 

