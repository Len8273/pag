
const botonesComprar = document.querySelectorAll('.btn-comprar');
const carritoIcono = document.getElementById('carrito-icono');
const itemsCarrito = document.getElementById('items-carrito');
const totalElemento = document.getElementById('total');
const botonVaciar = document.getElementById('vaciar-carrito');

let carrito = [];

function actualizarTotal() {
    const total = carrito.reduce((acc, item) => acc + item.precio, 0);
    totalElemento.textContent = total.toFixed(2);
    carritoIcono.textContent = `🛒 (${carrito.length})`;
}

function renderizarCarrito() {
    itemsCarrito.innerHTML = '';
    carrito.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.nombre} - $${item.precio.toFixed(2)}`;
        itemsCarrito.appendChild(li);
    });
    actualizarTotal();
}


function agregarAlCarrito(event) {
    const productoElemento = event.target.closest('.producto');
    const nombre = productoElemento.getAttribute('data-nombre');
    const precio = parseFloat(productoElemento.getAttribute('data-precio'));

    const producto = { nombre, precio };
    carrito.push(producto);
    renderizarCarrito();
}

function vaciarCarrito() {
    carrito = [];
    renderizarCarrito();
}

botonesComprar.forEach(boton => {
    boton.addEventListener('click', agregarAlCarrito);
});

botonVaciar.addEventListener('click', vaciarCarrito);
