document.getElementById('login-btn').addEventListener('click', function (event) {

    event.preventDefault();
    // get the phone number 
    const phoneNumber = document.getElementById('phoneNumber-input-value').value;
    const password = document.getElementById('pin-input-value').value;

    if (phoneNumber === '01632775052' && password === 'adwebdev01') {
        window.location.href = 'home.html'

    }
    else {
        alert('UserName , Password Wrong')
    }


});