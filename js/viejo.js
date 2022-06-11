/* function multiplicar(numeroA, numeroB) {
    let multiplicacion = numeroA * numeroB;
    return multiplicacion;
}

function recarga(){
    window.location.href = "pedidos.html"
}

const btnCalcular = document.getElementById("calcular");

function comprar(v1, v2, v3, v4){

    let lista = document.querySelector("#confirmado");

    let pizzas = [
        {id: 1, nombre: "Bombarda", precio: 600, descripcion: "Mozzarella, bacon, extra queso cheddar, 2 huevos fritos, papas pay y aceitunas verdes", cantidad: 0},
        {id: 2, nombre: "Carne Lover", precio: 640, descripcion: "Mozzarella, carne, bacon, jamón y cantimpalo", cantidad: 0},
        {id: 3, nombre: "Vegeta Rihanna", precio: 640, descripcion: "Mozzarella, cebollas asadas, pimientos asados, berenjenas asadas, cherrys confitados y salsa flama", cantidad: 0},
        {id: 4, nombre: "Chicha", precio: 660, descripcion: "Mozzarella, pollo, crema de champignones, cebolla de verdeo y aceitunas verdes", cantidad: 0},
    ]

    pizzas[0].cantidad = v1;
    pizzas[1].cantidad = v2;
    pizzas[2].cantidad = v3;
    pizzas[3].cantidad = v4;

    let total = 0;

    let h2 = document.createElement("h2");
    h2.innerText = "Resumen de la compra";
    lista.appendChild(h2); 

    let items = [];
    for (const elemento of pizzas) {

        if(elemento.cantidad != 0){
            items.push("Pizza: " + elemento.nombre + " - " + "Cantidad: " + elemento.cantidad + " - " + "Precio: $" + (elemento.precio*elemento.cantidad))
            localStorage.setItem('carrito', JSON.stringify(items))
    }

    total = total + multiplicar(elemento.precio,elemento.cantidad);
    }

    for(const element of items){
        let li = document.createElement("li");
        li.innerText = element;
        lista.appendChild(li);
    }

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

btnCalcular.addEventListener("click", ()=>{
    let p1 = document.getElementById('p1').value;
    let p2 = document.getElementById('p2').value;
    let p3 = document.getElementById('p3').value;
    let p4 = document.getElementById('p4').value;
    comprar(p1, p2, p3, p4);
    document.getElementById("calcular").style.visibility = "hidden";
    }
)

function pedido(x){
    for(const element of x){
        let li = document.createElement("li");
        li.innerText = element
        lista1.appendChild(li);
    }
    document.getElementById("calcular").style.visibility = "hidden";
}


let lista1 = document.querySelector("#confi");
let p = JSON.parse(localStorage.getItem('carrito'));


pedido(p); */