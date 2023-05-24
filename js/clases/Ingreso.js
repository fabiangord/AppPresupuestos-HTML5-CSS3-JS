class Ingreso extends Dato{

    static contadorIngresos = 0

    constructor(descripcion,valor){
        super(descripcion,valor)
        this.id = ++ Ingreso.contadorIngresos
    }
    get getId(){
        return this.id
    }
}