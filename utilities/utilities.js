const cedula = (cad) => {
    var total = 0;
    var longitud = cad.length;
    var longcheck = longitud - 1;

    if (cad !== "" && longitud === 10) {
        for (i = 0; i < longcheck; i++) {
            if (i % 2 === 0) {
                var aux = cad.charAt(i) * 2;
                if (aux > 9) aux -= 9;
                total += aux;
            } else {
                total += parseInt(cad.charAt(i)); // parseInt o concatenará en lugar de sumar
            }
        }

        total = total % 10 ? 10 - total % 10 : 0;

        if (cad.charAt(longitud - 1) == total) {
            console.log("Cedula Válida");
            return true;
        } else {
            console.log("Cedula Inválida");
            return false;
        }
    }

}

const email = (valor) => {
    if (/^\w+@\w+\.+[a-z]/.test(valor)) {
        console.log("es correcta.");
        return true;
    } else {
        console.log("es incorrecta.");
        return false;
    }
}
const ruc = (number) => {
    var dto = number.length;
    var valor;
    var acu = 0;
    if (number == "") {
        return false
    }
    else {
        for (var i = 0; i < dto; i++) {
            valor = number.substring(i, i + 1);
            if (valor == 0 || valor == 1 || valor == 2 || valor == 3 || valor == 4 || valor == 5 || valor == 6 || valor == 7 || valor == 8 || valor == 9) {
                acu = acu + 1;
            }
        }
        if (acu == dto) {
            while (number.substring(10, 13) == 001) {
                return true;
            }
            while (number.substring(0, 2) > 24) {
                console.log('Los dos primeros dígitos no pueden ser mayores a 24.');
                return false;
            }
        }
    }
}
const validation = (ide, mail) => {
    if ((cedula(ide) || ruc(ide)) && email(mail) === true) {        
        return true;
    }
    console.log('Incorrecto')
    return false;
}
module.exports = validation;


