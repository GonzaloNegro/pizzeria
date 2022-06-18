/* ASIGNO A LAS VARIABLES LOS ID DEL HTML PARA LUEGO AGREGARLES INFORMACION */
const pago = document.getElementById('prodPago');
const btnPaga = document.getElementById('btnPago');

/* CREO LA FUNCION PARA INCORPORAR AL HTML DATOS DEL STORAGE */
function pagar(){
    let pro = JSON.parse(localStorage.getItem('carrito'));
    let tot = JSON.parse(localStorage.getItem('totalF'));
    let orga = "<ul>";
    for(i = 0; i < pro.length; i++){
        orga += "<li>" + pro[i] + "</li>";
    }
    pago.innerHTML = `<h3>Tu pedido</h3><br>${orga}<br><b><font color="green">Monto total: $${tot}</font></b>`;
}

/* AL CARGAR LA PAGINA SE EJECUTA LA FUNCION ASI MUESTRA POR PANTALLA MI COMPRA */
window.onload = pagar();


/* AL PRESIONAR EL BOTON VERDE, SE HACE UN CONTROL DE LOS CAMPOS COMPLETADOS */
btnPaga.addEventListener("click", ()=>{
    controlar();
    }
)

/* FUNCION PARA CONTROLAR LOS CAMPOS VACIOS */
function controlar(){
    const nom = document.getElementById("nombre").value;
    const tel = document.getElementById("telefono").value;
    const dire = document.getElementById("direccion").value;
    if(dire != "" && nom != "" && tel != ""){
        okey();
     }
     else{
         error();
     }
}

/* ALERT AL ESTAR TODOS LOS CAMPOS COMPLETOS */
function okey(){
    Swal.fire({
        title: 'Gracias por tu compra!',
        icon: 'success',
        text:`Ya estamos preparando tu pedido!`,
        position:'center',
        timer: 4000
    })
    borrarStorage();
    setTimeout(dirigir, 2000);
}

/* ALERT AL ESTAR ALGUN CAMPO VACIO */
function error(){
    Swal.fire({
        title: 'Completa los campos!',
        icon: 'info',
        timer: 3000,
        position:'center'
    })
}

/* FUNCION PARA BORRAR EL STORAGE */
function borrarStorage(){
    localStorage.clear();
}

/* FUNCIÓN PARA REDIRIGIR AL INICIO */
function dirigir(){
    location.href ="index.html";
}

/* btnPaga.addEventListener("click", (event)=>{
    event.preventDefault();
    controlar();
    }
) */