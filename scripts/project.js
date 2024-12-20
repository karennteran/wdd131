function toggleMenu() {
    const navLinks = document.getElementById('nav-links');
    navLinks.style.display = navLinks.style.display === 'block' ? 'none' : 'block';
  }
  
  function calculateGoal() {
    const goal = parseFloat(document.getElementById('goal').value);
    const currentSavings = parseFloat(document.getElementById('current-savings').value);
    const monthlyContribution = parseFloat(document.getElementById('monthly-contribution').value);
    
    if (isNaN(goal) || isNaN(currentSavings) || isNaN(monthlyContribution) || goal <= currentSavings) {
      document.getElementById('result').innerText = 'Please enter valid numbers.';
      return;
    }
  
    const months = Math.ceil((goal - currentSavings) / monthlyContribution);
    document.getElementById('result').innerText = `You will reach your goal in ${months} months!`;
  }
  