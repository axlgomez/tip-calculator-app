// For using forEach(), convert btns DOM nodes to an array first using Array.from()

const buttons = Array.from(document.querySelectorAll('.calculator__percent[type=button]'));

const resetButton = document.querySelector("#reset");
const billInput = document.querySelector('.calculator__input--bill');
const peopleInput = document.querySelector('.calculator__input--people');
const inputPercent = document.querySelector('.calculator__percent--custom');

function selectedTip(){
    buttons.forEach(btn => btn.classList.remove('active'));
    tip.value = "";
    this.classList.add("active");
    resetButton.classList.add('reset-active');
}

tip.addEventListener('input', ()=>{
    buttons.forEach(btn => btn.classList.remove('active'));
    resetButton.classList.add('reset-active');
});

buttons.forEach(btn => {
    btn.addEventListener('click', selectedTip);
    btn.addEventListener('click', calculate);
});


document.querySelector("#form").addEventListener("input", calculate);

function calculate() {

    resetButton.addEventListener('click', ()=>{
        totalBillWithTip.innerHTML = '$0.00';
        totalTip.innerHTML = '$0.00';
        billInput.value = null;
        peopleInput.value = null;
        inputPercent.value = null;
        buttons.forEach(btn => btn.classList.remove('active'));
        resetButton.classList.remove('reset-active');
    })

    const btns = parseFloat(this.value);
    const bill = Number(document.querySelector("#bill").value);
    const tip = document.querySelector("#tip").value;
    const people = Number(document.querySelector("#people").value);

    const tipValuePerson = (bill * (btns/100||tip/100)) / people;
    const tipValueTotal = (bill * (btns/100||tip/100));
    const finalBill = (bill + tipValueTotal) / people;

    const totalBillWithTip = document.querySelector('#total');
    totalBillWithTip.value = finalBill.toFixed(2);
    totalBillWithTip.innerHTML = `$${totalBillWithTip.value}`;

    const totalTip = document.querySelector("#tipAmount");
    totalTip.value = tipValuePerson.toFixed(2);
    totalTip.innerHTML = `$${totalTip.value}`;

    if(bill <= 0 || people <= 0){
        totalBillWithTip.innerHTML = '$0.00';
        totalTip.innerHTML = '$0.00';
        buttons.forEach(btn => btn.classList.remove('active'));
        resetButton.classList.remove('reset-active');
    }

    if(bill == 0){
        document.querySelector('#bill').classList.add('border');
    } else {
        document.querySelector('#bill').classList.remove('border');
    }

    if(people == 0){
        document.querySelector('#people').classList.add('border');
    } else {
        document.querySelector('#people').classList.remove('border');
    }
}



