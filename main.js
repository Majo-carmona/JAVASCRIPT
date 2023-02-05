
function pedirDato (){
    let dato = prompt("Ingrese su nombre y apellido")
    let mensaje = `Hola ${dato} Bienvenido a Mi Presupuesto`
    alert(mensaje)
}
pedirDato()

let presupuesto = prompt("ingrese el destino del presupuesto, ejemplo: Hogar,Vacaciones o automovil")
if (presupuesto == "Hogar".toUpperCase){
    alert("Presupuesto Hogar.");
}else if (presupuesto == "Vacaciones".toUpperCase){
    alert("Presupuesto Vacaciones.");
}else if (presupuesto == "Automovil".toUpperCase){
    alert("Presupuesto para Automivil.");
}

let monedaIngresos = prompt("en que moneda recibe sus ingresos.");

switch (monedaIngresos) {
    case "usd":
        alert("usted a elegido la moneda Dolar");
        break;

    case "ars":
        alert("usted a elegido la moneda Argentina");
        break;
    
    case "cop":
        alert("usted a elegido la moneda de colombia");
        break;

    default:
        alert("la moneda ingresada no esta identificada");
        break;
}












