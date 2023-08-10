function multiplicar(){
    //puxando do documento HTMl e criando variaveis
    var num = document.getElementById('mult');
    var resul = document.getElementById('resul');
    var multi = '';

    //transformando em tipo Number
    var mult = Number(num.value);
    var re = Number(resul.value);

    //estrutura de condição
    for(var pos = 0; pos <= 10; pos ++){
        //calculando
        re = mult * pos;
        //montando estrutura para exibir em tela
        multi += mult + ' x ' + pos + ' = ' + re +'<br>';
        //exibindo em tela
        resul.innerHTML = (multi);
    }
}