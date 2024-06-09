// Получаем текущий баланс из localStorage
let currentBalance = parseInt(localStorage.getItem('cookies')) || 0;
let currentBackground = localStorage.getItem('background') || 'default.png';

// Объект с информацией о фонах и их стоимости
const backgrounds = {
  "bg.png": 1000,
  "bg2.png": 200,
  "bg3.png": 300
};

// Функция для смены фона
function changeBackground(backgroundUrl) {
  document.body.style.backgroundImage = url('${backgroundUrl}');
  localStorage.setItem('background', backgroundUrl);
}

// Функция для покупки фона
function buyBackground(backgroundUrl) {
  if (currentBalance >= backgrounds[backgroundUrl]) {
    currentBalance -= backgrounds[backgroundUrl];
    localStorage.setItem('cookies', currentBalance);
    changeBackground(backgroundUrl);
  } else {
    alert("Недостаточно средств для покупки фона");
  }
}

// Загрузка текущего фона при загрузке страницы
window.onload = function() {
  changeBackground(currentBackground);
};

// Пример вызова функции для покупки фона
