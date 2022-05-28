/* const pizzas = [
    {id: 1, nombre: "Bombarda", precio: 600, descripcion: "Mozzarella, bacon, extra queso cheddar, 2 huevos fritos, papas pay y aceitunas verdes"},
    {id: 2, nombre: "Carne Lover", precio: 640, descripcion: "Mozzarella, carne, bacon, jamón y cantimpalo"},
    {id: 3, nombre: "Vegeta Rihanna", precio: 640, descripcion: "Mozzarella, cebollas asadas, pimientos asados, berenjenas asadas, cherrys confitados y salsa flama"},
    {id: 4, nombre: "Chicha", precio: 660, descripcion: "Mozzarella, pollo, crema de champignones, cebolla de verdeo y aceitunas verdes"},
]

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

let p1 = 0;
let p2 = 0;
let p3 = 0;
let p4 = 0;
let cantidad = 0;
let totalCant = 0;

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
}
alert("El monto total de tu compra es: $" + mostrar(sumar(m1, m2, m3, m4)) + "\nTOTAL PIZZAS: " + totalCant);
alert("Gracias por elegirnos, volvé pronto!");

 */