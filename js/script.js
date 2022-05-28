/* FUNCION PARA MULTIPLICAR LA CANTIDAD CON EL PRECIO */
function multiplicar(numeroA, numeroB) {
    let multiplicacion = numeroA * numeroB;
    return multiplicacion;
}

/* FUNCIÓN PARA RECARGAR AUTOMATICAMENTE CUANDO NO SE INGRESO UNA CANTIDAD DE PIZZAS */
function recarga(){
    window.location.href = "pedidos.html"
}



/* A LA VARIABLE btnCalcular LE ASIGNO EL VALOR DEL ID CALCULAR */
const btnCalcular = document.getElementById("calcular");

/* CREO UNA FUNCIÓN TRAYENDO LOS VALORES DE LAS 4 CANTIDADES DE PIZZAS */
function comprar(v1, v2, v3, v4){
    /* CREO UNA VARIABLE QUE TIENE ASIGNADO EL DIV DEL HTML PARA LUEGO ESCRIBIR EN EL */
    let lista = document.querySelector("#confirmado");

    /* CREO UN ARRAY CON LAS PIZZAS */
    let pizzas = [
        {id: 1, nombre: "Bombarda", precio: 600, descripcion: "Mozzarella, bacon, extra queso cheddar, 2 huevos fritos, papas pay y aceitunas verdes", cantidad: 0},
        {id: 2, nombre: "Carne Lover", precio: 640, descripcion: "Mozzarella, carne, bacon, jamón y cantimpalo", cantidad: 0},
        {id: 3, nombre: "Vegeta Rihanna", precio: 640, descripcion: "Mozzarella, cebollas asadas, pimientos asados, berenjenas asadas, cherrys confitados y salsa flama", cantidad: 0},
        {id: 4, nombre: "Chicha", precio: 660, descripcion: "Mozzarella, pollo, crema de champignones, cebolla de verdeo y aceitunas verdes", cantidad: 0},
    ]

    /* ASIGNO A CADA ELEMENTO DEL ARRAY SU CANTIDAD CORRESPONDIENTES DE PIZZAS */
    pizzas[0].cantidad = v1;
    pizzas[1].cantidad = v2;
    pizzas[2].cantidad = v3;
    pizzas[3].cantidad = v4;

    /* INICIALIZO LA VARIABLE QUE ACUMULARÁ EL MONTO TOTAL */
    let total = 0;

    /* CREO UNA VARIABLE PARA MOSTRAR CONTENIDO CON EL HTML */
    let h2 = document.createElement("h2");
    h2.innerText = "Resumen de la compra";
    lista.appendChild(h2); 

    /* 
    PARA CADA ELEMENTO DEL ARRAY PIZZAS
    CREO UN ELEMENTO li DE LISTA
    SI LA CANTIDAD DE CADA ELEMENTO DEL ARRAY ES DISTINTA A 0
    SE ESCRIBE EN EL HTML EL ELEMENTO li
    LUEGO ACUMULO EL MONTO TOTAL EN LA VARIABLE total*/
    for (const elemento of pizzas) {
    let li = document.createElement("li");
    if(elemento.cantidad != 0){
        li.innerText =`Pizza: ${elemento.nombre}\nCantidad: ${elemento.cantidad}\nPrecio: $${elemento.precio*elemento.cantidad}\n\n`;
        lista.appendChild(li);
    }
    total = total + multiplicar(elemento.precio,elemento.cantidad);
    }

    /* 
    SI EL TOTAL ES IGUAL A 0, AVISA POR PANTALLA QUE PARA REALIZAR EL PEDIDO, SE HACE ARRIBA
    Y SE RECARGA LA PAGINA
    
    SI ES DISTINTO A 0, ES PORQUE HAY UNA CANTIDAD DE PIZZAS SELECCIONADAS.
    MUESTRA POR PANTALLA EL MONTO TOTAL Y UN SALUDO
    */
    if(total == 0){
        let pedir = document.createElement("h5");
        pedir.innerText = "¡¡¡Realizá tu pedido arriba!!!";
        lista.appendChild(pedir);
        setTimeout(recarga, 2000);
    }else{        
        let h4 = document.createElement("h4");
        h4.innerText = "Monto total: $" + total;
        lista.appendChild(h4);

        let saludo = document.createElement("h5");
        saludo.innerText = "¡¡¡Gracias por tu compra, volvé pronto!!!";
        lista.appendChild(saludo); 
    }
}

/* 
CREO UN EVENTO PARA CUANDO PRESIONO EL BOTON CALCULAR
TRAIGO LOS VALORES DE LA CANTIDAD DE CADA PIZZA
PASO CADA CANTIDAD A LA FUNCION CALCULAR
OCULTO EL BOTON CALCULAR 
*/
btnCalcular.addEventListener("click", ()=>{
    let p1 = document.getElementById('p1').value;
    let p2 = document.getElementById('p2').value;
    let p3 = document.getElementById('p3').value;
    let p4 = document.getElementById('p4').value;
    comprar(p1, p2, p3, p4);
    document.getElementById("calcular").style.visibility = "hidden";
    }
)