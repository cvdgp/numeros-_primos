let crivaDeEratostebes = [2,3,5,7,11];
let count = 0;
let txt = " <table><tr><th>TERMINO</th><th>TERMINO</th><th>TERMINO</th><th>TERMINO</th><th>TERMINO</th><th>TERMINO</th><th>TERMINO</th><th>TERMINO</th><th>TERMINO</th><th>TERMINO</th></tr><tr>";
const cargador = document.getElementById("cargador");

/*
 

1. Extraer tabla de números primos hasta el 100 y almacenarlo.
    1.1 
2.
*/    
let contador=0;
for(let i = 1; i <= 1000 ; i++){
    
    let confirmador = false;
    
    if(i > 11){
           
             if(   i % 2    !== 0
                && i % 3    !== 0
                && i % 5    !== 0
                && i % 7    !== 0
                && i % 11   !== 0
                )confirmador =  true;
    }
    
    if( confirmador)  {
        crivaDeEratostebes  .push(i);
        contador++;
    }
}

crivaDeEratostebes.forEach((item)=>{

    if(count == 10){
        txt += `</tr><tr>`;
        count = 0;
    }
    count++;
    txt += `<td>${item}</td>` ;
});


txt += `</tr></table>
<style>
th{
    background: blue;
}
th, td {
    padding: 10px;
    border: 2px solid;
    margin: 1px;
    text-align: center;
}
table{
    width: 80%;
    margin: 2em auto;

}
</style>
`;
txt += `<div>${contador}</div>`;
cargador.innerHTML    = txt;
/**   copia pega*/



function esPrimo(numero) {
    let count=0;
    for(let i = 2,raiz=Math.sqrt(numero); i <= raiz; i++)
        if(numero % i === 0) return false;
    return numero > 1;
}  

for (let x=0;x<=1000;x++) {
    if (esPrimo(x)){
        console.log("El número " + x + " es primo"+ " iteración " + count);

        count++;
}
}