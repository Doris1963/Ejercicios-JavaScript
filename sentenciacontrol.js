/*estructuras de control permite cambia el flujo secuencial del codigo para validar un dato l que se vaya por un camino o por otro camino
 operador ternario
operador ternario siempre da un resultafo

let numero=144;

let resultado= numero>0?"numero es positivo ":"es negativo"
console.log("el resutlado es:"+resultado);

let resultado1=numero%2===0 ? "par": "impar";
console.log("el resutlado es:"+resultado1);
 

// se coloca IF (){ coondicion verdadera
//bloque de codigo
//}(())
//else{  condicion fallsa
//BLOQUE DE CODIGO
//}//

'use strict'
//condicional simple*/

/*let numero1=115; 

if (numero1 %2===0){
    console.log ("la condicion es verdadera");
    console.log("el numero"+numero1+"es par");
}else{
    console.log ("la condicion es falsa");
    console.log("el numero"+numero1+"es impar");
    

let numero = 200;
   if(numero%2===0){
      if(numero<=100){
         console.log ("el numero es:"+numero+ "es par y es menor o igual a 100");
      }
    } else {
      if((numero>100 ) && (numero <200)){
             console.log("el numero es impar y es mayor 100"+numero+"es impar y es menor de 200");
      }else{
        console.log("el numero es impar "+numero+"es mayuor que 200")
      }
   }*/

   //switch(opcion){
//CASE 1:
//INTRUCCCION;
////break
//CASE 1:
//NTRUCCCION;
//break
//DEFAUL 
//INTYRUCCIONN
//}

let opcion = prompt('ingrese una vocal');
switch(opcion){
 case 'a':
        alert('es la letra a');
        break; 
 case 'e':
         alert('es la letra e');
            break; 
 case 'i':
        alert('es la letra i');
        break;    
 case 'o':
        alert('es la letra o');
        break;  
 case 'u': 
       alert('es la letra u');
         break;                              
}


/*otro ejemplo

   /*determinar la calificacion de un studiante segun la siguiente escala de poderacion 
0 y 2.9  insufiente
3.0 y 3.5 regular
3.6 y 4.0 bien
4.1 y 4.5 muy bien
4.6  y 5.0 excelente


let calificacion=4.6;
let mensaje="";
swuich(true){
    case calificacion >=0 && cakufucacion <= 2.9
    mensaje= 'bajo $ {Calificacion}';  
    break;    
    case calificacion >=3.0 && cakufucacion <= 3.5
    mensaje= 'basico $ {Calificacion}';  
    break;
    case calificacion >=3.6 && cakufucacion <= 4.0
    mensaje= 'bueno $ {Calificacion}';  
    break;
    case calificacion >=4.1 && cakufucacion <= 4.5
    mensaje= 'alto$ {Calificacion}';  
    break;
    case calificacion >=4.6 && cakufucacion <= 5.0;
    mensaje= 'superior $ {Calificacion}';  
    break;
    default;
     mensaje='fuera del rango de calificacin ${calificacion}';
  console.log(mensaje);
}*/