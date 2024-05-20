
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


function realizarAccion(accion){
    let radioBtn = document.querySelector('input[name="opcion"]:checked')
    console.log(radioBtn)

    let usuarioEncontrado 
    let salarioIncrementado
    let bonificacion
    for (let i = 0; i < personas.length; i++) {
            usuarioEncontrado = personas.find(function(persona) {
            return persona.name == radioBtn.value;
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
realizarAccion("Marta","calcBonif")



/*Descripción del requerimiento:
showInfo: Imprime la información completa del usuario en la consola.
incrementarSalario: Incrementa el salario del usuario en 500 y muestra el nuevo salario en la consola.
calcularBonificacion: Calcula una bonificación del 10% del salario del usuario multiplicada por sus años
de antigüedad y muestra la bonificación en la consola.
La función realizarAccion toma dos parámetros: el nombre del usuario y la acción a realizar. 

Dependiendo de la acción proporcionada, la función ejecuta la lógica correspondiente y muestra el resultado 
en la consola. */