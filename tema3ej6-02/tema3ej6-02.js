window.onload = function () {
  // Número de enlaces de la página
  const enlaces = document.getElementsByTagName("a");
  console.log("Número de enlaces de la página: " + enlaces.length);

  // Dirección del penúltimo enlace
  if (enlaces.length > 1) {
    const penultimoEnlace = enlaces[enlaces.length - 2].href;
    console.log("Dirección a la que enlaza el penúltimo enlace: " + penultimoEnlace);
  } else {
    console.log("No hay suficientes enlaces para mostrar el penúltimo.");
  }

  // Número de enlaces que apuntan a "http://prueba"
  let countEnlacesPrueba = 0;
  for (let i = 0; i < enlaces.length; i++) {
    if (enlaces[i].href === "http://prueba/") {
      countEnlacesPrueba++;
    }
  }
  console.log("Número de enlaces que enlazan a http://prueba: " + countEnlacesPrueba);

  // Número de enlaces del tercer párrafo
  const parrafos = document.getElementsByTagName("p");
  if (parrafos.length >= 3) {
    const enlacesTercerParrafo = parrafos[2].getElementsByTagName("a").length;
    console.log("Número de enlaces del tercer párrafo: " + enlacesTercerParrafo);
  } else {
    console.log("No hay un tercer párrafo en la página.");
  }

  // Crear un nodo <div> con un nodo <p> dentro y añadirlo al documento
  const nuevoDiv = document.createElement("div");
  const nuevoP = document.createElement("p");
  const textoP = document.createTextNode("Este es un nuevo párrafo dentro de un div creado dinámicamente.");
  nuevoP.appendChild(textoP);
  nuevoDiv.appendChild(nuevoP);
  document.body.appendChild(nuevoDiv);
  console.log("Nuevo div con párrafo añadido al documento.");
}