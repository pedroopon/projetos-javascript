let contador = 0;

function alteraContador(num){
    contador += num;
    document.getElementById("conta").innerHTML = contador;
}