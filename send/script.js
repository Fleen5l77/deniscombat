
function generateUserId() {
    return 'Dencoin-' + Math.random().toString(36).substr(2, 9);
}

function encode(data) {
    return btoa(JSON.stringify(data));
}

function decode(data) {
    return JSON.parse(atob(data));
}

function generateUniqueCode(data) {
    const randomSuffix = Math.floor(1000 + Math.random() * 9000); 
    const code = encode(data) + '-' + randomSuffix; 
    return code;
}

function getBalance() {
    return parseInt(localStorage.getItem('cookies')) || 0;
}

function setBalance(amount) {
    localStorage.setItem('cookies', amount);
    document.getElementById('balance').innerText = `Текущий баланс: ${amount} Dencoin`;
}

function getUserId() {
    let userId = localStorage.getItem('userId');
    if (!userId) {
        userId = generateUserId();
        localStorage.setItem('userId', userId);
    }
    return userId;
}

function isCodeUsed(code) {
    const usedCodes = JSON.parse(localStorage.getItem('usedCodes')) || [];
    return usedCodes.includes(code);
}

function markCodeAsUsed(code) {
    const usedCodes = JSON.parse(localStorage.getItem('usedCodes')) || [];
    usedCodes.push(code);
    localStorage.setItem('usedCodes', JSON.stringify(usedCodes));
}

document.addEventListener('DOMContentLoaded', () => {
    setBalance(getBalance());
    const userId = getUserId();
    console.log(`Ваш уникальный ID: ${userId}`); 
});

document.getElementById('sendCoins').addEventListener('click', () => {
    const recipientId = document.getElementById('recipientId').value;
    const amount = parseInt(document.getElementById('amount').value);
    const password = document.getElementById('password').value;

    const currentBalance = getBalance();

    if (amount <= 0 || amount > currentBalance) {
        document.getElementById('message').innerText = 'Недостаточно коинов для отправки!';
        return;
    }

    const code = generateUniqueCode({ recipientId, amount, password, senderId: getUserId() });
    
    // Снижаем баланс
    setBalance(currentBalance - amount);
    
    // Отображаем код отправки
    document.getElementById('codeOutput').innerText = code; 

    document.getElementById('message').innerText = `Код отправки: ${code}`;
});

document.getElementById('receiveCoins').addEventListener('click', () => {
    const code = document.getElementById('code').value;
    const receivePassword = document.getElementById('receivePassword').value;

    const codeWithoutSuffix = code.split('-')[0];

    if (isCodeUsed(codeWithoutSuffix)) {
        document.getElementById('message').innerText = 'Этот код уже был использован!';
        return;
    }

    try {
        const data = decode(codeWithoutSuffix);
        
        if (data.password !== receivePassword) {
            document.getElementById('message').innerText = 'Неверный пароль!';
            return;
        }
        
        const currentUserId = getUserId();
        if (data.recipientId !== currentUserId) {
            document.getElementById('message').innerText = 'Неверный номер пользователя!';
            return;
        }

        setBalance(getBalance() + data.amount);

        markCodeAsUsed(codeWithoutSuffix);
        
        document.getElementById('message').innerText = `Вы получили ${data.amount} Dencoin!`;
        
    } catch (e) {
        document.getElementById('message').innerText = 'Неверный код!';
    }
});

document.getElementById('copyCode').addEventListener('click', () => {
    const code = document.getElementById('codeOutput').innerText;
    
    if (code) {
        navigator.clipboard.writeText(code).then(() => {
            document.getElementById('message').innerText = 'Код успешно скопирован!';
        }).catch(err => {
            document.getElementById('message').innerText = 'Ошибка при копировании кода!';
            console.error('Ошибка копирования:', err);
        });
    } else {
        document.getElementById('message').innerText = 'Сначала сгенерируйте код отправки!';
    }
});


function getUserId() {
    return localStorage.getItem('userId'); // Получаем ID пользователя из localStorage
}

// Устанавливаем ID пользователя при загрузке
document.addEventListener('DOMContentLoaded', () => {
    const userId = getUserId();
    if (userId) {
        document.getElementById('userId').innerText = userId; // Устанавливаем текст элемента
    } else {
        document.getElementById('userId').innerText = 'ID'; // Если ID не найден
    }
});
