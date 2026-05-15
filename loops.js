//operasor AND
let idade = 18
let carteira = true
if (idade >= 18 && carteira === true){
    console.log("pode entrar no evento");
}else{
    console.log("não pode entrar no evento");
}

//operador OR (||)

let estachovendo = false;
let temguardachuva = true;

if(estachovendo || temguardachuva){
    console.log("você pode sair de casa");
}else{
    console.log("melhor ficar em casa");
}

// operador NOT

let lampadaAcesa = false;

if(!lampadaAcesa){
    console.log("A lampada está apagada")
}

//loops

let contador =5;

while(contador<=1){
    console.log(contador)
    contador++;
}

for(let i = 0; i<=10; i++){
    console.log(i)
}
console.log("FIM!")