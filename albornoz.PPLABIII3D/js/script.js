import {crearTabla} from './tabla.js'
import Anuncio from "./anuncio.js"
import Anuncio_Auto from "./anuncio_auto.js"
import {obtenerAnuncio, mostrarAnuncio, onCambioId} from './frmcontroler.js';

let lista;
let frm;
let proximoId;
let divTabla;

window.addEventListener('load', inicializarManejadores);

function inicializarManejadores(){
    lista = obtenerAnuncios();
    
    divTabla = document.getElementById('divTabla');
    
    actualizarTabla();
    frm = document.forms[0];
    proximoId = obtenerId();
    onCambioId(frm);
    frm.cancelar.addEventListener('click', e=>{
        frm.id.value = '';
        onCambioId(frm);
    })
    frm.addEventListener('submit', e=>{
        e.preventDefault();

        if(e.submitter.id == "alta"){
            const nuevoAnuncio = obtenerAnuncio(proximoId, frm);
            if(nuevoAnuncio){
                lista.push(nuevoAnuncio);
                proximoId++;
                guardarDatos();
                actualizarTabla();
                frm.reset();
            }
        }
        if(e.submitter.id == "modificar"){
            const nuevoAnuncio = obtenerAnuncio(Number(frm.id.value), frm);
            lista = lista.map(function(obj){
                if(obj.id == nuevoAnuncio.id){
                    return nuevoAnuncio;
                }else{
                    return obj;
                }
            });
            guardarDatos();
            actualizarTabla();
            frm.reset();
            frm.id.value = '';
            onCambioId(frm);
        }
        if(e.submitter.id == "baja"){
            const id = Number(frm.id.value);
            lista = lista.filter(function(obj){
                return obj.id != id;
            });
            guardarDatos();
            actualizarTabla();
            frm.reset();
            frm.id.value = '';
            onCambioId(frm);
        }        
    })
}


function obtenerAnuncios(){
    return JSON.parse(localStorage.getItem('anuncio')) || [];
}

function obtenerId(){
    return JSON.parse(localStorage.getItem('nextId')) || 20000;
}


function guardarDatos(){
    localStorage.setItem('anuncio', JSON.stringify(lista));
    localStorage.setItem('nextId', proximoId);
}

function actualizarTabla(){
    vaciarElemento(divTabla);
    insertarSpinner(divTabla);
    
    setTimeout(() => {
        
        vaciarElemento(divTabla);
        divTabla.appendChild(crearTabla(lista));
    }, 3000);
}

function vaciarElemento(elemento){
    while (elemento.firstChild) {
        elemento.removeChild(elemento.firstChild);
      }
}
function insertarSpinner(elemento){
    const span = document.createElement('span');
    span.className = 'spinner';
    elemento.appendChild(span);
}
