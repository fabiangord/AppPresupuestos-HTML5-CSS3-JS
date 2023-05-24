class Dato{

    constructor(descripcion,valor){
        this.descripcion = descripcion
        this.valor = valor
    }

    get getDescripcion(){
        return this.descripcion
    }
    get getValor(){
        return this.valor
    }
    set setDescripcion(descripcion){
        this.descripcion = descripcion
    }
    set setValor(valor){
        this.valor = valor
    }
}