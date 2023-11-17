function displayBanner() {
    const today = new Date();
    const dayOfWeek = today.getDay();
  
    if (dayOfWeek >= 1 && dayOfWeek <= 3) {
      document.getElementById('banner').style.display = 'block';
    } else {
      document.getElementById('banner').style.display = 'none'
    }
  }
  
  function closeBanner() {
    document.getElementById('banner').style.display = 'none';
  }
  
  displayBanner();