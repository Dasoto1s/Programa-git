document.addEventListener('DOMContentLoaded', () => {
    const detallesBotones = document.querySelectorAll('.boton');

    detallesBotones.forEach(boton => {
        boton.addEventListener('click', (event) => {
            event.preventDefault();

            // Obtener el ID del producto desde el enlace
            const urlParams = new URLSearchParams(event.currentTarget.getAttribute('href').split('?')[1]);
            const productoId = urlParams.get('id');

            // Redirigir a la página de detalles del producto con el ID
            window.location.href = `DetallesProducto.html?id=${productoId}`;
        });
    });
});
