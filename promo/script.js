
const promoCodes = {
    "SLASH": 3000,
    "DENIS": 1000,
    "FUN": 1000,
    "MIFIX": 2000,
    "COFFEE": 5000,
    "S67667878": 900000000,
    "GOODBYE": 2000000,
    "D34234234": 20021300,
    "UDJNU843C": 1000000
  };

  function applyPromoCode() {
    const input = document.getElementById("promoInput");
    const promoCode = input.value.toUpperCase(); 
  
    const activatedCodes = JSON.parse(localStorage.getItem("activatedCodes")) || {};
  
    if (activatedCodes.hasOwnProperty(promoCode)) {
      alert("This promo code has already been used.");
    } else if (promoCodes.hasOwnProperty(promoCode)) {
      const coins = parseInt(localStorage.getItem("cookies")) || 0; 
      const additionalCoins = promoCodes[promoCode];
      const newBalance = coins + additionalCoins;
  
      localStorage.setItem("cookies", newBalance); 
      document.getElementById("balance").textContent = newBalance; 
  
      activatedCodes[promoCode] = true;
      localStorage.setItem("activatedCodes", JSON.stringify(activatedCodes)); 
  
      input.value = ""; 
    } else {
    }
  }  
