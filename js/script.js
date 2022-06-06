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
    CREO UN ARRAY items PARA POSTERIORMENTE GUARDAR LOS ITEMS DEL SESSION EN ESTE
    PARA CADA ELEMENTO DEL ARRAY PIZZA
    SI HAY UN NUMERO DE PIZZAS SOLICITADO
    LLENO EL ARRAY items CON CADA UNA DE ELLAS
    POSTERIORMENTE CREO LA SESSION PARA GUARDAR LOS VALORES DE ESTE ARRAY
    LUEGO ACUMULO EL MONTO TOTAL EN LA VARIABLE total*/
    let items = [];
    for (const elemento of pizzas) {

        if(elemento.cantidad != 0){
            items.push("Pizza: " + elemento.nombre + " - " + "Cantidad: " + elemento.cantidad + " - " + "Precio: $" + (elemento.precio*elemento.cantidad))
            localStorage.setItem('carrito', JSON.stringify(items))
    }

    total = total + multiplicar(elemento.precio,elemento.cantidad);
    }

    /* 
    PARA CADA ELEMENTO DEL ARRAY ITEMS
    APLICO DOM Y CREO UN ELEMENTO li 
    LE ASIGNO AL ELEMNTO li UN VALOR TRAIDO DEL ARRAY
    LO INSERTO EN EL HTML
    */
    for(const element of items){
        let li = document.createElement("li");
        li.innerText = element;
        lista.appendChild(li);
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

/* 
CREO LA FUNCION PEDIDO QUE VA A RECIBIR COMO PARAMETRO UN SOLO VALOR
PARA CADA ELEMENTO DE ESE VALOR
CREO UN ELEMENTO li
LE ASIGNO A ESE ELEMENTO li UN VALOR DEL ELEMENTO DEL ARRAY
INSERTO EN EL HTML DICHO li
OCULTO EL BOTON DE "CALCULAR"
*/

function pedido(x){
    for(const element of x){
        let li = document.createElement("li");
        li.innerText = element
        lista1.appendChild(li);
    }
    document.getElementById("calcular").style.visibility = "hidden";
}

/* 
CREO UNA VARIABLE lista2 Y LE ASIGNO EL VALOR DEL ID confi PARA LUEGO PONER INFORMACION EN EL
CREO LA VARIABLE p Y TRAIGO POR MEDIO DEL JSON PARSE LOS ELEMENTOS QUE ESTEN EN LA KEY carrito
*/

let lista1 = document.querySelector("#confi");
let p = JSON.parse(localStorage.getItem('carrito'));


/* 
EJECUTO LA FUNCIÓN DE pedido CON EL PARAMENTRO p QUE CONTIENE LOS VALORES DE LA SESSION
PARA QUE ESTOS SEAN INSERTADOS Y LISTADOS MEDIANTE LA FUNCION pedido EN EL HTML
*/
pedido(p);
