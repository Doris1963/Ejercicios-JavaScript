/*estructuras de datos guarda dats de un mismo tipo o diferente llamados lstas
idica la posicion donde esta la posicion*
const nombre de areglo =[]; O TAMBIEN SE PUEDE
const miArray =new Array();}
declaracon de un arreglo con array Y VALORES
const miArreglo=new Array(1.2.3.4.5.6.7);
const miArreglo=[1.2.3.'miarreglo ',false];*/
'use strict'
/* const miArreglo=[1,2,,2,4] 
 let otroArreglo= new Array ('a','e','f'); //se ´ppuede Hcer con let tambien
 console.log (miArreglo);*/

 /*const miArreglo=[1,2,2,4,3,3.3,'mi arreglo',false] ; // arreglo de 8 posiciones la posicion 0 cuanta//
 console.log(miArreglo[0]);*/

/*acceder a un arreglo

const miArreglo1  = [2,2,'HOLA MUNDO'];
console.log(miArreglo1[2]);

//recorriendo un arreglo coon for */
 'use strict'
const miArray= new Array("a",'b','b');
for(let i=0 ; i<3; i++){ 
console.log (miArray[i]);
}


/*recorriendo un arreglo con for each  o itereacion//

  miArray.forEach(element =>{
  console.log(element)});

   // recorrienod un arreglo con for in  y for of //

   const miArray1= new Array("a",'b','b','1.3');
   for (let i in miArray1){
      console.log([i]);
   }
// recorriendo un arreglo con  for of//

for (let i of miArray1){
   console.log(miArray1);
}
/* metodos propiedad y operaciones con arreglos
propiedad
1. length* devuelve el tamaño del arreglo 

const Arreglo2=[];
for(let i=0 ; i<10; i++){
   Arreglo2[i]= i*2
}
for( let i=0 ; i< Arreglo2.length; i++){
   console.log (Arreglo2[i]);
}
/*metodos contact une dos arreglo y generea un tercero

let miarreglo4=[1,2,3,4,5,];
let miarreglo3=[6,7,8,9,10,];

let arreglofinal=miarreglo4.concat(miarreglo3);
console.log(arreglofinal);






// metodo filter//


const Miarreglo5=[1,2,3,4,5,6];
/*for(let i =0 ; i <20; i++){  /*llamado dinamico

Miarreglo5.push((Math.random()*(30-1)+1).toFixed(0));
}
let nuevoArreglo6=Miarreglo5.filter(element=> element%2==0);
console.log (nuevoArreglo6);

// metodo push/agrega elementos //
'use strict'
const  miArreglo7=['a','n','l']; 
miArreglo7.push('c','m'); 
console.log (miArreglo7);


//metodo pop elimina el utltimo  elemento//
miArreglo7.pop(); 
console.log(miArreglo7)

//metodo shif  elemina el primer elemento//
miArreglo7.shif();

// metodo sort ordenar mi arreglo

miArreglo7.sort();


//metodo split//

let cadenaDias="lunes-martes-miercoles-jueves-vienes-sabado-domingo";
let arrayDias= cadenaDias.split("-");
console.log(arrayDias);

//metodospreadoperatodr operador de propagacion 2016 

let miArreglo9=[2,3,4,5];
let miArregloNuevo1=[...miArreglo,8,10,11];
console.log (miArregloNuevo1);

for(let i=0; i>5; i++);
miArregloNuevo=[...mArregloNuevo,((Math.random()*(50-1)+1).toFixed(0))];
console.log (miArreglo);
let arregloFinal[...miArreglo,...miArregloNuevo];*/