let cargadorDePrimos   = [2,3,5,7,11];
let crivaDeEratostebes = [2,3,5,7,11];
let count = 0;
let txt = " <table><tr><th>TERMINO</th><th>TERMINO</th><th>TERMINO</th><th>TERMINO</th><th>TERMINO</th><th>TERMINO</th><th>TERMINO</th><th>TERMINO</th><th>TERMINO</th><th>TERMINO</th></tr><tr>";
const cargador = document.getElementById("cargador");

/*
 

1. Extraer tabla de números primos hasta el 100 y almacenarlo.
    1.1 
2.
*/    

for(let i = 0; i < 100 ; i++ ){
    let confirmador = false;
    
 
    crivaDeEratostebes.forEach(item=>{

        if(i % 2  != 0) confirmador = true;
        
    });
    if( confirmador) {
        cargadorDePrimos    .push(i);
        crivaDeEratostebes  .push(i);

        if(count == 10){
            txt += `</tr><tr>`;
            count = 0;
        }
        count++;
        txt += `<td>${cargadorDePrimos[i]}</td>` ;
    };
    
    

}    

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
cargador.innerHTML    = txt;
