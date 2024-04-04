var numero=0; var opcion; var resultadorFactorial=1;
do {
    opcion=parseInt(prompt("Elija una opcion:\n1.Calcular factorial.\n2.Determinar si es par.\n3.Terminar."));
    switch (opcion) {
        case 1:
            numero=parseInt(prompt("Ingrese el numero del que desea calcular el factorial."))
            for (let i = 1; i <= numero; i++) {
                resultadorFactorial=resultadorFactorial*i;
            }
            alert(resultadorFactorial+" es el factorial de "+numero)
            break;
        case 2:
            numero=parseInt(prompt("Ingrese el numero del que desea saber si es par o impar."))
            if ((numero % 2)==0) {
                alert("El numero elegido es par")
            } else {
                alert("El numero elegido es impar")
            }
            break;
    }
} while (opcion!=3);