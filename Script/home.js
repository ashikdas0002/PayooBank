document.getElementById('logout-btn').addEventListener('click', function () {
    window.location.href = 'login.html'
})


document.getElementById('addMoney').addEventListener('click', function (event) {
    event.preventDefault();
    const addMoneyInput = document.getElementById('add-money-field').value;
    const pinNumberInput = document.getElementById('pin-field').value;
    console.log(addMoneyInput, pinNumberInput);

}); 