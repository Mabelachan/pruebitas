
function mostrarValor() {
    let input = document.getElementById('miInput')
    let valor = input.value
    let texto = document.createElement('p')
    let contenedorDiv = document.getElementById('contenedor')
    
    texto.textContent = valor
    contenedorDiv.appendChild(texto)
    input.value = ''
}

let personas = [
    {
        name: "Pedro",
        departamento: "TI",
        edad: 25,
        salario: 2000,
        antiguedad: 2
    },
    {
        name: "Ana",
        departamento: "Recursos Humanos",
        edad: 30,
        salario: 2500,
        antiguedad: 5
    },
    {
        name: "Luis",
        departamento: "Marketing",
        edad: 28,
        salario: 2200,
        antiguedad: 3
    },
    {
        name: "Marta",
        departamento: "Ventas",
        edad: 35,
        salario: 3000,
        antiguedad: 7
    },
    {
        name: "Jorge",
        departamento: "Finanzas",
        edad: 40,
        salario: 3500,
        antiguedad: 10
    }
];
let usuarioEncontrado 
let bonificacion
let contenedor = document.getElementById('datos')
let parrafo = document.createElement('p');
let fechaActual = new Date()

function limpiarParrafos(){
    let parrafos = datos.querySelectorAll('p');
    parrafos.forEach(parrafo => { parrafo.remove()});
}
function usuarioSeleccionado() {
    let radioBtn = document.querySelector('input[name="opcion"]:checked');
    if (radioBtn) {
        usuarioEncontrado = personas.find(persona => persona.name == radioBtn.value);
    }
}

function mostrarHistorial(){
    
    Object.keys(usuarioEncontrado).forEach(key => {
    //un if que  solo haga esto si esque key es distinto a 'history'
        if(usuarioEncontrado[key] !=history){
            let parrafo = document.createElement('p')
            parrafo.textContent = `${key}: ${usuarioEncontrado[key]}`
            contenedor.appendChild(parrafo)
        }   
    });   

    if(usuarioEncontrado && usuarioEncontrado.hasOwnProperty('history')){
        for (let i = 0; i < usuarioEncontrado.history.length; i++) {
            //opcion uno usando las key
            // Object.keys(usuarioEncontrado.history[i]).forEach(key => {
            //     let parrafo = document.createElement('p')
            //     parrafo.textContent = `${key}: ${usuarioEncontrado.history[i][key]}`
            //     contenedor.appendChild(parrafo)
            // });

            //opcion dos usando valores en duro
            let parrafoUno = document.createElement('p')
            let parrafoDos = document.createElement('p')
            let parrafoTres = document.createElement('p')
            let parrafoCuatro = document.createElement('p')
            parrafoUno.textContent = `Monto Anterior: ${usuarioEncontrado.history[i].montoAnterior}`
            parrafoDos.textContent = `Monto Actual: ${usuarioEncontrado.history[i].montoActual}`
            parrafoTres.textContent = `Fecha Modificación: ${usuarioEncontrado.history[i].fechaModif}`
            parrafoCuatro.textContent = `Acción: ${usuarioEncontrado.history[i].accion}` 
            contenedor.appendChild(parrafoUno)
            contenedor.appendChild(parrafoDos)
            contenedor.appendChild(parrafoTres)
            contenedor.appendChild(parrafoCuatro)
                
        } 
    }else{
        parrafo.textContent = "Usuario no posee historial"
        contenedor.appendChild(parrafo)
    }
    
    //por cada key del usuarioEncontrado crea un parrafo con la key y el valor
    
}

function showInfo(){
    limpiarParrafos()
    usuarioSeleccionado()
    mostrarHistorial()
}
function incSalario(){
    usuarioSeleccionado()
    limpiarParrafos()
    let salarioAnterior = usuarioEncontrado.salario
    let salarioIncrementado = usuarioEncontrado.salario += 500
    let history = {
    montoAnterior: salarioAnterior,
    montoActual: salarioIncrementado,
    fechaModif: fechaActual,
    accion: "AUMENTO"
}
    // verifica si el objeto encontrado tiene la propiedad history si la tiene, la agrega al final
    if (usuarioEncontrado.hasOwnProperty('history')) {
        usuarioEncontrado.history.push(history)
        //si no la tiene, se la crea
    } else {
        usuarioEncontrado.history = [history]
    }      
        let parrafo = document.createElement('p');
        parrafo.textContent = "Nuevo salario: "+ salarioIncrementado;
        contenedor.appendChild(parrafo);
    
}

function calcBonif(){
    usuarioSeleccionado()
    limpiarParrafos()
    bonificacion = usuarioEncontrado.salario * 0.10 * usuarioEncontrado.antiguedad;
    parrafo.textContent = "Bonificación por años de servicio: " + bonificacion;
    contenedor.appendChild(parrafo)
}

function dismSalario(){
    usuarioSeleccionado()
    limpiarParrafos()   
    let salarioAnterior = usuarioEncontrado.salario
    let salarioDism = usuarioEncontrado.salario -= 1000
    let history = {
        montoAnterior: salarioAnterior,
        montoActual: salarioDism,
        fechaModif: fechaActual,
        accion: "DISMINUCIÓN"
}
    // verifica si el objeto encontrado tiene la propiedad history si la tiene, la agrega al final
    if (usuarioEncontrado.hasOwnProperty('history')) {
        usuarioEncontrado.history.push(history)
        //si no la tiene, se la crea
    } else {
        usuarioEncontrado.history = [history]
    }      
        let parrafo = document.createElement('p');
        parrafo.textContent = "Nuevo salario: "+ salarioDism;
        contenedor.appendChild(parrafo);
    // if (usuarioEncontrado.salario > 1000){
    //     let salarioActual = usuarioEncontrado.salario - 1000
    //     parrafo.textContent = "El nuevo salario es: " + salarioActual;
    // }else{
    //     parrafo.textContent = "Ha llegado al máximo de descuentos para este usuario";
    //     contenedor.appendChild(parrafo)
    // }
}

/*function realizarAccion(name, accion){
    let usuarioEncontrado 
    let salarioIncrementado
    let bonificacion
    for (let i = 0; i < personas.length; i++) {
            usuarioEncontrado = personas.find(function(persona) {
            return persona.name == name;
        });
    }
    if(accion == "showInfo"){
        console.log(usuarioEncontrado)
    }
    else if(accion == "incSalario"){
        console.log("Salario actual: " + usuarioEncontrado.salario)

        salarioIncrementado = usuarioEncontrado.salario += 500
        console.log("Nuevo salario: "+ salarioIncrementado)
    }
    else if(accion == "calcBonif"){
        bonificacion = usuarioEncontrado.salario * 0.10 * usuarioEncontrado.antiguedad;
        console.log("Bonificación por años de servicio: " + bonificacion)}
    else{
        console.log("acción inválida")
    }

    
}
*/
//realizarAccion("Marta","calcBonif")



/*Descripción del requerimiento:
showInfo: Imprime la información completa del usuario en la consola.
incrementarSalario: Incrementa el salario del usuario en 500 y muestra el nuevo salario en la consola.
calcularBonificacion: Calcula una bonificación del 10% del salario del usuario multiplicada por sus años
de antigüedad y muestra la bonificación en la consola.
La función realizarAccion toma dos parámetros: el nombre del usuario y la acción a realizar. 

Dependiendo de la acción proporcionada, la función ejecuta la lógica correspondiente y muestra el resultado 
en la consola. 

Crear una función que se encargue de mostrar el historial del usuario seleccionado por pantalla, no consola. En caso de que el usuario
 no tenga historial, mostrar mensaje con contenido "Usuario no tiene historial". Tips: asi como creas un <p> puedes crear muchos más recorriendo un array.
*/