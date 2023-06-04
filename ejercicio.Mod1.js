  /*convetir litros a centilitros,decilitros,galones y oonzas */
let litros=25;
let centilitros= litros*100;
console.log( "el resultado de convertir litros a centilitros es:"+centilitros);

let decilitros=80;
let decilitros1= litros*10;
console.log("el resultado de convertir litros a decilitros es :"+decilitros1);

let galon=80;
let galon1= galon/3.78;
console.log("el resultado de convertir litros a galones  es :"+galon1);

let litros2=2;
let onzas=  litros2*33.814
console.log("el resultado de convertir litros a onzas   es :"+onzas);

/*aloritmo de dos operaicones basiccas */

let num1=8;
let num2=3;

let resuSuma=num1+num2;
let resuresta=num1-num2;
console.log("el resultado de la suma es "+resuSuma);
console.log("el resultado de la resta es "+resuresta);


/*NOMINA */


let salario=100000;
let eps=0;
let subTransp=0;
let cajaComp=12000;
let salarioNeto=0;

if (salario< 699.999){
    eps=salarioNeto*0.02;
    subTransp=salarioNeto*0.06;
    cajaComp=0;
    
}
else if
    ( salario >= 700000 && salario <= 999999){
      eps=salarioNeto*0.06;
      cajaComp=12000;
     }
else if( salario>1000000){
     eps=salarioNeto*0.06;
    }
     salarioNeto=salario-eps+cajaComp+subTransp;

  console.log("el salario neto a pagar es :"+salarioNeto);

/* CONVERSION DE CELIUS A FAHRENHEIT*/
let centigrados=10;
let farengeit=50;
let resulcentigrtados=0;
let resulfarengit=0;
resulfarengit=((10)*9/5+32);
resulcentigrtados=((100-32)*5);
console.log("los grados centigrados a fahrenheit es :"+resulfarengit);
console.log("los grados farenheit a centiograos es :"+resulcentigrtados);


/*VALOR DE GALONRES EXPRESADDA EN LITROS*/

let valorCentilitros=25;
let galonCent=378.64;
let valorgalon=9463.50;
let galonLitros=3.7854;
let litroGaso=0;
let numGalon=20
let totalPagar=valorgalon*numGalon;
let totalLitros=numGalon*3.7854;

console.log("valor a pagar en galones:"+totalPagar);
console.log("los litros despachados son:"+totalLitros);
