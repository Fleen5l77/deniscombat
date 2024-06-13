// Проверить, было ли задание уже выполнено
if (localStorage.getItem('task1_state') === '1') {
    // Задание уже выполнено, выйти из функции
    console.log('Задание уже выполнено!');
} else {
    // Задание еще не выполнено, продолжить выполнение задания
    function task1() {
        // Сохранить информацию о выполненном задании в Local Storage
        localStorage.setItem('task1_state', '1');
        
        // Получить текущий баланс игрока из Local Storage
        var balance = parseInt(localStorage.getItem('cookies')) || 500; // Если баланс не существует, установить значение по умолчанию 500
        
        // Прибавить бонус за выполненное задание к балансу
        var bonus = 2000;
        var newbalance = balance + bonus;
        
        // Сохранить новый баланс игрока в Local Storage
        localStorage.setItem('cookies', newbalance);
        window.location.href = 'https://t.me/DenisCombat';
    }

    // Проверить, существует ли элемент 'task1' перед добавлением обработчика события
    if (document.getElementById('task1')) {
        document.getElementById('task1').addEventListener('click', выполнитьЗадание);
    }
}


// Проверить, было ли задание уже выполнено
if (localStorage.getItem('task2_state') === '1') {
    // Задание уже выполнено, выйти из функции
    console.log('Задание уже выполнено!');
} else {
    // Задание еще не выполнено, продолжить выполнение задания
    function task2() {
        // Сохранить информацию о выполненном задании в Local Storage
        localStorage.setItem('task2_state', '1');
        
        // Получить текущий баланс игрока из Local Storage
        var balance1 = parseInt(localStorage.getItem('cookies')) || 500; // Если баланс не существует, установить значение по умолчанию 500
        
        // Прибавить бонус за выполненное задание к балансу
        var bonus1 = 2000;
        var newbalance1 = balance1 + bonus1;
        
        // Сохранить новый баланс игрока в Local Storage
        localStorage.setItem('cookies', newbalance1);
        window.location.href = 'https://t.me/slash_telegram';
    }

    // Проверить, существует ли элемент 'task1' перед добавлением обработчика события
    if (document.getElementById('task2')) {
        document.getElementById('task2').addEventListener('click', выполнитьЗадание);
    }
}
