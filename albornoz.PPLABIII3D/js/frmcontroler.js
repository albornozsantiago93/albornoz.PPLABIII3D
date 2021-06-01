import Anuncio from "./anuncio.js"
import Anuncio_Auto from "./anuncio_auto.js";
import Anuncio_Macota from "./anuncio_auto.js"



function obtenerAnuncio(proximoId, frm){
    const nuevoAnuncio = new Anuncio_Auto(proximoId, frm.titulo.value, frm.transaccion.value
    ,  frm.descripcion.value, frm.precio.value, frm.cantidadPuertas.value, frm.cantidadKms.value
    , frm.potencia.value);
    return nuevoAnuncio;    
}


function mostrarAnuncio(anuncio){

    const frm = document.forms[0];
    frm.id.value = anuncio.id;
    frm.titulo.value = anuncio.titulo;
    frm.descripcion.value = anuncio.descripcion;
    frm.precio.value = anuncio.precio;
    frm.cantidadPuertas.value= anuncio.cantidadPuertas;
    frm.cantidadKms.value= anuncio.cantidadKms;
    frm.potencia.value= anuncio.value;

    onCambioId(frm);
}


function onCambioId(frm){
    if(frm.id.value == ''){
        frm.alta.hidden = false;
        frm.modificar.hidden = true;
        frm.baja.hidden = true;
        frm.cancelar.hidden = false;

    }else{
        frm.alta.hidden = true;
        frm.modificar.hidden = false;
        frm.baja.hidden = false;
        frm.cancelar.hidden = false;
    }
}

export {obtenerAnuncio, mostrarAnuncio, onCambioId}