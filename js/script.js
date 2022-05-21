/* class Pizzas{
    constructor(nombre, precio, descripcion){
        this.nombre = nombre;
        this.precio = parseFloat(precio);
        this.descripcion = descripcion;
    }
}

const pizza1 = new Pizzas("Bombarda", 600,"Mozzarella, bacon, extra queso cheddar, 2 huevos fritos, papas pay y aceitunas verdes");
const pizza2 = new Pizzas("Carne Lover", 640, "Mozzarella, carne, bacon, jamón y cantimpalo");
const pizza3 = new Pizzas("Vegeta Rihanna", 640, "Mozzarella, cebollas asadas, pimientos asados, berenjenas asadas, cherrys confitados y salsa flama");
const pizza4 = new Pizzas("Chicha", 660, "Mozzarella, pollo, crema de champignones, cebolla de verdeo y aceitunas verdes");

 */

/*  function listar(){
    opcion = prompt("Pizza 1: \nNombre: " + pizza1.nombre + "\nDescripción: " +pizza1.descripcion + "\nPrecio: $" + pizza1.precio +"\n\n" +
    "Pizza 2: \nNombre: " + pizza2.nombre + "\nDescripción: " +pizza2.descripcion + "\nPrecio: $" + pizza2.precio +"\n\n" +
    "Pizza 3: \nNombre: " + pizza3.nombre + "\nDescripción: " +pizza3.descripcion + "\nPrecio: $" + pizza3.precio +"\n\n" + 
    "Pizza 4: \nNombre: " + pizza4.nombre + "\nDescripción: " +pizza4.descripcion + "\nPrecio: $" + pizza4.precio +"\n\n" + 
    "Seleccione una pizza o presione x para finalizar");
    return opcion;
}  */

/* let opcion = prompt("Pizza 1: \nNombre: " + pizza1.nombre + "\nDescripción: " +pizza1.descripcion + "\nPrecio: $" + pizza1.precio +"\n\n" +
"Pizza 2: \nNombre: " + pizza2.nombre + "\nDescripción: " +pizza2.descripcion + "\nPrecio: $" + pizza2.precio +"\n\n" +
"Pizza 3: \nNombre: " + pizza3.nombre + "\nDescripción: " +pizza3.descripcion + "\nPrecio: $" + pizza3.precio +"\n\n" + 
"Pizza 4: \nNombre: " + pizza4.nombre + "\nDescripción: " +pizza4.descripcion + "\nPrecio: $" + pizza4.precio +"\n\n" + 
"Seleccione una pizza o presione x para finalizar"); */
/* setTimeout(listar, 3000) */


const pizzas = [
    {id: 1, nombre: "Bombarda", precio: 600, descripcion: "Mozzarella, bacon, extra queso cheddar, 2 huevos fritos, papas pay y aceitunas verdes"},
    {id: 2, nombre: "Carne Lover", precio: 640, descripcion: "Mozzarella, carne, bacon, jamón y cantimpalo"},
    {id: 3, nombre: "Vegeta Rihanna", precio: 640, descripcion: "Mozzarella, cebollas asadas, pimientos asados, berenjenas asadas, cherrys confitados y salsa flama"},
    {id: 4, nombre: "Chicha", precio: 660, descripcion: "Mozzarella, pollo, crema de champignones, cebolla de verdeo y aceitunas verdes"},
]
function lista(){
    pizzas.forEach(element => {
        alert("MENÚ\nPizza " + element.id  + "\nNombre: " + element.nombre + "\nDescripción: " + element.descripcion + "\nPrecio: $" + element.precio)
        }
    );
}

function multiplicar(numeroA, numeroB) {
    let multiplicacion = numeroA * numeroB;
    return multiplicacion;
}

function sumar(m1, m2, m3, m4) {
    let suma = m1 + m2 + m3 + m4;
    return suma;
}

function mostrar(mensaje){
    return mensaje;
}

function detallar(v1, v2, v3){
    let detalle = "Tu compra es: Pizza " + v1 + "\nCantidad: " + v2 + "\nTotal: $" + v3;
    return detalle;
}

lista();
let opcion = parseInt(prompt("Seleccione una de las pizzas del menú o presione 0 para salir"));

p1 = 0;
p2 = 0;
p3 = 0;
p4 = 0;
cantidad = 0;
totalCant = 0;

while(opcion !=0){

    const encontrado = pizzas.find((element)=>element.id == opcion);
    alert("La pizza seleccionada es: " + encontrado.nombre + "\nPrecio: $" + encontrado.precio);

    switch (encontrado.id) {
        case 1:
            p1 = parseInt(prompt("Por favor selecciona la cantidad"));
            cantidad = p1;
            break;
    
        case 2:
            p2 = parseInt(prompt("Por favor selecciona la cantidad"));
            cantidad = p2;
            break;
    
         case 3:
            p3 = parseInt(prompt("Por favor selecciona la cantidad"));
            cantidad = p3;
            break;

        case 4:
            p4 = parseInt(prompt("Por favor selecciona la cantidad"));
            cantidad = p4;
            break;
    }

/*     switch (opcion) {
        case "1":
            alert("La pizza elegida es: Pizza " + element.nombre + "\nPrecio: $" + pizza1.precio);
            p1 = parseInt(prompt("Por favor selecciona la cantidad"));
            cantidad = p1;
            break;
    
        case "2":
            alert("La pizza elegida es: Pizza " + pizza2.nombre + "\nPrecio: $" + pizza2.precio);
            p2 = parseInt(prompt("Por favor selecciona la cantidad"));
            cantidad = p2;
            break;
    
         case "3":
            alert("La pizza elegida es: Pizza" + pizza3.nombre + "\nPrecio: $" + pizza3.precio);
            p3 = parseInt(prompt("Por favor selecciona la cantidad"));
            cantidad = p3;
            break;

        case "4":
            alert("La pizza elegida es: Pizza" + pizza4.nombre + "\nPrecio: $" + pizza4.precio);
            p4 = parseInt(prompt("Por favor selecciona la cantidad"));
            cantidad = p4;
            break;
     
    } */
    totalCant = totalCant + cantidad;

    if(p1 != 0){piz1 = detallar(pizzas[0].nombre,p1,mostrar(multiplicar(p1,pizzas[0].precio)));}else{piz1 = "";}

    if(p2 != 0){piz2 = detallar(pizzas[1].nombre,p2,mostrar(multiplicar(p2,pizzas[1].precio)));}else{piz2 = "";}

    if(p3 != 0){piz3 = detallar(pizzas[2].nombre,p3,mostrar(multiplicar(p3,pizzas[2].precio)));}else{piz3 = "";}
    
    if(p4 != 0){piz4 = detallar(pizzas[3].nombre,p4,mostrar(multiplicar(p4,pizzas[3].precio)));}else{piz4 = "";}


    if(p1 != 0){
        alert(mostrar(piz1));
    }

     if(p2 != 0){
        alert(mostrar(piz2));
    }

    if(p3 != 0){
        alert(mostrar(piz3));
    }

    if(p4 != 0){
        alert(mostrar(piz4));
    }
     

    m1 = multiplicar(p1,pizzas[0].precio);
    m2 = multiplicar(p2,pizzas[1].precio);
    m3 = multiplicar(p3,pizzas[2].precio);
    m4 = multiplicar(p4,pizzas[3].precio);
    lista() 
    opcion = parseInt(prompt("Seleccione una de las pizzas del menú o presione 0 para salir"));

}
alert("El monto total de tu compra es: $" + mostrar(sumar(m1, m2, m3, m4)) + "\nTOTAL PIZZAS: " + totalCant);
alert("Gracias por elegirnos, volvé pronto!");