import Anuncio from './anuncio.js'

export default class Anuncio_Auto extends Anuncio{
    constructor(id, titulo, transaccion, descripcion, precio , cantidadPuertas, cantidadKms, potencia ){
        super(id, titulo, transaccion, descripcion, precio )
        this.cantidadPuertas = cantidadPuertas;
        this.cantidadKms = cantidadKms;
        this.potencia = potencia;
    }

}
