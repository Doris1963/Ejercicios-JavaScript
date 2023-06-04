let curso = {
    nombre: 40,  //nombre es propiedad y 40 es el valor igual para todos//
    nivel: 'medio',
    capacidad: 25,
}
'use stric'

let persona = {
    nombre: 'carlos',
    edad: 25,
    pesos: 33
}
//
persona.nombre = 'humberto '; //para cambiar el valor de la variable//
console.log(persona.nombre);


/*crear un objeto a partir de un comstructor// es una funcion que permite dar valor iniciales a las propiedad de la clase
sintaxis 
function curso (nom,dur,niv,capacidad){  PRIMERO LA PALABRA RESEERVADA FUNCTION 
    LUEGO EL NOMBRE DEL OBJETOO Y ENTRE PARENTISIS LAS PROPIEDAD */

function curso(nom, dur, niv, cap) {
    this.nombre = nom;
    this.duracion = dur;
    this.nivel = niv;
    this.capacidad = cap
}

let micurso = new curso(mat, 20, avanxado, 20); // instanciar el objeto/ o creacion del objeto/
console.log(micurso);

/* ellementos de java scripy
definir una clase 

classpersona   utilizar palabra reservada class despues el nombre de la clase con mayuscula Persona 
despues en () los parametros y luego los valores inciales e, nomibre , edad, peso  
despues lleva la palabra reserva This.nombres=nombres; luego van las metodos
 las clases deben ir en cada archivo*/

class Persona {
    CONTRUCTOR(nombre, apellidos, correo, edad) {
        this.nombres = nombres;
        this.apellidos = apellidos;
        this.correo;
        this.edad;



    }
    getDatos() {
        const datos = `Nombres: ${this.nombres}
        Apellidos:${this.apellidos}
        Edad:${this.edad}
        Correo: ${this.correo}
        return datos;
    }

       getClasificacion(){
       if((this.edad>17)) && (this,edad< 50)){
        return"ADUKLTO"
        }else {
         if(this,edad<0=17) return "menor de edad";
       else return "adulto mayor"
}

 }

