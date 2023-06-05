let bill = document.querySelector('.inputs-section_bill-input');
let billnumber = parseInt(bill.value);


let people = document.querySelector('.inputs-section_people-input');
let peoplenumber = parseInt(people.value);

let tipresult = document.querySelector('.results_tip-value');

let totalresult = document.querySelector('.results_total-value');


let buttons = document.querySelectorAll('.btns_button');
let alert = document.querySelector('#alert');

let tipValue = 5;

buttons.forEach(element => {
    element.addEventListener('click', event => {
        removeActive()
        element.classList.add('btns_button--selected');
        tipValue = parseInt(event.target.innerText.slice(0, -1));

        calculaterTip();


    });
})

function removeActive() {
    buttons.forEach(element => {
        element.classList.remove('btns_button--selected');

    });
}

//actualizando personas

people.addEventListener('input', () => {
    peoplenumber = parseFloat(people.value);
    if (peoplenumber == 0 || isNaN(peoplenumber)) {
        people.style.borderColor = 'red';
        alert.classList.add('error');
        calculaterTip();
    } else {
        alert.classList.remove('error');
        people.style.borderColor = 'hsl(189, 41%, 97%)';
        calculaterTip();
    }


});

//actualizando el bill

bill.addEventListener('input', () => {
    billnumber = parseFloat(bill.value);
  

    calculaterTip();
})


//actualizando custom

let custom = document.querySelector('.btns_custom');
custom.addEventListener('click', () => {
    removeActive()
})
custom.addEventListener('input', () => {
    
    tipValue = parseInt(custom.value);
    if (!isNaN(tipValue)) {
        calculaterTip();
    } 


})


//reset

let reset = document.querySelector('.result-section_reset');
reset.addEventListener('click', () => {
    bill.value = 0;
    billnumber = 0;
    people.value = 5;
    peoplenumber = 5;
    custom.value = 'Custom';
    calculaterTip();
});

function calculaterTip() {
    //calcular el tip amount

    tipresult.innerText = "$"+((billnumber * tipValue / 100) / peoplenumber).toFixed(2);

    //calcular el total

    totalresult.innerText = "$"+(((billnumber * tipValue / 100) + billnumber) / peoplenumber).toFixed(2);
};







//enlazar

