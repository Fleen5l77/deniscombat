// Проверить, было ли задание уже выполнено
if (localStorage.getItem('task1_state') === '1') {
    // Задание уже выполнено, выйти из функции
    var task1btn = document.getElementById("task1btn");
if (task1btn) {
    task1btn.innerHTML = "Задание выполнено!";
} else {
    console.error("Элемент с id 'task1btn' не найден на странице.");
}
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
    var task2btn = document.getElementById("task2btn");
if (task2btn) {
    task2btn.innerHTML = "Задание выполнено!";
} else {
    console.error("Элемент с id 'task1btn' не найден на странице.");
}
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

// Проверить, было ли задание уже выполнено
if (localStorage.getItem('task3_state') === '1') {
    // Задание уже выполнено, выйти из функции
    var task3btn = document.getElementById("task3btn");
if (task3btn) {
    task3btn.innerHTML = "Задание выполнено!";
} else {
    console.error("Элемент с id 'task1btn' не найден на странице.");
}
} else {
    // Задание еще не выполнено, продолжить выполнение задания
    function task3() {
        // Сохранить информацию о выполненном задании в Local Storage
        localStorage.setItem('task3_state', '1');
        
        // Получить текущий баланс игрока из Local Storage
        var balance2 = parseInt(localStorage.getItem('cookies')) || 500; // Если баланс не существует, установить значение по умолчанию 500
        
        // Прибавить бонус за выполненное задание к балансу
        var bonus2 = 5000;
        var newbalance2 = balance2 + bonus2;
        
        // Сохранить новый баланс игрока в Local Storage
        localStorage.setItem('cookies', newbalance2);
        window.location.href = 'https://youtube.com/@DenisCombat';
    }

    // Проверить, существует ли элемент 'task1' перед добавлением обработчика события
    if (document.getElementById('task3')) {
        document.getElementById('task3').addEventListener('click', выполнитьЗадание);
    }
}

