// Verifica si el nombre del usuario ya está almacenado en el localStorage
let nombre = localStorage.getItem('nombreUsuario');

// Si el nombre no está almacenado, pide al usuario que lo ingrese
if (!nombre) {
  nombre = prompt('Por favor, ingresa tu nombre:');
  
  // Almacena el nombre del usuario en el localStorage
  localStorage.setItem('nombreUsuario', nombre);
}


// Busca el elemento en la página donde se muestra el mensaje de bienvenida
const mensajeBienvenida = document.querySelector('#mensaje-bienvenida');

// Agrega el nombre del usuario al mensaje de bienvenida
mensajeBienvenida.innerHTML = `<b>¡Bienvenido, ${nombre}!</b>`;



// Busca el botón en la página
const botonBorrar = document.querySelector('#borrar-nombre');

// Agrega un evento de clic al botón
botonBorrar.addEventListener('click', function() {
  // Borra el nombre del usuario almacenado en el localStorage
  localStorage.removeItem('nombreUsuario');
    // Recarga la página para actualizar el mensaje de bienvenida
    location.reload();
});