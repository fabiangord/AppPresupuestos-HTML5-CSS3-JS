class Egreso extends Dato{

    static contadorEgresos = 0

    constructor(descripcion,valor){
        super(descripcion,valor)
        this.id = ++ Egreso.contadorEgresos
    }

    get getId(){
        return this.id
    }
}