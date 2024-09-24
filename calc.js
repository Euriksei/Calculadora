function tocar(){
    const audio = new Audio('Playstation.mp3');
    audio.play();
}

let expressao = '';//armazena os numeros e a operação


//adiciona no espaço em branco os digitos que o usuario escolher
function adicionarNumero(numero){
    expressao += numero;
    document.getElementById('resultado').value = expressao;
}
// mesam coisa
function adicionarOperacao(operacao){
    expressao += operacao;
    document.getElementById('resultado').value = expressao;
}

function calcular(){
    try{
        const resultado = eval(expressao);//eval faz o codigo executar a linha em questao
        document.getElementById('resultado').value = resultado;
        expressao = resultado.toString();
        if(expressao === '40028922'){
            tocar()
        }
    } catch {
        document.getElementById('resultado').value = 'Erro';
    }
}

function limpar(){
    expressao = '';
    document.getElementById('resultado').value = '';
}
    
