document.addEventListener("DOMContentLoaded", function() {
    // Получить текущий баланс игрока из Local Storage
    var balance = localStorage.getItem('cookies') || 0; // Если баланс не существует, установить значение по умолчанию 0

    // Функция для смены изображения монеты в зависимости от баланса
    function adaptiveimg(balance) {
        var newimg;
        
        if (balance >= 60000000) {
            newimg = 'coin10.png'; // Путь к изображению для баланса 60 000 000 и выше
        } else if (balance >= 60000000) {
            newimg = 'coin9.png'; // Путь к изображению для баланса 40 00 000 и выше
        } else if (balance >= 40000000) {
            newimg = 'coin8.png'; // Путь к изображению для баланса 25 00 000 и выше
        } else if (balance >= 25000000) {
            newimg = 'coin7.png'; // Путь к изображению для баланса 10 00 000 и выше
        } else if (balance >= 1000000) {
            newimg = 'coin6.png'; // Путь к изображению для баланса 1 000 000 и выше
        } else if (balance >= 500000) {
            newimg = 'coin5.png'; // Путь к изображению для баланса 500 000 и выше
        } else if (balance >= 100000) {
            newimg = 'coin4.png'; // Путь к изображению для баланса 100 000 и выше
        } else if (balance >= 50000) {
            newimg = 'coin3.png'; // Путь к изображению для баланса 50 000 и выше
        } else if (balance >= 10000) {
            newimg = 'coin2.png'; // Путь к изображению для баланса 10 000 и выше
        } else if (balance >= 5000) {
            newimg = 'coin1.png'; // Путь к изображению для баланса 5 000 и выше
        } else {
            newimg = 'coin.png'; // Путь к изображению по умолчанию
        }
        
        // Установить новое изображение монеты
        document.getElementById('cookie').src = newimg;
    }

    // Вызвать функцию для смены изображения монеты на основе текущего баланса игрока
    adaptiveimg(balance);

    function getPlayerBalanceAndAdaptImage() {
        // Здесь ваш код для получения баланса игрока
        var balance = localStorage.getItem('cookies') || 0; // Пример баланса игрока - замените на реальный код получения баланса
    
        // Вызов функции adaptiveimg с новым балансом
        adaptiveimg(balance);
    }
    
    // Вызов функции getPlayerBalanceAndAdaptImage каждую секунду (1000 миллисекунд)
    setInterval(getPlayerBalanceAndAdaptImage, 1000);
    
});


