
    function getPalindromo(){
        string = document.getElementById("cadena-ingreso").value;
        string2 = string.toLowerCase();
        reversedString = string2.split("").reverse().join("");
    
    const nuevoTr = `<tr>
    <td>${string2}</td>
    <td>${(string2 === reversedString) ? 'Is palindrome' : 'Is not palindrome'}</td>
</tr>`;
document.getElementById("result-table").getElementsByTagName("tbody")[0].innerHTML += nuevoTr;
}