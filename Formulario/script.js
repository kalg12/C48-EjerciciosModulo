// Seleccionamos el formulario
const formulario = document.querySelector("#formulario");

// Seleccionamos los campos
const nombre = document.querySelector("#nombre");
const correo = document.querySelector("#correo");
const edad = document.querySelector("#edad");
const especialidad = document.querySelector("#especialidad");

// Seleccionamos los mensajes de error
const errorNombre = document.querySelector("#errorNombre");
const errorCorreo = document.querySelector("#errorCorreo");
const errorEdad = document.querySelector("#errorEdad");
const errorEspecialidad = document.querySelector("#errorEspecialidad");

// Seleccionamos la sección donde mostraremos los resultados
const resultado = document.querySelector("#resultado");

formulario.addEventListener("submit", function (evento) {
  // Evita que la página se recargue
  evento.preventDefault();

  // Limpiamos los mensajes anteriores
  limpiarErrores();

  let formularioValido = true;

  // Validar nombre
  if (nombre.value.trim() === "") {
    mostrarError(nombre, errorNombre, "El nombre es obligatorio.");

    formularioValido = false;
  } else if (nombre.value.trim().length < 3) {
    mostrarError(
      nombre,
      errorNombre,
      "El nombre debe tener al menos 3 caracteres.",
    );

    formularioValido = false;
  }

  // Validar correo
  if (correo.value.trim() === "") {
    mostrarError(correo, errorCorreo, "El correo es obligatorio.");

    formularioValido = false;
  } else if (!validarCorreo(correo.value)) {
    mostrarError(correo, errorCorreo, "Escribe un correo válido.");

    formularioValido = false;
  }

  // Validar edad
  if (edad.value === "") {
    mostrarError(edad, errorEdad, "La edad es obligatoria.");

    formularioValido = false;
  } else if (Number(edad.value) < 14 || Number(edad.value) > 100) {
    mostrarError(edad, errorEdad, "La edad debe estar entre 14 y 100 años.");

    formularioValido = false;
  }

  // Validar especialidad
  if (especialidad.value === "") {
    mostrarError(
      especialidad,
      errorEspecialidad,
      "Selecciona una especialidad.",
    );

    formularioValido = false;
  }

  // Si todos los datos son correctos
  if (formularioValido) {
    mostrarInformacion();
  }
});

function mostrarInformacion() {
  document.querySelector("#resultadoNombre").textContent = nombre.value.trim();

  document.querySelector("#resultadoCorreo").textContent = correo.value.trim();

  document.querySelector("#resultadoEdad").textContent = `${edad.value} años`;

  document.querySelector("#resultadoEspecialidad").textContent =
    especialidad.value;

  // Mostramos la sección de resultados
  resultado.classList.remove("oculto");

  // Limpiamos el formulario
  formulario.reset();
}

function mostrarError(campo, elementoError, mensaje) {
  campo.classList.add("input-error");
  elementoError.textContent = mensaje;
}

function limpiarErrores() {
  const campos = document.querySelectorAll("input, select");
  const mensajes = document.querySelectorAll(".error");

  campos.forEach(function (campo) {
    campo.classList.remove("input-error");
  });

  mensajes.forEach(function (mensaje) {
    mensaje.textContent = "";
  });
}

function validarCorreo(correoIngresado) {
  const expresionCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return expresionCorreo.test(correoIngresado);
}
