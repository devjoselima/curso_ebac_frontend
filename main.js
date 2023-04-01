const form = document.getElementById('form');
const numA = document.getElementById('n1');
const numB = document.getElementById('n2');


function validaNumero(){
    if(numB.value > numA.value){
        document.querySelector('.msg-error').style.display = 'none';
        document.querySelector('.msg-sucess').style.display = 'block';
    }else{
        document.querySelector('.msg-error').style.display = 'block';
        document.querySelector('.msg-sucess').style.display = 'none';
    }
}


form.addEventListener('submit', function(e){
    e.preventDefault();   
    validaNumero()

})


