function contar(){
    //pegando do documento HTML e criando variáveis
    var inicio = document.getElementById('inicio');
    var fim = document.getElementById('fim');
    var contagem = document.getElementById('passo');
    var resultado = document.getElementById('resul');
    var re = ''

    //transformando para tipo Number
    var final = Number(fim.value);
    var cont = Number(contagem.value);
    var ini = Number(inicio.value);

    //contagem incrementando
    if(ini < final){
        while(ini <= final){
            //incrementando
            ini = ini + cont;
            //montando estrutura para exibir em tela
            re += ini - cont + '&#9997 <br>';
            //exibindo em tela
            resultado.innerHTML = (re);
        }
    }
    //contagem decrementando
    else{
        while(ini >= final){
            //decrementando
            ini = ini - cont;
            //montando estrutura para exibir em tela
            re += ini + cont + '&#9997 <br>';
            //exibindo em tela
            resultado.innerHTML = (re);
        }
    }
}