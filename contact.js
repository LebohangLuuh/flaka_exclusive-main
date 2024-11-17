function validateForm() {
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const guestCount = document.getElementById('guestCount').value;
    const orderDescription = document.getElementById('orderDescription').value;
  
    if (fullName === '' || email === '' || guestCount === '' || orderDescription === '') {
      alert('Please fill in all fields.');
      return false;
    }
  
    if (!validateEmail(email)) {
      alert('Please enter a valid email address.');
      return false;
    }
  
    return true;
  }
  
  function validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  }
  
  // gallery

  lightbox.option({
    resizeDuration: 200,
    wrapAround: true,
    disableScrolling: true,
  });
  