function calcular_Suma() {
    let n1 = document.getElementById("psuma").value;
    let n2 = document.getElementById("ssuma").value;

    let res = parseFloat(n1) + parseFloat(n2);
    console.log("Resultado de la suma: " + res);
}

function calcular_Resta() {
    let n1 = document.getElementById("presta").value;
    let n2 = document.getElementById("sresta").value;

    let res = parseFloat(n1) - parseFloat(n2);
    console.log("Resultado de la resta: " + res);
}

function calcular_Multiplicacion() {
    let n1 = document.getElementById("pmul").value;
    let n2 = document.getElementById("smul").value;

    let res = parseFloat(n1) * parseFloat(n2);
    console.log("Resultado de la multiplicación: " + res);
}

function calcular_Division() {
    let n1 = document.getElementById("pdiv").value;
    let n2 = document.getElementById("sdiv").value;

    if (parseFloat(n2) == 0) {
        console.log("Error: División por cero no permitida.");
        return;
    }

    let res = parseFloat(n1) / parseFloat(n2);
    console.log("Resultado de la división: " + res);
}