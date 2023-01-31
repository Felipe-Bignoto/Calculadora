function insert(num){
    document.getElementById('resultado').innerHTML += num;
    const tamanho = (document.getElementById('resultado').innerHTML).length;
    if(tamanho > 13)
        document.getElementById('resultado').innerHTML = "Muito grande";
}

function clean(){
    document.getElementById("resultado").innerHTML = " ";
}

function back(){
    var resultado = document.getElementById("resultado").innerHTML;
    document.getElementById("resultado").innerHTML = resultado.substring(0, resultado.length -1);
}

function calcular(){
    var resultado = document.getElementById("resultado").innerHTML;

    if(resultado){
        document.getElementById("resultado").innerHTML = eval(resultado).toFixed(4);
        const tamanho = (document.getElementById('resultado').innerHTML).length;
        if(tamanho > 13)
            document.getElementById('resultado').innerHTML =  "Muito grande";
    }

    else{
        document.getElementById("resultado").innerHTML = "-------"
    }
}