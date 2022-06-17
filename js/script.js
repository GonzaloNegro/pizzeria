/* EJECUTAR LA FUNCIÓN AL CARGAR LA PÁGINA */
window.onload = getData();

/* ASIGNO A LAS VARIABLES LOS ID DEL HTML PARA ASIGNARLES CONTENIDO */
const info = document.querySelector('#info');
const but = document.querySelector('#btn');

/* FUNCION ASINCRONA PARA TRAER LOS DATOS DEL JSON */
async function getData(){
    const response = await fetch('./data.json');
    const data = await response.json();
    createHTML(data);
}

/* FUNCIÓN PARA AGREGAR AL HTML CONTENIDO MEDIANTE LOS DATOS TRAIDOS DEL JSON */
function createHTML(array) {
    info.innerHTML = ''
    but.innerHTML = ''
    let p = 1;
    array.forEach((piz) => {
        const card = `
        <div class="card mb-3" >
        <div class="row g-0">
          <div class="col-md-3">
            <img src="${piz.imagen}" class="img-fluid rounded-start" alt="...">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${piz.nombre}</h5>
              <p class="card-text">${piz.descripcion}</p>
              <p class="card-text"><small class="text-muted">Precio individual: $${piz.precio}</small></p>
              <label for="p${p}">Agregar al carrito: </label>
              <input id="p${p}" type="number" min="0" max="10" value="0">
            </div>
          </div>
        </div>
      </div>`
        info.innerHTML += card
        p += 1;
    }
    )
    but.innerHTML =`<input type="submit" id="calcular" class="calcular" value="Confirmar pedido">`
}






















/* FUNCION PARA RECARGAR LA PÁGINA DESPUES DE LAS ACCIONES DEL USUARIO */
function recargar(){
    location.reload();
}

/* CONSULTO EL LOCAL STORAGE PARA RELLENAR EL CARRITO, SI ES QUE VENGO DE OTRA PAGINA */
let compraFinal2 = JSON.parse(localStorage.getItem('carrito'));
if(compraFinal2 != null ){
    window.onload = llenar2();
}

/* MARCO QUE HAY PRODUCTOS EN EL CARRITO, DE HABERLOS EN EL LOCAL STORAGE */
function llenar2(){
    document.querySelector("#cant").innerText = " " + 1;
}

/* ASIGNO EL VALOR DEL ID AL BOTON
EVENTO PARA CUANDO SE HACE CLICK EN DICHO BOTON
PARSEO LOS DATOS DEL LOCAL STORAGE
ASIGNO A LA VARIABLE tt EL PRECIO TOTAL GUARDADO EN EL STORAGE
SI LA EL STORAGE ES DIFERENTE DE VACIO
LISTO LAS FILAS
MUESTRO EN UN SWAL LA COMPRA
SI CONFIRMAN, EL PEDIDO SE ENVIA (MAS ADELANTE HARE INGRESAR DATOS A LA PERSONA) 
SI SE CANCELA SE BORRA EL STORAGE (AL IGUAL QUE AL ENVIAR EL PEDIDO AL DOMICILIO)*/
const boton = document.getElementById('cant');
boton.addEventListener('click', () => {
    let compraFinal2 = JSON.parse(localStorage.getItem('carrito'));
    let tt = JSON.parse(localStorage.getItem('totalF'));
    if(compraFinal2 != null || 0){
        let organizar = "<ul>";
        for(i = 0; i < compraFinal2.length; i++){
            organizar += "<li>" + compraFinal2[i] + "</li>";
        }
        Swal.fire({
            title: 'Mi compra',
            html:`${organizar}`,
            showCancelButton: true,
            confirmButtonText: 'Confirmar pedido',
            cancelButtonText: `Cancelar pedido`,
            position:'center',
            footer: `Monto total: $${tt}`
        }).then((result)=>{
            if (result.isConfirmed) {
                /* location.href ="index.html"; */
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Gracias por tu compra!',
                    text: 'Tu producto está en camino!',
                    showConfirmButton: false,
                    timer: 1500
                  })
                  borrarStorage();
                  setTimeout(recargar, 2000);
            }else if(result.dismiss === Swal.DismissReason.cancel){
                borrarStorage();
                Swal.fire({
                    title: 'Compra cancelada!',
                    icon: 'success',
                    text: 'El producto ha sido borrado',
                    timer: 3000
                })
                setTimeout(recargar, 2000);
            }
        })
    }

})

/* FUNCION PARA LIMPIAR EL STORAGE
UNA VEZ LIMPIO, EL CARRITO DEJA DE MOSTRAR UN 1 EN PANTALLA */
function borrarStorage(){
    localStorage.clear();
    document.querySelector("#cant").innerText = " ";
}

/* FUNCION PARA MULTIPLICAR LA CANTIDAD CON EL PRECIO */
function multiplicar(numeroA, numeroB) {
    let multiplicacion = numeroA * numeroB;
    return multiplicacion;
}

function sumar(a,b,c,d){
    let res = a + b +c + d;
    return res;
}

/* A LA VARIABLE btnCalcular LE ASIGNO EL VALOR DEL ID CALCULAR */
const btnCalcular = document.getElementById("btn");


/* FUNCIÓN UTILIZADA PARA MOSTRAR POR PANTALLA UN AVISO DE QUE SE AGREGARON PRODUCTOS AL CARRITO */
function agregar(){
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Has agregado los productos al carrito!',
        showConfirmButton: false,
        timer: 1500
      })
}

/* FUNCION UTILIZADA PARA MOSTRAR POR PANTALLA UN AVISO DE QUE NO HAY PRODUCTOS EN EL CARRITO */
function vacio(){
    Swal.fire({
        title: 'Mi compra',
        text:`No tenes pizzas en tu carrito, realizá tu pedido!`,
        showConfirmButton: false,
        timer: 1500,
        position:'center'
    })
}

/* FUNCIÓN PARA DESPLAZAR LA PANTALLA AUTOMATICAMENTE */
function mover(){
    window.scrollTo({
        top: 0
      });
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
    sumar(p1,p2,p3,p4) != 0? agregar() : vacio();
    setTimeout(mover, 2000);
    }  
)




/* ------------------------------------------------------ */
/* ACÁ COMIENZA LA FUNCIÓN QUE SE EJECUTA CUANDO SE INGRESA UNA CANTIDAD DE PRODUCTOS
Y SE LE DA CLICK AL BOTÓN DE CONFIRMAR PEDIDO (BOTÓN VERDE) */
/* ------------------------------------------------------ */

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
            items.push("Pizza: " + elemento.nombre + " - " + "Cantidad: " + elemento.cantidad + " - " + "Precio: $" + (elemento.precio*elemento.cantidad))
            localStorage.setItem('carrito', JSON.stringify(items));
    }
    total = total + multiplicar(elemento.precio,elemento.cantidad);
    /* SI EL MONTO TOTAL, ES DIFERENTE A 0, GUARDO EN EL LOCAL STORAGE EL MONTO
    PARA TRAERLO CUANDO VAYA A OTRA PAGINA Y LUEGO REGRESE A ESTA */
    if(total > 0){
        localStorage.setItem('totalF', JSON.stringify(total));
    }
    }

    /* DEPENDIENDO SI LA CANTIDAD DE PIZZAS ES 0 O MAYOR, EL CARRITO MOSTRARA UN NUMERO */
     if(sumar(v1,v2,v3,v4) > 0){
        document.querySelector("#cant").innerText = " " + 1;
     }else{
        document.querySelector("#cant").innerText = " ";
    }

    /* ASIGNO A LA CONST boton EL ID cant */
    const boton = document.getElementById('cant');

    /* FUNCIÓN PARA BORRAR EL STORAGE Y VOLVER EL CARRITO A VACIO */
    function borrarStorage(){
        localStorage.clear();
        document.querySelector("#cant").innerText = " ";
    }

    /* EVENTO DEL BOTÓN PARA LLENAR O AVISAR QUE NO HAY PRODUCTOS */
    boton.addEventListener('click', () => {
        cantPizzas != 0? llenar() : vaciar();
    })


    /* FUNCIÓN SIMILAR A LA DEL COMIENZO. PARA LLENAR EL CARRITO
    Y DENTRO DE EL SELECCIONAR SI SE REALIZA EL PEDIDO O CANCELA */
    function llenar(){
        let compraFinal = JSON.parse(localStorage.getItem('carrito'));
        /* console.log(compraFinal); */
        let organizar = "<ul>";
        for(i = 0; i < compraFinal.length; i++){
        /*     console.log("Hola " + i); */
            organizar += "<li>" + compraFinal[i] + "</li>";
        }
        Swal.fire({
            title: 'Mi compra',
            html:`${organizar}`,
            showCancelButton: true,
            confirmButtonText: 'Confirmar pedido',
            cancelButtonText: `Cancelar pedido`,
            position:'center',
            footer: `Monto total: $${total}`
        }).then((result)=>{
            if (result.isConfirmed) {
                /* location.href ="index.html"; */
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Gracias por tu compra!',
                    text: 'Tu producto está en camino!',
                    showConfirmButton: false,
                    timer: 1500
                  })
                  borrarStorage();
                  setTimeout(recargar, 2000);
            }else if(result.dismiss === Swal.DismissReason.cancel){
                borrarStorage();
                Swal.fire({
                    title: 'Compra cancelada!',
                    icon: 'success',
                    text: 'El producto ha sido borrado',
                    timer: 3000
                })
                setTimeout(recargar, 2000);
            }
        })
    }

    /* FUNCI´ÓN PARA AVISAR QUE SE HA VACIADO EL CARRITO */
    function vaciar(){
        Swal.fire({
            title: 'Mi compra',
            text:`No tenes pizzas en tu carrito, realizá tu pedido!`,
            showConfirmButton: false,
            timer: 1500,
            position:'center'
        })
    }
}

