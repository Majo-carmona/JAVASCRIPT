
function pedirDato (){
    let dato = prompt("Ingresa tu apodo estrella")
    let mensaje = `Hola ${dato} Bienvenido a Mi Presupuesto`
    alert(mensaje)
}
pedirDato()

const usuarios = {
    nombre: prompt("Ingrese Nombre y Apellido"),
    edad: prompt("Cuantos años tienes?"),
    pais: prompt("Ingrese su pais de residencia"),
    salario: parseInt(prompt("Ingrese el valor de su salario")),
};

console.log(usuarios.nombre);
console.log(usuarios.edad);
console.log(usuarios.pais);
console.log(usuarios.salario);

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

let presupuesto = prompt("ingrese el destino del presupuesto, ejemplo: Hogar,Vacaciones o automovil")
if (presupuesto.toUpperCase() == "HOGAR"){
    alert("Presupuesto Hogar.");
}else if (presupuesto.toUpperCase() == "VACACIONES"){
    alert("Presupuesto Vacaciones.");
}else if (presupuesto.toUpperCase() == "AUTOMIVIL"){
    alert("Presupuesto para Automivil.");
}

let precioLuz = parseInt(prompt("ingrese el valor de su servicio de luz"))
let precioAgua = parseInt(prompt("ingrese el valor de su servicio de agua"))
let precioGas = parseInt(prompt("ingrese el valor de su servicio de gas"))
let resultado = 0

const presupuestoHogar = [
    { id: 1, servicio: "luz", precio: precioLuz },
    {id: 2, servicio: "agua", precio: precioAgua},
    {id: 3, servicio: "gas", precio: precioGas },
];

for (let index = 0; index < presupuestoHogar.length; index++){
    const element = presupuestoHogar[index];
    resultado += element.precio
}

alert(resultado);

alert("Presupuesto Vacaciones")
const presupuestoVacaciones = [
        { id: 1, nombre: "vuelo", precio: 800000},
        { id: 2, nombre: "hotel", precio: 250000 },
        { id: 3, nombre: "tours", precio: 600000 },
        { id: 4, nombre: "transportes", precio: 180000 },
    ];
    
    let precio = parseInt(prompt("Ingrese el valor mínimo a gastar"));
    let filtrados = presupuestoVacaciones.filter((item) => item.precio > precio);
    let mensaje = "";
    
    filtrados.forEach((item) => {
        mensaje += `
        ID: ${item.id}
        Nombre: ${item.nombre}
        Precio: $${item.precio}
        `;
    });
    
    alert(mensaje);
