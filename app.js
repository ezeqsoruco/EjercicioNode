let telefonos = require("./agenda");

//2.1) Mostrar la cantidad de teléfonos en la agenda telefónica.
function cantidadTelefonos() {
  const cantidad = telefonos.length;
  console.log(`La cantidad de teléfonos es: ${cantidad}`);
}

//2.2) Mostrar los datos de la agenda COMPLETA.
function mostrarTelefonos() {
  //console.log("Los contactos son:", telefonos);
  const cantidad = telefonos.length;
  let i = 0;

  while (i < cantidad) {
    console.log(telefonos[i]);
    ++i;
  }
}

//2.3) Mostrar los datos de una persona en particular pasando por parámetro el id.
function buscarPorId(idContacto) {
  const contacto = telefonos.find((x) => x.id === idContacto);
  console.log("El contacto es: ", contacto);
}

//2.4) Mostrar los datos de una persona pasando por parámetro el número de teléfono.
function buscarPorNombre(numberPhone) {
  const contacto = telefonos.find((x) => x.number === numberPhone);
  console.log("El contacto es: ", contacto);
}

function agregarContacto(contacto) {
  telefonos.push(contacto);
  console.log("Su lista de contacto se ha actualizado: ", telefonos);
}

// 2.6) Borrar un registro según el número de teléfono.
function borrarContacto(numberPhone) {
  telefonos = telefonos.filter((x) => x.number !== numberPhone);
  console.log("Contactos ahora: ", telefonos);
}

function contactosCon3() {
  telefonos = telefonos.filter((x) => x.number.startsWith("3"));
  console.log("Contactos ahora: ", telefonos);
}

// 2.7) Borrar un registro según el id.
function borrarContacto(id) {
  telefonos = telefonos.filter((x) => x.id !== id);
  console.log("Contactos ahora: ", telefonos);
}

// 2.8) Modificar el nombre de un registro según el id pasado por parámetro.
function modificarContactoPorId(id, nombre) {
  let contacto = telefonos.find((x) => x.id === id);
  //let contactoCopy = { ...contacto };
  //contactoCopy.name = "Juan";
  contacto.name = nombre;

  console.log(telefonos);
}

// 2.9) Modificar el nombre y número de un registro según el id pasado junto con todos los datos.
function modificarContactoPorId2(id, datos) {
  let contacto = telefonos.find((x) => x.id === id);
  //let contactoCopy = { ...contacto };
  //contactoCopy.name = "Juan";
  contacto.name = datos.nombre;
  contacto.number = datos.numero;
  console.log(telefonos);
}

//cantidadTelefonos();
//mostrarTelefonos();
//buscarPorId(2);
//buscarPorNombre("39-44-5323523");
//agregarContacto({ id: 5, name: "Ezequiel", number: "3515902816" });
//borrarContacto("040-123456");
contactosCon3();
//borrarContacto(2);
modificarContactoPorId(2, "Ada");

modificarContactoPorId2(2, { nombre: "Ezequiel", numero: "2424344324" });
