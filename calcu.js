const botones=document.getElementsByName('data-number');
const botonopera=document.getElementsByName('data-opera');
const botonigual=document.getElementsByName('data-igual')[0];
const botondelete=document.getElementsByName('data-delete')[0];
var result=document.querySelector('#result');

var operActual='';
var opeAnterior='';
var operacion=undefined;


botones.forEach(function(boton){
boton.addEventListener('click',function(){
    agregarnumero(boton.innerText);
})
});


botonopera.forEach(function(boton){
    boton.addEventListener('click',function(){
         selectoperacion(boton.innerText);
    
    })
});


botonigual.addEventListener('click',function(){
    calcular();
    actulizarDisplay();
});

botondelete.addEventListener('click',function(){
    clear();
    actulizarDisplay();
});


function selectoperacion(op){
    if (operActual==='') {
        return;
    }if (opeAnterior!=='') {
        calcular();
    }
    operacion=op.toString();
    opeAnterior=operActual;
    operActual='';
}

function calcular() {
    var calculo;
    const anterior=parseFloat(opeAnterior);
    const actual=parseFloat(operActual);
    if(isNaN(anterior)||isNaN(actual)) return;
    switch(operacion){
        case '+':
            calculo=anterior+actual;
            break;
        case '-':
            calculo=anterior-actual;
            break;
        case 'x':
            calculo=anterior*actual;
            break;
        case '/':
            calculo=anterior/actual;
            break;
        default:
            return; 
    }
    operActual=calculo;
    operacion=undefined;
    opeAnterior='';
}


function agregarnumero(num){
 operActual=operActual.toString() + num.toString();
 actulizarDisplay();
}

function actulizarDisplay(){
    result.value=operActual;
}

function clear(){
    operActual='';
    opeAnterior='';
    operacion=undefined;
}