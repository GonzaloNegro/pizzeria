/* setTimeout(listar, 3000) */
/* CREO ARRAY CON LAS PIZZAS DISPONIBLES */
const pizzas = [
    {id: 1, nombre: "Bombarda", precio: 600, descripcion: "Mozzarella, bacon, extra queso cheddar, 2 huevos fritos, papas pay y aceitunas verdes"},
    {id: 2, nombre: "Carne Lover", precio: 640, descripcion: "Mozzarella, carne, bacon, jamón y cantimpalo"},
    {id: 3, nombre: "Vegeta Rihanna", precio: 640, descripcion: "Mozzarella, cebollas asadas, pimientos asados, berenjenas asadas, cherrys confitados y salsa flama"},
    {id: 4, nombre: "Chicha", precio: 660, descripcion: "Mozzarella, pollo, crema de champignones, cebolla de verdeo y aceitunas verdes"},
]

/* CREACIÓN DE FUNCION PARA LISTAR CADA UNA DE  LAS PIZZAS MEDIANTE UN FOREACH */
function lista(){
    pizzas.forEach(element => {
        alert("MENÚ\nPizza " + element.id  + "\nNombre: " + element.nombre + "\nDescripción: " + element.descripcion + "\nPrecio: $" + element.precio)
        }
    );
}

/* FUNCIÓN PARA MULTIPLICAR CANTIDAD DE PIZZAS POR RESPECTIVO PRECIO */
function multiplicar(numeroA, numeroB) {
    let multiplicacion = numeroA * numeroB;
    return multiplicacion;
}

/* FUNCIÒN PARA SUMAR LAS PIZZAS DE CADA TIPO */
function sumar(m1, m2, m3, m4) {
    let suma = m1 + m2 + m3 + m4;
    return suma;
}

/* FUNCIÒN PARA MOSTAR UN MENSAJE */
function mostrar(mensaje){
    return mensaje;
}

/* FUNCIÒN PARA MOSTRAR LA COMPRA FINAL */
function detallar(v1, v2, v3){
    let detalle = "Tu compra es: Pizza " + v1 + "\nCantidad: " + v2 + "\nTotal: $" + v3;
    return detalle;
}

/* EJECUTO LA FUNCIÒN LISTA PARA QUE ME MUESTRE EL MENÙ DISPONIBLE */
lista();

/* DECLARO UNA VARIBALE GLOBAL PARA QUE SELECCIONEN LA PIZZA DEL MENÙ QUE DESEAN */
let opcion = parseInt(prompt("Seleccione una de las pizzas del menú o presione 0 para salir"));

/* INICIALIZO LAS VARIABLES EN 0 */
p1 = 0;
p2 = 0;
p3 = 0;
p4 = 0;
cantidad = 0;
totalCant = 0;

/* EJECUTO UNA ESTRUCTURA REPETITIVA SIEMPRE QUE SE SIGA SOLICITANDO PIZZAS Y NO SE PRESIONE 0 PARA SALIR DEL SISTEMA */
while(opcion !=0){

    /* UTILIZO EL METODO FIND PARA TRAER LA PIZZA(ELEMENT) DEPENDIENDO EL VALOR SELECCIONADO EN "OPCION" */
    const encontrado = pizzas.find((element)=>element.id == opcion);
    /* MUESTRO LA PIZZA SELECCIONADA CON SU PRECIO */
    alert("La pizza seleccionada es: " + encontrado.nombre + "\nPrecio: $" + encontrado.precio);

    /* SE EJECUTARA EN LA ESTRUCTURA SWITCH EL CASO SELECCIONADO DEPENDIENDO DEL VALOR DE "OPCION" */
    switch (encontrado.id) {
        case 1:
            /* GUARDO LA CANTIDAD DE PIZZAS DE ESTE TIPO */
            p1 = parseInt(prompt("Por favor selecciona la cantidad"));
            /* UTILIZO UNA VARIABLE PARA IR GUARDANDO LA CANTIDAD DE PIZZAS DE ESTE TIPO */
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

    /* USO UN ACUMULADOR PARA GUARDAR LA CANTIDAD DE PIZZAS TOTALES, INDEPENDIENTEMENTE DEL TIPO */
    totalCant = totalCant + cantidad;

    /* SI LA CANTIDAD DE PIZZAS DE UN TIPO ES DIFERENTE A 0, 
    GUARDO MENSAJES DETALLANDO LA PIZZA Y PRECIO DE LA MISMA POR SU CANTIDAD */
    if(p1 != 0){piz1 = detallar(pizzas[0].nombre,p1,mostrar(multiplicar(p1,pizzas[0].precio)));}else{piz1 = "";}

    if(p2 != 0){piz2 = detallar(pizzas[1].nombre,p2,mostrar(multiplicar(p2,pizzas[1].precio)));}else{piz2 = "";}

    if(p3 != 0){piz3 = detallar(pizzas[2].nombre,p3,mostrar(multiplicar(p3,pizzas[2].precio)));}else{piz3 = "";}
    
    if(p4 != 0){piz4 = detallar(pizzas[3].nombre,p4,mostrar(multiplicar(p4,pizzas[3].precio)));}else{piz4 = "";}


    /* MUESTRO EL MENSAJE SI ES QUE HAY PIZZAS PEDIDAS */
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
     
    /* CALCULO EL PRECIO TOTAL DE UNA PIZZA, TENIENDO EN CUENTA SU PRECIO Y LA CANTIDAD SELECCIONADA */
    m1 = multiplicar(p1,pizzas[0].precio);
    m2 = multiplicar(p2,pizzas[1].precio);
    m3 = multiplicar(p3,pizzas[2].precio);
    m4 = multiplicar(p4,pizzas[3].precio);

    /* MUESTRO NUEVAMENTE EL MENÙ */
    lista() 
    /* LLAMO A LA VARIABLE "OPCIÒN" PARA QUE EL USUARIO ELIJA SI COMPRA MAS O FINALIZA EL PEDIDO */
    opcion = parseInt(prompt("Seleccione una de las pizzas del menú o presione 0 para salir"));

}
/* FINALIZÓ EL PEDIDO Y MUESTRO EL TOTAL DE LA COMPRA */
alert("El monto total de tu compra es: $" + mostrar(sumar(m1, m2, m3, m4)) + "\nTOTAL PIZZAS: " + totalCant);
/* SALUDO DE DESPEDIDA */
alert("Gracias por elegirnos, volvé pronto!");