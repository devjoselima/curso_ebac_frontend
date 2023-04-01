const form = document.getElementById('form');
const numA = document.getElementById('n1');
const numB = document.getElementById('n2');


function validaNumero(){
    if(numB.value > numA.value){
        document.querySelector('.msg-error').style.display = 'none';
        numB.style.borderBottom = ''
        document.querySelector('.msg-sucess').style.display = 'block';
    }else{
        document.querySelector('.msg-error').style.display = 'block';
        numB.style.borderBottom = '2px solid red'; 
        document.querySelector('.msg-sucess').style.display = 'none';
    }
}


form.addEventListener('submit', function(e){
    e.preventDefault();   
    validaNumero()

})


