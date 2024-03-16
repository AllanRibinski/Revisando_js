/*função não parametrizada
const n1 = 8;
const n2 = 5;

function Soma(){
    return n1+n2;
}
function multiplica(){
    return n1*n2;
}
console.log(Soma(),multiplica()); */

//função parametrizada

/*function soma(n3=0,n4=0){
    return n3+n4;


console.log(soma(6,5));*/

/*//função anonima
const f1=function(v1,v2){
    return v1/v2;
}
console.log(f1(12,55));
*/

//vetores

/*let mulheres = ["Poliana","Camila","Amanda"];

    console.log(mulheres);

mulheres.map((el)=>{
    console.log(el);
})*/

//função contrutora anonima

/*const f2 = new Function('v3','v4','return v3-v4');
console.log (f2(7,3));*/

/*const imc=function(PESO,ALTURA){

     return PESO/(ALTURA*ALTURA);

};

console.log(imc(90,1.77));*/

const imc2=(PESO,ALTURA)=>{
    return PESO/(ALTURA*ALTURA);

};

console.log(imc2(90,1.77));