
let arrayGastos = []

function crearArray (string, numeros) {
    if (numeros >= 0 ){
        arrayGastos.push ({
            tipo: string,
            precio: numeros,
        })
    } else {
        console.log  ("error")
    }
}


function añadirGasto (){
    let tipoGasto = prompt ('Nombre del gasto');
    if ( arrayGastos.length > 0 ){
        let buscaTipoGasto = arrayGastos.find((gasto)=> {return gasto.tipo === tipoGasto})
            while ( buscaTipoGasto !== undefined){
                tipoGasto = prompt ('Gasto repetido por favor añada otro nombre');
                buscaTipoGasto =  arrayGastos.find((gasto)=> {return gasto.tipo === tipoGasto})
            }
            let gastoInput = prompt('Añada el precio del gasto');
            let numeroGasto =  Number(gastoInput);
            crearArray (tipoGasto, numeroGasto);
            console.log(JSON.stringify(arrayGastos));
    
        } else {
            let gastoInput = prompt('Añada el precio del gasto');
            let numeroGasto =  Number(gastoInput);
            crearArray (tipoGasto, numeroGasto);
            console.log(JSON.stringify(arrayGastos));
        }
    }

function eliminarGasto () {
    let tipoGasto = prompt ('Tipo de gasto que quieres eliminar');
    let filtrarGasto = arrayGastos.filter((gasto) =>{ 
        return gasto.tipo !== tipoGasto
    },
    )
    arrayGastos = filtrarGasto
console.log(JSON.stringify(arrayGastos))
}

function modificarGasto () {
    let tipoGasto = prompt(' Gasto que desee modificar');
    let filtrarGastoM = arrayGastos.filter((gasto)=> {
        return gasto.tipo !== tipoGasto
    });

    arrayGastos = filtrarGastoM
    
    let tipoGastoModificado = prompt ('Nuevo precio');
    crearArray(tipoGasto, tipoGastoModificado);
    console.log(JSON.stringify(arrayGastos))

    }

function mostrarGastos () {
    if (arrayGastos.length ===1){
        console.log('Has gastado:' + arrayGastos.precio + '€')
    }else{
        console.log (JSON.stringify(arrayGastos))
        let sumaDeTodosLosGastos = arrayGastos.reduce ((acumulador, elemento) => {
            return acumulador.precio + elemento.precio; });
            console.log('Has gastado: ' + sumaDeTodosLosGastos + '€');
            return sumaDeTodosLosGastos 
        }
    }
      
let arrayIngresos = []

function crearArrayIngresos (string, numeros) {
        if (numeros >= 0 ){
            arrayIngresos.push ({
                tipo: string,
                precio: numeros,
            })
        } else {
            console.log  ("error")
        }
    }
    
    
function añadirIngreso (){
    let tipoIngreso = prompt ('Nombre del ingreso');
    if ( arrayIngresos.length !== 0 ){
        let buscaTipoIngreso = arrayIngresos.find((ingreso)=> {
            return ingreso.tipo === tipoIngreso})
            while ( buscaTipoIngreso !== undefined) {
                tipoIngreso = prompt ('Ingreso repetido por favor añada otro nombre');
                buscaTipoIngreso = arrayIngresos.find((ingreso)=> {
                    return ingreso.tipo === tipoIngreso})
            }
            let ingresoInput = prompt('Añada el importe del ingreso');
            let numeroIngreso =  Number(ingresoInput);
            crearArrayIngresos (tipoIngreso, numeroIngreso);
                console.log(JSON.stringify(arrayIngresos));
            } else {
                let ingresoInput = prompt('Añada el precio del gasto');
                let numeroIngreso =  Number(ingresoInput);
                crearArrayIngresos (tipoIngreso, numeroIngreso);
                console.log(JSON.stringify(arrayIngresos));
            }
        }
    
    
function eliminarIngreso () {
        let tipoIngreso = prompt ('Tipo de ingreso que quieres eliminar');
        let filtrarIngreso = arrayIngresos.filter((ingreso) =>{ 
            return ingreso.tipo !== tipoIngreso
        },
        )
        arrayIngresos = filtrarIngreso
    console.log(JSON.stringify(arrayIngresos))
    }
    
function modificarIngreso () {
        let tipoIngreso = prompt(' Ingreso que desee modificar');
        let filtrarIngresoM = arrayIngresos.filter((ingreso)=> {
            return ingreso.tipo !== tipoIngreso
        });
    
        arrayIngresos = filtrarIngresoM
        
        let tipoIngresoModificado = prompt ('Nuevo precio');
        crearArrayIngresos(tipoIngreso, tipoIngresoModificado);
        console.log(JSON.stringify(arrayIngresos))
    
        }

function mostrarIngresos(){
    if (arrayIngresos.length === 1){
        console.log (JSON.stringify(arrayIngresos))
        console.log('Has ingresado:' + arrayIngresos.precio + '€')
    } else {
        console.log (JSON.stringify(arrayIngresos))
    let sumaDeIngresos = arrayIngresos.reduce ((acc,element) => {
        return acc.precio + element.precio; 
    })
    console.log('Has ingresado:' + sumaDeIngresos + '€');
    return sumaDeIngresos
}}
          
let opcionMenu;
let menuGastos;
let menuIngresos;

    
while (opcionMenu !== 0 ){
        let imprimirMenu = prompt ('Selecione menu:' + ' ' +
        ' Salir 0, Gastos 1,  Ingresos 2' 
        )
     opcionMenu = Number(imprimirMenu)
        if (opcionMenu === 1 ) {
            let imprimirGastos = prompt ('Selecione Añadir 1, Eliminar 2, Modificar 3, Mostrar 4');
            menuGastos = Number(imprimirGastos)
            if ( menuGastos === 1 ){ 
                añadirGasto ()
            } else if (menuGastos===2 ){
                    eliminarGasto()
                } else if (menuGastos === 4){
                    if (arrayGastos.length >0 ){
                        if (arrayIngresos.length === 0 ){
                            console.log (mostrarGastos()) 
                        } else {
                    let gastosTotales = mostrarGastos ()
                    let ingresosTotales = mostrarIngresos()
                    let dineroTotal = ingresosTotales - gastosTotales
                console.log ('Tienes un total: ' + dineroTotal + '€')}
                    
                } else {
                    console.log ('No hay gastos')
                }   
        } else if (menuGastos === 3){
            modificarGasto ()
        }} else if (opcionMenu === 2){
        let imprimirIngresos = prompt ('Selecione Añadir 1, Eliminar 2, Modificar 3, Mostrar 4');
        menuIngresos = Number(imprimirIngresos)
            if (menuIngresos === 1 ) {
                añadirIngreso ()
            } else if ( menuIngresos===2 ){
                eliminarIngreso()
            } else if ( menuIngresos === 4){
                if (arrayIngresos.length > 0){
                    if (arrayGastos.length === 0){
                        console.log (mostrarIngresos())
                    } else {
                ingresosTotales = mostrarIngresos()
                gastosTotales = mostrarGastos ()
                dineroTotal = ingresosTotales - gastosTotales
                console.log ('Tienes un total: ' + dineroTotal + '€')}
                } else {
                    console.log('No hay ingresos')
                }
            } else if (menuIngresos === 3){
                modificarIngreso ()
            }
        } else {
            opcionMenu === 0;
            break;
        }
    }
        