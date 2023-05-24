const formulario = document.querySelector('#forma')
const ingresos = [

]
const egresos = [
    
]


const cargarApp = ()=>{
    cargarPresupuesto()
    crearIngreso()
    crearEgreso()
    
}
const totalIngresos = ()=>{
    let ingresosT = 0
    ingresos.forEach((item)=>{
        ingresosT += item.valor
    })
    return ingresosT
}


const totalEgresos = ()=>{
    let egresosT = 0

    egresos.forEach((item)=>{
        egresosT += item.valor
    })
    return egresosT
}

const cargarPresupuesto = ()=>{
    let presupuesto = totalIngresos() - totalEgresos()
    let porcentajeEgreso = formatoPorcentaje(totalEgresos()/totalIngresos())
    document.querySelector('#presupuesto').textContent = formatoMoneda(presupuesto)
    document.querySelector('#porcentaje').textContent = porcentajeEgreso
    document.querySelector('#ingresos').textContent = formatoMoneda(totalIngresos())
    document.querySelector('#egresos').textContent = formatoMoneda(totalEgresos())
    



}


const crearIngreso = ()=>{
    let ingresoHa = '';
    for(let ingreso of ingresos){
        ingresoHa += cargarIngresoHtml(ingreso)
    }

    document.querySelector('#lista-ingresos').innerHTML = ingresoHa
}


const cargarIngresoHtml = (ingreso)=>{
    let ingresoH = `<div class="elemento limpiarEstilos">
    <div class="elemento_descripcion">${ingreso.descripcion}</div>
    <div class="derecha limpiarEstilos">
      <div class="elemento_valor">${formatoMoneda(ingreso.valor)}</div>
      <div class='elemento_porcentaje'>${formatoPorcentaje(ingreso.valor/totalIngresos())}</div>

      <div class="elemento_eliminar">
        <button class="elemento_eliminar--btn">
          <ion-icon  name="close-outline"
          onclick='eliminarIngreso(${ingreso.id})'></ion-icon>
        </button>
      </div>
    </div>
  </div>`

  return ingresoH

}

const eliminarIngreso = (id)=>{
    let indiceEliminar = ingresos.findIndex(ingreso=>ingreso.id === id)
    ingresos.splice(indiceEliminar, 1)
    cargarApp()
    crearIngreso()

}


const crearEgreso = ()=>{
    let egresoHa = '';
    for(let egreso of egresos){
        egresoHa += cargarEgresoHtml(egreso)
    }

    document.querySelector('#lista-egresos').innerHTML = egresoHa
}


const cargarEgresoHtml = (egreso)=>{
    let egresoH = `<div class="elemento limpiarEstilos">
    <div class="elemento_descripcion">${egreso.descripcion}</div>
    <div class="derecha limpiarEstilos">
      <div class="elemento_valor">${formatoMoneda(egreso.valor)}</div>
      <div class='elemento_porcentaje'>${formatoPorcentaje(egreso.valor/totalEgresos())}</div>
      <div class="elemento_eliminar">
        <button class="elemento_eliminar--btn">
          <ion-icon onclick='eliminarEgreso(${egreso.id})' name="close-outline"></ion-icon>
        </button>
      </div>
    </div>
  </div>`

  return egresoH

}



const eliminarEgreso = (id)=>{
    let indiceEliminarE = egresos.findIndex(egreso=>egreso.id === id)
    egresos.splice(indiceEliminarE, 1)
    cargarApp()
    crearEgreso()

}

const agregarDato = ()=>{
    
    const tipo = document.querySelector('#tipo')
    const descripcion = document.querySelector('#descripcion')
    const valor = document.querySelector('#valor')

    if(descripcion.value !== '' && valor.value !== ''){
        if(tipo.value === 'ingreso'){
            ingresos.push(new Ingreso(descripcion.value, parseInt(valor.value)))
            cargarApp()
            crearIngreso()
        }else if(tipo.value === 'egreso'){
            egresos.push(new Egreso(descripcion.value, parseInt(valor.value)))
            cargarApp()
            crearEgreso()
        }
    }
}

const formatoMoneda = (valor)=>{
    return valor.toLocaleString('es-CO',{style: 'currency', currency: 'COP', minimumFractionsDigits: 2})
}
const formatoPorcentaje = (valor)=>{
    return valor.toLocaleString('es-CO',{style: 'percent', minimumFractionsDigits: 2})
}

window.addEventListener('load', (e)=>{
    e.preventDefault()
    
    cargarApp()
})
formulario.addEventListener('submit', (e)=>{
    e.preventDefault()

    agregarDato()
    
})



