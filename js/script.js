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

    /* CREO UN ARRAY CON LAS PIZZAS */
    let pizzas = [
        {id: 1, nombre: "Bombarda", precio: 600, descripcion: "Mozzarella, bacon, extra queso cheddar, 2 huevos fritos, papas pay y aceitunas verdes", cantidad: 0},
        {id: 2, nombre: "Carne Lover", precio: 640, descripcion: "Mozzarella, carne, bacon, jamón y cantimpalo", cantidad: 0},
        {id: 3, nombre: "Vegeta Rihanna", precio: 640, descripcion: "Mozzarella, cebollas asadas, pimientos asados, berenjenas asadas, cherrys confitados y salsa flama", cantidad: 0},
        {id: 4, nombre: "Chicha", precio: 660, descripcion: "Mozzarella, pollo, crema de champignones, cebolla de verdeo y aceitunas verdes", cantidad: 0},
    ]

cantPizzas = parseInt(v1) + parseInt(v2) + parseInt(v3) + parseInt(v4);
    /* ASIGNO A CADA ELEMENTO DEL ARRAY SU CANTIDAD CORRESPONDIENTES DE PIZZAS */
    pizzas[0].cantidad = v1;
    pizzas[1].cantidad = v2;
    pizzas[2].cantidad = v3;
    pizzas[3].cantidad = v4;


    /* INICIALIZO LA VARIABLE QUE ACUMULARÁ EL MONTO TOTAL */
    let total = 0;

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

            items.push("Pizza: " + elemento.nombre + " \n " + "Cantidad: " + elemento.cantidad + " \n " + "Precio: $" + (elemento.precio*elemento.cantidad))
            sessionStorage.setItem('carrito', JSON.stringify(items));

    }

    total = total + multiplicar(elemento.precio,elemento.cantidad);
    }

    document.querySelector("#cant").innerText = " " + cantPizzas;

    const boton = document.getElementById('cant');


    boton.addEventListener('click', () => {
        if(cantPizzas == 0){
            Swal.fire({
                title: 'Mi compra',
                text:`No tenes pizzas en tu carrito, realizá tu pedido!`,
                confirmButtonText:'Comprar',
                position:'center'
            })
        }else{
            Swal.fire({
                title: 'Mi compra',
                text:`${items}\nMonto total: $${total}`,
                confirmButtonText:'Confirmar pedido',
                position:'center'
            })
        }
    })
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
    }
)
