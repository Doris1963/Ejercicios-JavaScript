//funcion objetivo es nos evita reescribir el coodigo , mas orenado y cumplir una sola taREA
//


/*solo se puede solo una funcion
 function nombre de la funcion (parametros){

    CUERPO DE LA FUNCION 
    
    RETURN AUNQUE ES OPCIONAL 
 }
'use strict'
 function sumar (num1,num2){
return num1+num2;
 }
 console.log (sumar(12,16));

/* funTcion flecha 

const nombre de la funcion= (parametros )=>{
cuerpo de la funcion 
return
 }
' use stict'
const sumar=(num1,num2)=>{
const suma=num1+num2;
return suma

 }
 console.log (sumar(10.20));  /*tambien s e puede escribir 

 const sumar = (num1,num2)=> {
 const suma=num1+num2;
 return suma;
 }
   
 console.log (sumar(10.20));
se puede tambien quitar las llames y la constante suma *
 
 const sumar1 = (num1,num2) => num1+num2;
     
   console.log (sumar1(10.20));*/
  



 /*funcion como expresion*

 const saludo= function(){

    return("hola mundo ")
    console.log (saludo())*-+++++++++++++
 }

 'use strict' 
  const resta= function (){
  let mensaje='hola esto es un mensaje';
  return mensaje;
 }

 let receptor= resta();
 console.log (receptor); /* tambien recibe valores

 const resta1= function (){
    let mensaje='hola esto es un mensaje'; //tambien recibw vALORES 
    return mensaje;
   }*/
   const resta= function (num1,num2){
    let mensaje= `resta:${num1-num2}`;
    return mensaje;
   }  
   let receptor1= resta(4,2);
   console.log (receptor);

   /*template string o plantilla de cadenna sliterales
    permite crear  una cadena libreral con espacio valores hasta claculos matematicaos 
    'use strict'

    let fecha =new Date();
    let mensaje= `la fecha de hoy es ${fecha} :)`;
    console.log (mensaje);

    let num1 =90;
    let num2= 100;
    let mensaje1= `la suma de ${num1}y ${num2}es ${num1+num2}`;
    console.log (mensaje1);

    /* funciones como objetos
    partes de la funcion 
    let cedinsi= cedinsi
    const saludo = new function ("mensaje,"reurn 'hola mundo '+mensaje);

    let cedinsi= cedinsi;
    const saludo1 = new Function ("mensaje","return'hokla mundo'+mensaje1");
    console.log (saludo(cedinsi));  /*otro ejemplo

    let numero1=4;
    let numero2=9;
    const multiplicacion= new Function("numero1,numero2, return numero1*numero2");
    let multi=multiplicacion(numero1*mnumero2);
    console.log(multi);


    /*callbacks

   /* los callbacks una funcion pasada por parametros por otro funciones

   let cedinsi1="cedinsi";
   const saludo2= function (msj){
   console.log ("hola mundo"+msj);
   
   }
   function saludar(claculos,msj){
   callback(msj);

   }
   saludar(saludo, cedinsi);*/
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
