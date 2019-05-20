function verificarTarjeta() {
    const numeroTarjeta = document.getElementById("numero-tarjeta").value;    
    const verificador = parseInt(numeroTarjeta.slice(-1));
    const arrayNumeros = numeroTarjeta.split("");
    const numValidacion = [1,3,5,7,9,3,5,7,9,3,5,7,9,3,5,7,9];
    let acumulador = 0;
  for (let i = 0; i < (numeroTarjeta.length - 1); i++) {
     let operation = numeroTarjeta[i] * numvalidacion[i];
      acumulador += operation;
  }
  acumulador2 = acumulador / 2;
  acumuladorsolo = parseInt(acumulador.toString().split(".",1).join());
    };
    const nuevoTr = `<tr>
        <td>${numeroTarjeta}</td>
        <td>${((acumulador / 2) % 10 === verificador) ? 'Valid' : 'Invalid'}</td>
    </tr>`;
    if(numeroTarjeta.length < 16){
        return alert('El numero ingresado debe contener 16 digitos');
    } else { 
    document.getElementById("result-table").getElementsByTagName("tbody")[0].innerHTML += nuevoTr;
}
 }
