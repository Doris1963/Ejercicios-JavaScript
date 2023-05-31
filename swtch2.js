/*determinar la calificacion de un studiante segun la siguiente escala de poderacion 
0 y 2.9  insufiente
3.0 y 3.5 regular
3.6 y 4.0 bien
4.1 y 4.5 muy bien
4.6  y 5.0 excelente*/


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
}