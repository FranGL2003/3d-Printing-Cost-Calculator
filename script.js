const consumo = document.getElementById('consumo');
const precioWatt = document.getElementById('precio-watt');
const duracion = document.getElementById('duracion');
const peso = document.getElementById("peso");
const precioGramo = document.getElementById('precio-gr');
const nombre = document.getElementById('name')
let resultado = document.getElementById('resultado');
let itemsList = document.getElementById('items-list');
let items = [];
let duracionDecimal = 

// Poner los ultimos valores apenas carga la página
consumo.value = localStorage.getItem('consumo')
precioWatt.value = localStorage.getItem('precioWatt')
duracion.value = localStorage.getItem('duracion')
precioGramo.value = localStorage.getItem('precioGramo')
peso.value = localStorage.getItem('peso')


renderItemsList()

//Calcular el costo
function calculate () {    
    horaADecimal(duracion.value)
    
    resultado.innerText = '$ ' +  Number((consumo.value * precioWatt.value * duracionDecimal + peso.value * precioGramo.value).toFixed(2))  

    localStorage.setItem('consumo', consumo.value)
    localStorage.setItem('precioWatt', precioWatt.value)
    localStorage.setItem('duracion', duracion.value)
    localStorage.setItem('peso', peso.value)
    localStorage.setItem('precioGramo', precioGramo.value)
}

//Guardar los productos
function saveName() {
    if (nombre.value !== '' && resultado.innerText !== '') {
        items.push({nombre: nombre.value, precio: resultado.innerText})
        localStorage.setItem('productos', JSON.stringify(items))
        renderItemsList()}
        else {
            alert('Falta el nombre o el costo')
        }
    }

//Renderizar los productos
function renderItemsList() {
    itemsList.innerHTML = ' '
    for (let i = 0; i < items.length; i++) {
        itemsList.innerHTML += `<li> ${items[i].nombre} / ${items[i].precio} </li>`
    } 
}

//Elimiar todos los productos
function deleteAll() {
    items = []
    localStorage.removeItem('productos')
    renderItemsList()
}

//Eliminar el último producto
function deleteLast(item) {
    items.splice(items.length - 1, 1)
    localStorage.setItem('productos', JSON.stringify(items))
    renderItemsList()
}

//Función para transformar la hora a sistema decimal
function horaADecimal(hora) {
    let decimal = hora / 60

    duracionDecimal = decimal
  }
