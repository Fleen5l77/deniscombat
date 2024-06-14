// Промо-коды и количество монет, которые они дают
const promoCodes = {
    "SLASH": 1500,
    "DENIS": 1000,
    "FUN": 1000
    // Добавьте здесь другие промо-коды и их значения
  };
  
  // Функция применения промо-кода
  function applyPromoCode() {
    const input = document.getElementById("promoInput");
    const promoCode = input.value.toUpperCase(); // Приводим введенный код к верхнему регистру
  
    const activatedCodes = JSON.parse(localStorage.getItem("activatedCodes")) || {};
  
    if (activatedCodes.hasOwnProperty(promoCode)) {
      alert("This promo code has already been used.");
    } else if (promoCodes.hasOwnProperty(promoCode)) {
      const coins = parseInt(localStorage.getItem("cookies")) || 0; // Получаем текущее количество монет из local storage
      const additionalCoins = promoCodes[promoCode];
      const newBalance = coins + additionalCoins;
  
      localStorage.setItem("cookies", newBalance); // Сохраняем новое количество монет в local storage
      document.getElementById("balance").textContent = newBalance; // Обновляем отображение баланса
  
      activatedCodes[promoCode] = true;
      localStorage.setItem("activatedCodes", JSON.stringify(activatedCodes)); // Сохраняем информацию о активированном промо-коде
  
      input.value = ""; // Очищаем поле ввода
    } else {
    }
  }  