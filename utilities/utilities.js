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
function ruc(number) {
    var valor;
    if (number == "") {
        return false;
    }
    else {
            valor = number.substring(10,13);
            if ( valor == 001) {                
                return true;
            }else{
                console.log("no es ruc")
            }
        
        if (number.substring(0, 2) > 24) {
                console.log("fuera del numero de provincias")
                return false;            
        }
    }
}
const validation = (ide, mail) => {
    if ((cedula(ide) || ruc(ide)) && email(mail) === true) {
        return true;
    }
    return false;
}
module.exports = validation;


