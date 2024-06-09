let cookies = parseInt(localStorage.getItem('cookies')) || 0;
let cookiesPerClick = parseInt(localStorage.getItem('cookiesPerClick')) || 1;
let autoClickerCount = parseInt(localStorage.getItem('autoClickerCount')) || 0;
let autoClickerSpeed = parseInt(localStorage.getItem('autoClickerSpeed')) || 1000;
let autoClickerLevel = parseInt(localStorage.getItem('autoClickerLevel')) || 0;
let autoClickerSpeedLevel = parseInt(localStorage.getItem('autoClickerSpeedLevel')) || 0;
let clickLevel = parseInt(localStorage.getItem('clickLevel')) || 0;
let upgradeClickCost = parseInt(localStorage.getItem('upgradeClickCost')) || 10;
let autoClickerCost = parseInt(localStorage.getItem('autoClickerCost')) || 100;
let upgradeAutoClickerCost = parseInt(localStorage.getItem('upgradeAutoClickerCost')) || 20;
let record = parseInt(localStorage.getItem('record')) || 0;
let achievements = JSON.parse(localStorage.getItem('achievements')) || [];
const achievementThresholds = [
    { threshold: 100, name: 'Чипсы lays' },
    { threshold: 10000, name: 'Мастер жира' },
    { threshold: 1000000, name: 'Бог чипсов' },
    { threshold: 100000000, name: 'Сигма Денис' },
    // Add more achievements as needed
];

const cookieButton = document.getElementById('cookie');
const scoreElement = document.getElementById('score');
const upgradeClickButton = document.getElementById('upgrade-click');
const autoClickerButton = document.getElementById('auto-clicker');
const upgradeAutoClickerButton = document.getElementById('upgrade-auto-clicker');
const autoClickerUpgradeItem = document.getElementById('auto-clicker-upgrade-item');
const clickLevelElement = document.getElementById('click-level');
const autoClickerLevelElement = document.getElementById('auto-clicker-level');
const autoClickerSpeedLevelElement = document.getElementById('auto-clicker-speed-level');
const achievementListElement = document.getElementById('achievement-list');
const achievementPopup = document.getElementById('achievement-popup');

cookieButton.addEventListener('click', () => {
    cookies += cookiesPerClick;
    checkAchievements();
    updateScore();
});

upgradeClickButton.addEventListener('click', () => {
    if (cookies >= upgradeClickCost) {
        cookies -= upgradeClickCost;
        cookiesPerClick += 1;
        clickLevel += 1;
        upgradeClickCost = Math.ceil(upgradeClickCost * 1.45);
        updateScore();
    }
});

autoClickerButton.addEventListener('click', () => {
    if (cookies >= autoClickerCost) {
        cookies -= autoClickerCost;
        autoClickerCount += 1;
        autoClickerLevel += 1;
        autoClickerCost = Math.ceil(autoClickerCost * 1.45);
        autoClickerUpgradeItem.style.display = 'block';
        updateScore();
    }
});

upgradeAutoClickerButton.addEventListener('click', () => {
    if (cookies >= upgradeAutoClickerCost) {
        cookies -= upgradeAutoClickerCost;
        autoClickerSpeed *= 0.9;
        autoClickerSpeedLevel += 1;
        upgradeAutoClickerCost = Math.ceil(upgradeAutoClickerCost * 1.45);
        updateAutoClicker();
        updateScore();
    }
});

function updateAutoClicker() {
    clearInterval(autoClickerInterval);
    autoClickerInterval = setInterval(() => {
        cookies += autoClickerCount;
        checkAchievements();
        updateScore();
    }, autoClickerSpeed);
}

function updateScore() {
    scoreElement.textContent = `${cookies} Dencoin`;
    clickLevelElement.textContent = clickLevel;
    autoClickerLevelElement.textContent = autoClickerLevel;
    autoClickerSpeedLevelElement.textContent = autoClickerSpeedLevel;
    upgradeClickButton.textContent = `${upgradeClickCost} Dencoin`;
    autoClickerButton.textContent = `${autoClickerCost} Dencoin`;
    upgradeAutoClickerButton.textContent = `${upgradeAutoClickerCost} Dencoin`;

    localStorage.setItem('cookies', cookies);
    localStorage.setItem('cookiesPerClick', cookiesPerClick);
    localStorage.setItem('autoClickerCount', autoClickerCount);
    localStorage.setItem('autoClickerSpeed', autoClickerSpeed);
    localStorage.setItem('autoClickerLevel', autoClickerLevel);
    localStorage.setItem('autoClickerSpeedLevel', autoClickerSpeedLevel);
    localStorage.setItem('clickLevel', clickLevel);
    localStorage.setItem('upgradeClickCost', upgradeClickCost);
    localStorage.setItem('autoClickerCost', autoClickerCost);
    localStorage.setItem('upgradeAutoClickerCost', upgradeAutoClickerCost);

    if (cookies > record) {
        record = cookies;
        localStorage.setItem('record', record);
    }
}

function checkAchievements() {
    achievementThresholds.forEach(achievement => {
        if (cookies >= achievement.threshold && !achievements.some(a => a.name === achievement.name)) {
            const achievementTime = cookies;
            const newAchievement = { name: achievement.name, threshold: achievementTime };
            achievements.push(newAchievement);
            localStorage.setItem('achievements', JSON.stringify(achievements));
            displayAchievements();
            showAchievementPopup(achievement.name);
        }
    });
}

function displayAchievements() {
    achievementListElement.innerHTML = '';
    achievements.forEach(achievement => {
        const achievementElement = document.createElement('div');
        achievementElement.className = 'achievement';
        achievementElement.textContent = `${achievement.name} - ${achievement.threshold} Dencoin`;
        achievementListElement.appendChild(achievementElement);
    });
}

function showAchievementPopup(name) {
    achievementPopup.textContent = `Достижение: ${name}`;
    achievementPopup.style.display = 'block';
    setTimeout(() => {
        achievementPopup.style.display = 'none';
    }, 5000);
}

let autoClickerInterval = setInterval(() => {
    cookies += autoClickerCount;
    checkAchievements();
    updateScore();
}, autoClickerSpeed);

const gameImage = document.getElementById('cookie');

gameImage.addEventListener('touchstart', function() {
  gameImage.classList.add('tapped');
});

gameImage.addEventListener('touchend', function() {
  gameImage.classList.remove('tapped');
});

function redirectToPage1() {
    window.location.href = 'index.html';
  }
  
  function redirectToPage2() {
    window.location.href = 'upgrade.html';
  }
  
  function redirectToPage3() {
    window.location.href = 'about.html';
  }

updateScore();
displayAchievements();