$(document).ready(function(){
    
    $('form').on('submit', function(e){
        e.preventDefault();        
        const nomeTarefa = $('#nome-tarefa').val();       
        const novaTarefa = $(`<li class="tarefa">${nomeTarefa}</li>`);
        
        if($('#nome-tarefa').val() != ''){
            $(novaTarefa).appendTo('ul');
        }else{
            alert("Digite uma tarefa!");
        }       

        $('#nome-tarefa').val('');

        $('li').click(function(){
            $('li').toggleClass('texto-riscado')
        })
    })

})

