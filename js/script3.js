/* CREO UN ARRAY CON LAS PRIMERAS PIZZAS DEL INDEX */
let Pizza =[
    {
        id: 1, 
        nombre: "Muzzarella",
        precio: 460, 
        descripcion: "Pizza individual con masa al estilo napolitano, mozzarella, orégano y aceitunas verdes.",
        imagen: "imagenes/muzza.jpg"
    },
    {
        id: 2, 
        nombre: "Provenzal", 
        precio: 480, 
        descripcion: "Pizza individual con masa al estilo napoletano, mozzarella, salsa provenzal y aceitunas verdes.", 
        imagen: "imagenes/provenzal.jpg"
    },
    {  
        id: 3, 
        nombre: "Napolitana", 
        precio: 520, 
        descripcion: "Pizza individual con masa al estilo napoletano, mozzarella, tomate, queso sardo, provenzal y aceitunas verdes.", 
        imagen: "imagenes/napo.jpg"
    },
    {
        id: 4, 
        nombre: "Especial", 
        precio: 520, 
        descripcion: "Pizza individual con masa al estilo napoletano, mozzarella, jamón cocido, pimientos asados, huevo duro y aceitunas verdes.", 
        imagen: "imagenes/especial.jpg"
    },
    {
        id: 5, 
        nombre: "Serrana", 
        precio: 630, 
        descripcion: "Pizza individual con masa al estilo napoletano, mozzarella, jamón crudo, rúcula, queso sardo y aceitunas verdes.", 
        imagen: "imagenes/serrana.jpg"
    },
      {
        id: 6, 
        nombre: "Cuatro Quesos", 
        precio: 630, 
        descripcion: "Pizza individual con masa al estilo napoletano, mozzarella, queso sardo, queso azul, queso cheddar y aceitunas negras.", 
        imagen: "imagenes/4quesos.jpg"
    }
  ]

  let Pizza2 = [
    {
      id: 1, 
      nombre: "Bombarda", 
      precio: 600, 
      descripcion: "Mozzarella, bacon, extra queso cheddar, 2 huevos fritos, papas pay y aceitunas verdes", imagen: "imagenes/bombarda.jpg"},
    {
      id: 2, 
      nombre: "Carne Lover", 
      precio: 640, 
      descripcion: "Mozzarella, carne, bacon, jamón y cantimpalo", 
      imagen: "imagenes/carnelover.jpg"},
    {
      id: 3, 
      nombre: "Vegeta Rihanna", 
      precio: 640, 
      descripcion: "Mozzarella, cebollas asadas, pimientos asados, berenjenas asadas, cherrys confitados y salsa flama", 
      imagen: "imagenes/vegeta.jpg" },
    {
      id: 4, 
      nombre: "Chicha", 
      precio: 660, 
      descripcion: "Mozzarella, pollo, crema de champignones, cebolla de verdeo y aceitunas verdes", 
      imagen: "imagenes/chicha.jpg"}
] 

/* GUARDO EN LA VARIABLE EL ID DEL INDEX */
const info2 = document.querySelector('#lista');
const info3 = document.querySelector('#lista2');

/* ASIGNO A LA PARTE DEL HTML EL CONTENIDO RECORRIENDO EL ARRAY */
info2.innerHTML = ''
Pizza.forEach((piz) => {
    const card = `
    <div class="card mb-3 tarjeta" style="max-width: 500px;">
                    <div class="row g-0">
                      <div class="col-md-4">
                        <img src="${piz.imagen}" class="img-fluid rounded-start" alt="...">
                      </div>
                      <div class="col-md-8">
                        <div class="card-body">
                          <h5 class="card-title">${piz.nombre}</h5>
                          <p class="card-text">${piz.descripcion}</p>
                          <p class="card-text"><small class="text-muted">Precio individual: $${piz.precio}</small></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  `
    info2.innerHTML += card
    }
)

info3.innerHTML = ''
Pizza2.forEach((piz) => {
    const card = `
    <div class="card mb-3 tarjeta" style="max-width: 500px;">
                    <div class="row g-0">
                      <div class="col-md-4">
                        <img src="${piz.imagen}" class="img-fluid rounded-start" alt="...">
                      </div>
                      <div class="col-md-8">
                        <div class="card-body">
                          <h5 class="card-title">${piz.nombre}</h5>
                          <p class="card-text">${piz.descripcion}</p>
                          <p class="card-text"><small class="text-muted">Precio individual: $${piz.precio}</small></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  `
                  info3.innerHTML += card
    }
)